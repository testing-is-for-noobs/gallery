/* eslint-disable no-console */
const path = require('path');
const express = require('express');

const postgres = require('../database/postgres.js');

const DIST_DIR = path.join(__dirname, '/../client/dist');

const port = 9043;
const app = express();

app.use(express.static(DIST_DIR));

// FOR POSTGRES
// READ

app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  postgres.getGallery(pid, (err, result) => {
    if (err) {
      res.status(400).send(err);
      console.log('POSTGRES GET REQUEST ERROR');
    } else {
      res.status(200).send(result);
    }
  });
});

// app.get('/products/:pid', (req, res) => {
//   const { pid } = req.params;
//   postgres.getGallery(pid)
//     .then((result) => { res.stats(200).send(result); })
//     .catch((err) => { res.status(400).send(err); });
// });

// CREATE
app.post('/products', (req, res) => {
  res.status(200).send('POST request');
  console.log('POST request for product');
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