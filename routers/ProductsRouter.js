const express = require('express');
const { ProductsController } = require('../controllers');

const router = express.Router();

router.get('/', ProductsController.getAll);

router.get('/:id', ProductsController.getById);

router.post('/', ProductsController.create);

module.exports = router;
