DROP DATABASE IF EXISTS lego;

CREATE DATABASE lego;

\c lego;

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT UNIQUE NOT NULL,
  gallery TEXT []
);

-- CREATE TABLE products (
--   product_id SERIAL PRIMARY KEY,
--   product_name TEXT UNIQUE NOT NULL
-- );

-- CREATE TABLE images (
--   image_id SERIAL PRIMARY KEY,
--   product_id INT,
--   image TEXT NOT NULL,
--   image_description TEXT UNIQUE NOT NULL,
--   FOREIGN KEY (product_id)
--     REFERENCES products (product_id)
-- );

/*
Should I change my Schema??

1. One table
  product_id
  product_name
  gallery: objects in array
  for example,
  gallery:[
    {id: 1
    description: good
    images: [url1, url2, ....]
    },
   {id: 2
    description: bad
    images: [url1, url2, ....]
    },
    .
    .
    .
  ]
*/


COPY products (product_id, product_name, gallery) FROM '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/productsInfo.csv'DELIMITER '|'CSV HEADER;

-- COPY productsInfo (product_id, product_name) TO '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/products.csv';
-- COPY products (product_id, product_name) FROM '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/products.csv';

-- COPY productsInfo (image_id, product_name) TO '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/images.csv';
-- COPY images (product_id, product_name) FROM '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/images.csv';