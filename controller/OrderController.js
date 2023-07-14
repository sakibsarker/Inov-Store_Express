const asycHandler =require('../middleware/asyncHandler')
const orderdata=require('../model/orderModel');


//crate order post and prive api/orders

exports.addOrderItems=asycHandler(async (req, res) => {
  res.send('add order items')
});

// get logged in user order and get and private api/orders/myorders
exports.getMyOrders=asycHandler(async (req, res) => {
    res.send('Get My order')
  });

//get order by api/orders/:id
exports.getOrderById=asycHandler(async (req, res) => {
    res.send('Get Order by id')
  });

//update order and private and get api/orders/:id/pay
exports.updateOrderToPaid=asycHandler(async (req, res) => {
    res.send('Update order to paid')
  });

//update to deliver and private/admin and get api/orders/:id/deliver
exports.updateOrderToDelivered=asycHandler(async (req, res) => {
    res.send('Update order to Delivered')
  });

//get all order and prive/admin api/orders

exports.getAllOrders=asycHandler(async (req, res) => {
    res.send('get all orders')
  });