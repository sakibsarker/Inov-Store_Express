const asycHandler =require('../middleware/asyncHandler')
const productsdata=require('../model/productModel');

exports.getAllproducts =asycHandler(async (req, res) => {
  const product=await productsdata.find({});
  // throw new Error('Product not found')
  res.json(product)
});

exports.getSingleProduct = asycHandler(async(req, res) => {
  const product=await productsdata.findById(req.params.id)
  if(product){
    res.json(product)
  }
  else{
    res.status(404)
    throw new Error('resource not found')
    // res.status(404).json({message:'Product not found'})
  }

});