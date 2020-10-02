const faker = require('faker');
const db = require('../database/index.js');

const galleries = [];
for (let productId = 1; productId <= 2; productId++) {
  let details = [];

  for (let imgId = 1; imgId <= 13; imgId++) {
    let productDescription = faker.commerce.productDescription();
    details.push({
      _id: imgId,
      name: productDescription,
      img_url: `https://lego-product-pictures.s3-us-west-1.amazonaws.com/product${productId}-image${imgId}.jpg`,
      selected: false,
    });
  }

  galleries.push({
    pid: productId,
    name: faker.commerce.productName(),
    details,
  });
}

db.Gallery.insertMany(galleries, (err, results) => {
  if (err) {
    console.error('[FAILED] insert 100 fake galleries: ', err);
  } else {
    console.log('[SUCCESS] insert 100 fake galleries data: ', results[0].details);
  }
});