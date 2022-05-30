const { ProductsModel } = require('../models');

const getAll = () => ProductsModel.getAll();

const getById = (id) => ProductsModel.getById(id);

module.exports = { getAll, getById };
