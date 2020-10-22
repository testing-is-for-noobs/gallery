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
  pool.query(`SELECT gallery FROM products WHERE product_id = ${pid}`)
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

module.exports = {
  getGallery,
};
