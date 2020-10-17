DROP DATABASE IF EXIST lego;

CREATE DATABASE lego;

USE lego;

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT UNIQUE NOT NULL,
);

CREATE TABLE images (
  image_id SERIAL PRIMARY KEY,
  product_id INT,
  image TEXT NOT NULL,
  image_description TEXT UNIQUE NOT NULL,
  FOREIGN KEY (product_id)
  REFERENCES products (product_id)
);