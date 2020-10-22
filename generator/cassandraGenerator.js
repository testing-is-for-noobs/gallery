/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('fs');

const records = 10000000;
const csv = fs.createWriteStream('productsCassandra.csv');
csv.write('product_id|product_name|image|image_id|image_description\n');

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
      const images = ['https://unzwillingimg.s3-us-west-1.amazonaws.com/images/main.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/1.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/2.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/3.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/4.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/5.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/6.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/7.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/8.jpg', 'https://unzwillingimg.s3-us-west-1.amazonaws.com/images/9.jpg'];
      const image_ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const image_descriptions = new Array(10).fill(null).map(() => faker.fake('{{lorem.sentence}}'));

      const data = `${product_id}|${product_name}|${images[0]}|${image_ids[0]}|${image_descriptions[0]}\n${product_id}|${product_name}|${images[1]}|${image_ids[1]}|${image_descriptions[1]}\n${product_id}|${product_name}|${images[2]}|${image_ids[2]}|${image_descriptions[2]}\n${product_id}|${product_name}|${images[3]}|${image_ids[3]}|${image_descriptions[3]}\n${product_id}|${product_name}|${images[4]}|${image_ids[4]}|${image_descriptions[4]}\n${product_id}|${product_name}|${images[5]}|${image_ids[5]}|${image_descriptions[5]}\n${product_id}|${product_name}|${images[6]}|${image_ids[6]}|${image_descriptions[6]}\n${product_id}|${product_name}|${images[7]}|${image_ids[7]}|${image_descriptions[7]}\n${product_id}|${product_name}|${images[8]}|${image_ids[8]}|${image_descriptions[8]}\n${product_id}|${product_name}|${images[9]}|${image_ids[9]}|${image_descriptions[9]}\n`;
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
