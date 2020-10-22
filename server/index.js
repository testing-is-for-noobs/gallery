/* eslint-disable no-console */
const path = require('path');
const express = require('express');

const queries = require('../database/index.js');
const cassandra = require('../database/cassandra.js');
const testData = require('./testData.js');

const DIST_DIR = path.join(__dirname, '/../client/dist');

const port = 1420;
const app = express();

app.use(express.static(DIST_DIR));

// FOR MONGODB
// READ
// app.get('/products/:pid', (req, res) => {
//   const { pid } = req.params;
//   queries.getGallery(pid, (err, galleries) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       res.status(200).send(galleries);
//     }
//   });
// });

// CREATE
app.post('/products', (req, res) => {
  queries.createGallery(testData, (err, galleries) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(galleries);
      console.log(testData);
    }
  });
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

// FOR CASSANDRA
// READ
app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  cassandra.getProducts(pid, (err, products) => {
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
