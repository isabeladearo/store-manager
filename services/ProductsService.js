const { ProductsModel } = require('../models');

const getAll = () => ProductsModel.getAll();

const getById = (id) => ProductsModel.getById(id);

const create = async ({ name, quantity }) => {
  const [products] = await ProductsModel.getByName(name);

  if (products.length) return false;
  
  const id = await ProductsModel.create(name, quantity);

  return { id, name, quantity };
};

module.exports = { getAll, getById, create };
