DROP KEYSPACE [IF EXISTS] lego;

CREATE KEYSPACE lego
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'}
  AND durable_writes = false;

CREATE TABLE lego.products (
  product_id int,
  product_name text,
  image text,
  image_id int,
  image_description text,
  PRIMARY KEY (product_id, image_id)
);
