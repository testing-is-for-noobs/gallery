DROP DATABASE IF EXISTS lego;

CREATE DATABASE lego;

\c lego;

CREATE TABLE productsInfo (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT UNIQUE NOT NULL,
  images TEXT [],
  image_ids NUMERIC [],
  image_descriptions TEXT []
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

COPY productsInfo (product_id, product_name, images, image_ids, image_descriptions) FROM '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/productsInfo.csv'DELIMITER '|'CSV HEADER;

-- COPY master_table (product_id, product_name) TO 'products.csv';

-- COPY products.info (department, category, subcategory, brand, price, id) TO 'recommendations.csv';

-- COPY products.recommendations (department, category, subcategory, brand, price, id) FROM 'recommendations.csv';