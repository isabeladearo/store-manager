const connection = require('../db/connection');

const getAll = () => connection.execute('SELECT * FROM products');

const getById = (id) =>
  connection.execute('SELECT * FROM products WHERE id = ?', [id]);

const getByName = (name) =>
  connection.execute('SELECT * FROM products WHERE name = ?', [name]);

const create = (name, quantity) =>
  connection.execute(
    'INSERT INTO products (name, quantity) VALUES (?,?)',
    [name, quantity],
  );

const update = (id, name, quantity) => 
  connection.execute(
    'UPDATE products SET name = ?, quantity = ? WHERE id = ?',
    [name, quantity, id],
  );

const remove = (id) => 
  connection.execute('DELETE FROM products WHERE id = ?', [id]);

const updateQuantity = (id, quantity) => 
  connection.execute(
    'UPDATE products SET quantity = quantity + ? WHERE id = ?',
    [quantity, id],
  );

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove,
  updateQuantity,
};
