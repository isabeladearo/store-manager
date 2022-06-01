const connection = require('../db/connection');

const getAll = () => connection.execute('SELECT * FROM products');

const getById = (id) =>
  connection.execute('SELECT * FROM products WHERE id = ?', [id]);

const getByName = (name) =>
  connection.execute('SELECT * FROM products WHERE name = ?', [name]);

const create = async (name, quantity) => {
  const [row] = await connection.execute(
    'INSERT INTO products (name, quantity) VALUES (?,?)',
    [name, quantity],
  );

  return row.insertId;
};

module.exports = { getAll, getById, getByName, create };
