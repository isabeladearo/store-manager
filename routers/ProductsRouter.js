const express = require('express');
const { ProductsController } = require('../controllers');
const { validateProducts } = require('../middlewares');

const router = express.Router();

router.get('/', ProductsController.getAll);

router.get('/:id', ProductsController.getById);

router.post('/', validateProducts, ProductsController.create);

router.put('/:id', validateProducts, ProductsController.update);

router.delete('/:id', ProductsController.remove);

module.exports = router;
