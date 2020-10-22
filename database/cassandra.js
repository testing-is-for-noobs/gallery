const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'lego',
});

const getProduct = (pid, callback) => {
  const selectQuery = 'SELECT image_id,image,image_description FROM products WHERE product_id = ?';
  client.execute(selectQuery, [pid], { prepare: true })
    .then((result) => callback(null, result.rows))
    .catch((err) => callback(err));
};

module.exports = {
  getProduct,
};
