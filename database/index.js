const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/galleryDatabase', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully conneted to mangoDB');
});

let gallerySchema = new mongoose.Schema({
  name: String,
  details: [{ name: String, img_url: String }],
});

let Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = {
  Gallery,
};
