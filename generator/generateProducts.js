/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');

const records = 100;
const csv = fs.createWriteStream('products.csv');
csv.write('product_id,product_name,image,image_id,image_description\n');

const generateData = (file, callback) => {
  let count = 0;

  const seed = () => {
    let status = true;
    while (count < records && status === true) {
      count += 1;
      const product_id = count;
      const product_name = faker.commerce.productName();
      const image = faker.image.imageUrl();
      const image_id = count;
      const image_description = faker.lorem.sentence();
      const data = `${product_id},${product_name},${image},${image_id},${image_description}\n`;
      if (count === records) {
        file.write(data, callback);
      } else {
        status = file.write(data);
      }
    }
    if (count < records) {
      file.once('drain', seed);
    }
  };
  seed();
};

generateData(csv, () => { csv.end(); });
