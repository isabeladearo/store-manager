const { SalesService } = require('../services');

const getAll = async (_req, res) => {
  const [sales] = await SalesService.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [sales] = await SalesService.getById(id);

  if (!sales.length) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sales);
};

const create = async (req, res) => {
  const createdSale = await SalesService.create(req.body);
  return res.status(201).json(createdSale);
};

module.exports = { getAll, getById, create };
