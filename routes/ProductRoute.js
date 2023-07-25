const express = require('express');
const router = express.Router();

const {getAllproducts,getSingleProduct,createProduct,updateProduct} = require('../controller/ProductController');


const {protect,admin}=require('../middleware/authMiddleware');

router.route('/').get(getAllproducts).post(protect,admin,createProduct);
router.route('/:id').get(getSingleProduct).put(protect,admin,updateProduct);

module.exports = router;

