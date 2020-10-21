const { Pool } = require('pg');

const pool = new Pool({
  user: 'rms',
  database: 'lego',
  port: 5432,
});

pool.connect()
  .then(() => console.log('POSTGRES Connected'))
  .catch((err) => console.log('POST Connect Error : ', err));

const getGallery = (pid, callback) => {
  pool.query(`SELECT gallery FROM products WHERE product_id = ${pid}`, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
};

module.exports = {
  getGallery,
};
