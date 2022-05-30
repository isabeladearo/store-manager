const { SalesModel } = require('../models');

const getAll = () => SalesModel.getAll();

const getById = (id) => SalesModel.getById(id);

module.exports = { getAll, getById };
