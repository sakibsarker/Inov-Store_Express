const express = require('express');
const router = express.Router();

const {getAllproducts,getSingleProduct,createProduct} = require('../controller/ProductController');


const {protect,admin}=require('../middleware/authMiddleware');

router.route('/').get(getAllproducts).post(protect,admin,createProduct);
router.get('/:id',getSingleProduct);

module.exports = router;

