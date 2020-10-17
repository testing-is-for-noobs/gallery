CREATE KEYSPACE IF NOT EXISTS lego
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'}
  AND durable_writes = false;

  CREATE TABLE IF NOT EXISTS lego.products (
  id text,
  name text,
  image set<text>,
  PRIMARY KEY (id)
);