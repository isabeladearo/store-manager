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

const create = async (req, res) => {
  const createdProduct = await ProductsService.create(req.body);

  if (!createdProduct) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  return res.status(201).json(createdProduct);
};

const update = async (req, res) => {
  const { id } = req.params;

  const updatedProduct = await ProductsService.update(id, req.body);

  if (!updatedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(updatedProduct);
};

module.exports = { getAll, getById, create, update };
