/* eslint-disable no-console */
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

const addGalleryItem = (pid, item, callback) => {
  pool.query(`Update products SET gallery = gallery || '${item}' ::jsonb WHERE product_id = ${pid}`, (err, rows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

module.exports = {
  getGallery,
  addGalleryItem,
};
