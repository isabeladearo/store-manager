const connection = require('../db/connection');

const getAll = () =>
  connection.execute(
    `SELECT
      sp.sale_id AS 'saleId',
      sp.product_id AS 'productId',
      sp.quantity AS 'quantity',
      s.date AS 'date'
    FROM sales_products sp
    INNER JOIN sales s ON s.id = sp.sale_id`,
  );

const getById = (id) =>
  connection.execute(
    `SELECT 
      sp.product_id AS 'productId',
      sp.quantity AS 'quantity',
      s.date AS 'date'
    FROM sales_products sp
    INNER JOIN sales s ON s.id = sp.sale_id
    WHERE s.id = ?`,
    [id],
  );

const getByIdAndProduct = (saleId, productId) =>
  connection.execute(
    `SELECT 
      sp.product_id AS 'productId',
      sp.quantity AS 'quantity',
      s.date AS 'date'
    FROM sales_products sp
    INNER JOIN sales s ON s.id = sp.sale_id
    WHERE s.id = ? AND sp.product_id = ?`,
    [saleId, productId],
  );

const create = () => 
  connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );

const remove = (id) =>
  connection.execute('DELETE FROM sales WHERE id = ?', [id]);

module.exports = { getAll, getById, getByIdAndProduct, create, remove };
