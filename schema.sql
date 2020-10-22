DROP DATABASE IF EXISTS lego;

CREATE DATABASE lego;

\c lego;

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  gallery jsonb
);

COPY products (product_id, product_name, gallery) FROM '/Users/rms/Desktop/HR/hrsjo/SDC/gallery/productsPostgres.csv'DELIMITER '|'CSV HEADER;

CREATE index product_idx ON products (product_id);