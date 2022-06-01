const { ProductsService } = require('../services');

const getAll = async (_req, res) => {
  const [products] = await ProductsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [product] = await ProductsService.getById(id);

  if (!product.length) {
    return res.status(404).json({ message: 'Product not found' });
  } 
  return res.status(200).json(product[0]);
};

module.exports = { getAll, getById };
