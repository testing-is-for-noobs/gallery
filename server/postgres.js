require('newrelic');
/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const postgres = require('../database/postgres.js');

const DIST_DIR = path.join(__dirname, '/../client/dist');

const port = 9043;
const app = express();

app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// FOR POSTGRES
// READ

app.get('/products/:pid', (req, res) => {
  // const { pid } = req.params;
  postgres.getGallery(req.params.pid, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

// UPDATE
app.put('/products/:pid', (req, res) => {
  const { pid } = req.params;
  const { id, image, description } = req.body;
  const item = { id, image, description };
  const stringifiedItem = JSON.stringify(item);

  postgres.addGalleryItem(pid, stringifiedItem, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

// DELETE
app.delete('/products/:pid', (req, res) => {
  const id = req.params.pid;
  res.status(200).send('DELETE request');
  console.log(`DELETE request for product ${id}`);
});

// CREATE
app.post('/products/:pid', (req, res) => {
  const id = req.params.pid;
  res.status(200).send('PUT request');
  console.log(`PUT request for product ${id}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
