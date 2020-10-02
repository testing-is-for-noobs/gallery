const path = require('path');
const express = require('express');
const db = require('../database/index.js');

const DIST_DIR = path.join(__dirname, '/../client/dist');

const port = 1420;
const app = express();

app.use(express.static(DIST_DIR));

app.get('/:pid/getGalleries', (req, res) => {
  db.Gallery.find({ pid: req.params.pid }, (err, galleries) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(galleries);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
