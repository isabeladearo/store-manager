const connection = require('../db/connection');

const getAll = () => connection.execute('SELECT * FROM StoreManager.sales');

const getById = (id) =>
  connection.execute('SELECT * FROM StoreManager.sales WHERE id = ?', [id]);

module.exports = { getAll, getById };

// O endpoint para listar vendas deve ser acessível através do caminho (/sales) e (/sales/:id);

// Através do caminho /sales, todas as vendas devem ser retornadas;

// Através do caminho /sales/:id, apenas a venda com o id presente na URL deve ser retornada;

// o resultado deve ser ordernado de forma crescente pelo campo saleId, em caso de empate, ordernar também de forma crescente pelo campo productId;
