const { SalesModel, SalesProductsModel } = require('../models');

const getAll = () => SalesModel.getAll();

const getById = (id) => SalesModel.getById(id);

const create = async (products) => {
  const createdSaleId = await SalesModel.create();

  await Promise.all(products.map(({ productId, quantity }) =>
    SalesProductsModel.create(createdSaleId, productId, quantity)));

  return { id: createdSaleId, itemsSold: products };
};

module.exports = { getAll, getById, create };
