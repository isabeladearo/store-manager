const connection = require('../db/connection');

const create = (saleId, productId, quantity) =>
  connection.execute(
    `INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
    [saleId, productId, quantity],
  );

module.exports = { create };
