const express = require('express');
const router = express.Router();
const {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getAllOrders

    
} = require('../controller/OrderController');

const {protect,admin}=require('../middleware/authMiddleware');

router.route('/').post(protect,addOrderItems).get(protect,admin,getAllOrders);
router.route('/mine').get(protect,getMyOrders);
router.route('/:id').get(protect,getOrderById);
router.route('/:id/pay').put(protect,updateOrderToPaid);
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered);




module.exports = router;