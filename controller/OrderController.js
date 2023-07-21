const asycHandler =require('../middleware/asyncHandler')
const Order=require('../model/orderModel');

const { ObjectId } = require('mongodb');

//crate order post and prive api/orders

exports.addOrderItems=asycHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  }=req.body;

  if(orderItems && orderItems.length===0){
    res.status(400);
    throw new Error('No order Item')
  }
  else{
    const order=new Order({
      orderItems:orderItems.map((x)=>({
        ...x,
        product:x._id,
        _id:undefined
      })),
      user:req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder=await order.save()
    res.status(201).json(createdOrder);
  }
});

// get logged in user order and get and private api/orders/myorders
exports.getMyOrders=asycHandler(async (req, res) => {
    const orders=await Order.find({user:req.user._id});
    res.json(orders)

    
  });

//get order by api/orders/:id
exports.getOrderById=asycHandler(async (req, res) => {
  // const order=await Order.findById({user:req.params._id})
  const order=await Order.findById({user:req.params._id}).populate(
    'user','name email',
  )
  if(order){
    res.json(order)
  }else{
    res.status(404)
    throw new Error('Order not found')
  } 
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