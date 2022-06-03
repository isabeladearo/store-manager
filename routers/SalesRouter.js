const express = require('express');
const { SalesController } = require('../controllers');
const { validateSales } = require('../middlewares');

const router = express.Router();

router.get('/', SalesController.getAll);

router.get('/:id', SalesController.getById);

router.post('/', validateSales, SalesController.create);

router.put('/:id', validateSales, SalesController.update);

router.delete('/:id', SalesController.remove);

module.exports = router;
