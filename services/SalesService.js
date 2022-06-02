const { SalesModel, SalesProductsModel } = require('../models');

const getAll = () => SalesModel.getAll();

const getById = (id) => SalesModel.getById(id);

const create = async (products) => {
  const createdSaleId = await SalesModel.create();

  await Promise.all(products.map(({ productId, quantity }) =>
    SalesProductsModel.create(createdSaleId, productId, quantity)));

  return { id: createdSaleId, itemsSold: products };
};

const update = async (id, product) => {
  const { productId, quantity } = product[0];

  await SalesProductsModel.update(id, productId, quantity);

  return { saleId: id, itemUpdated: product };
};

const remove = async (id) => {
  const [sale] = await getById(id);

  if (!sale.length) return false;

  SalesModel.remove(id);
  SalesProductsModel.remove(id);

  return true;
};

module.exports = { getAll, getById, create, update, remove };
