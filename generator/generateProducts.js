/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');

const records = 1;
const csv = fs.createWriteStream('productsInfo.csv');
csv.write('product_id|product_name|images|image_ids|image_descriptions\n');

const generateData = (file, callback) => {
  let count = 0;

  const seed = () => {
    let status = true;
    while (count < records && status === true) {
      count += 1;
      const product_id = count;
      const product_name = faker.commerce.productName();
      const images = (['https://unzwillingimg.s3-us-west-1.amazonaws.com/images/main.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/1.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/2.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/3.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/4.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/5.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/6.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/7.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/8.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/9.jpg']).toString();
      const image_ids = ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString();
      const image_descriptions = (new Array(10).fill(null).map(() => faker.fake('{{lorem.sentence}}'))).toString();
      const data = `${product_id}|${product_name}|{${images}}|{${image_ids}}|{${image_descriptions}}\n`;
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
