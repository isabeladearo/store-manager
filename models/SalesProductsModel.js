const connection = require('../db/connection');

const create = (saleId, productId, quantity) =>
  connection.execute(
    `INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
    [saleId, productId, quantity],
  );

const update = (saleId, productId, quantity) =>
  connection.execute(
    `UPDATE sales_products
      SET quantity = ?
      WHERE sale_id = ? AND product_id = ?`,
    [quantity, saleId, productId],
  );

module.exports = { create, update };
