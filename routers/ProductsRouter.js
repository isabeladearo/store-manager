const express = require('express');
const { ProductsController } = require('../controllers');

const router = express.Router();

router.get('/', ProductsController.getAll);

router.get('/:id', ProductsController.getById);

router.post('/', ProductsController.create);

router.put('/:id', ProductsController.update);

router.delete('/:id', ProductsController.remove);

module.exports = router;
