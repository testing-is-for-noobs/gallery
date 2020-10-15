/* eslint-disable no-console */
const path = require('path');
const express = require('express');

const db = require('../database/index.js');
const testData = require('./testData.js');

const DIST_DIR = path.join(__dirname, '/../client/dist');

const port = 1420;
const app = express();

app.use(express.static(DIST_DIR));

// READ
app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  db.Gallery.find({ pid }, (err, galleries) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(galleries);
    }
  });
  // const id = req.params.pid;
  // res.status(200).send('GET request');
  // console.log(`GET request for product ${id}`);
});

// CREATE
app.post('/products', (req, res) => {
  // var testData2 = {
  //   pid: 123456,
  // };

  db.Gallery.create(testData, (err, galleries) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(galleries);
      console.log(testData);
    }
  });
  // res.status(200).send('POST request');
  // console.log('POST request for new product');
});

// DELETE
app.delete('/products/:pid', (req, res) => {
  const id = req.params.pid;
  res.status(200).send('DELETE request');
  console.log(`DELETE request for product ${id}`);
});

// UPDATE
app.put('/products/:pid', (req, res) => {
  const id = req.params.pid;
  res.status(200).send('PUT request');
  console.log(`PUT request for product ${id}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
