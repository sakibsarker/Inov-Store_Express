const express = require('express');
const router = express.Router();

const {getAllproducts,getSingleProduct} = require('../controller/ProductController');

router.get('/',getAllproducts);
router.get('/:id',getSingleProduct);

module.exports = router;
