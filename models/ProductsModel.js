const connection = require('../db/connection');

const getAll = () => connection.execute('SELECT * FROM StoreManager.products');

const getById = (id) =>
  connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);

module.exports = { getAll, getById };
