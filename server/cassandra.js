/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const CS = require('../database/cassandra.js');

const DIST_DIR = path.join(__dirname, '/../client/dist');

const port = 9042;
const app = express();

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));

// FOR CASSANDRA
// READ
app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  CS.getProduct(pid, (err, products) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(products);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
