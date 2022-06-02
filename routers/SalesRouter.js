const express = require('express');
const { SalesController } = require('../controllers');

const router = express.Router();

router.get('/', SalesController.getAll);

router.get('/:id', SalesController.getById);

router.post('/', SalesController.create);

router.put('/:id', SalesController.update);

router.delete('/:id', SalesController.remove);

module.exports = router;
