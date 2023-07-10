const express = require('express');
const router = express.Router();

const ProductController = require('../controller/ProductController');

router.get('/', ProductController.getAllproducts);
router.get('/:id', ProductController.getSingleProduct);

module.exports = router;
