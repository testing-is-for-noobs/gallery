const express = require('express');
const db = require('../database/index.js');

const port = 1420;
const app = express();

app.use(express.static(__dirname + '../public/dist'));

app.get('/gallery/getGalleries', (req, res) => {
  db.Gallery.find({}, function (err, galleries) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(galleries);
    }
  })
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
