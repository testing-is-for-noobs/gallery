const express = require('express');
const db = require('../database/index.js');
// const bodyParser = require('body-parser');

const port = 1420;
const app = express();

// app.use(bodyParser.json());
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

// app.put('/reviews/upvote/:voteType/:id', (req, res) => {
//   db.vote(req.params.voteType, req.params.id).then((data) => {
//     res.status(202).send(data);
//   }).catch((err) => {
//     res.status(404).send(err);
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });