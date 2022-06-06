const { SalesModel, SalesProductsModel, ProductsModel } = require('../models');

const getAll = () => SalesModel.getAll();

const getById = (id) => SalesModel.getById(id);

const create = async (products) => {
  const productsInStock = await Promise.all((products
    .map(async ({ productId, quantity }) => {
      const [inStock] = await ProductsModel.getById(productId);
      if (inStock[0].quantity > quantity) return true;
      return false;
    })));

  if (productsInStock.includes(false)) return false;

  const createdSale = await SalesModel.create();

  await Promise.all(products.map(({ productId, quantity }) =>
    SalesProductsModel.create(createdSale[0].insertId, productId, quantity)));
  
  await Promise.all(products.map(({ productId, quantity }) => 
    ProductsModel.updateQuantity(productId, quantity * -1)));

  return { id: createdSale[0].insertId, itemsSold: products };
};

const update = async (id, product) => {
  const { productId, quantity } = product[0];

  const [productsInStock] = await ProductsModel.getById(productId);
  const [currentSale] = await SalesModel.getByIdAndProduct(id, productId);

  const currentStock = productsInStock[0].quantity + currentSale[0].quantity;

  if (currentStock < quantity) return false;

  await SalesProductsModel.update(id, productId, quantity);

  ProductsModel.updateQuantity(productId, currentSale[0].quantity - quantity);

  return { saleId: id, itemUpdated: product };
};

const remove = async (id) => {
  const [sale] = await getById(id);

  if (!sale.length) return false;

  await Promise.all(sale.map(({ productId, quantity }) => 
    ProductsModel.updateQuantity(productId, quantity)));

  SalesModel.remove(id);
  SalesProductsModel.remove(id);

  return true;
};

module.exports = { getAll, getById, create, update, remove };
