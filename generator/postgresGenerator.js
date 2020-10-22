/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');

const records = 1000000;
const csv = fs.createWriteStream('productsPostgres.csv');
csv.write('product_id|product_name|gallery\n');

const generateData = (file, callback) => {
  let count = 0;

  const seed = () => {
    let status = true;
    while (count < records && status === true) {
      if ((count % 100000) === 0) {
        console.log('COUNT : ', count);
      }
      count += 1;
      const product_id = count;
      const product_name = faker.commerce.productName();
      const gallery = [];
      for (let i = 0; i < 10; i += 1) {
        const imageInfo = {};
        const descriptions = (new Array(10).fill(null).map(() => faker.fake('{{lorem.sentence}}')));
        const images = ['https://unzwillingimg.s3-us-west-1.amazonaws.com/images/main.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/1.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/2.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/3.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/4.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/5.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/6.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/7.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/8.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/9.jpg'];
        imageInfo.id = i;
        imageInfo.image = images[i];
        imageInfo.description = descriptions[i];
        gallery.push(imageInfo);
      }
      const stringifyGallery = JSON.stringify(gallery).replace(/\[/g, '{').replace(/]/g, '}');

      const data = `${product_id}|${product_name}|${stringifyGallery}\n`;
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
