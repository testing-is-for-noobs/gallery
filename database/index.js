/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gallerydatabase', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('successfully connected to mangoDB');
});

// Schema
const gallerySchema = new mongoose.Schema({
  pid: Number,
  name: String,
  details: [{ _id: Number, name: String, img_url: String }],
});

// Model
const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = {
  Gallery,
};
