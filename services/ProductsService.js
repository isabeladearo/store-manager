const { ProductsModel } = require('../models');

const getAll = () => ProductsModel.getAll();

const getById = (id) => ProductsModel.getById(id);

const create = async ({ name, quantity }) => {
  const [products] = await ProductsModel.getByName(name);

  if (products.length) return false;
  
  const id = await ProductsModel.create(name, quantity);

  return { id, name, quantity };
};

const update = async (id, { name, quantity }) => {
  const [product] = await getById(id);

  if (!product.length) return false;

  await ProductsModel.update(id, name, quantity);

  return { id, name, quantity };
};

const remove = async (id) => {
  const [product] = await getById(id);

  if (!product.length) return false;

  ProductsModel.remove(id);

  return true;
};

module.exports = { getAll, getById, create, update, remove };
