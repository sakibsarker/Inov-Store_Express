const asycHandler =require('../middleware/asyncHandler')
const productsdata=require('../model/productModel');

exports.getAllproducts =asycHandler(async (req, res) => {
  const product=await productsdata.find({});
  // throw new Error('Product not found')
  res.json(product)
});

exports.getSingleProduct = asycHandler(async(req, res) => {
  console.log(req.params.id);
  const product=await productsdata.findById(req.params.id)
  if(product){
    res.json(product)
  }
  else{
    res.status(404)
    throw new Error('resource not found')
  }
});

exports.createProduct=asycHandler(async (req, res) => {
  const product=new productsdata({
    name:'Sample name',
    price:0,
    user:req.user._id,
    image:'/images/airpods.jpg',
    brand:'Sample Brand',
    category: 'Sample category',
    countInStock:0,
    numReviews:0,
    description:'Sample description',
  })
  const createProduct=await product.save();
  res.status(201).json(createProduct);
});


exports.updateProduct=asycHandler(async (req, res) => {
  const {name,price,description,image,brand,category,countInStock}=req.body;
  const product=await productsdata.findById(req.params.id)
  if(product){
    product.name=name;
    product.price=price;
    product.description=description;
    product.image=image;
    product.brand=brand;
    product.category=category;
    product.countInStock=countInStock;

    const updatedProduct=await product.save();

    res.status(200).json(updatedProduct)
    
  }else{
    res.status(404);
    throw new Error('Resource not found')
  }
  
});



exports.deleteProduct=asycHandler(async (req, res) => {
  const product=await productsdata.findById(req.params.id)
  if(product){
    await productsdata.deleteOne({_id:product._id});
    res.status(200).json({message:'Product deleted'})
    
  }else{
    res.status(404);
    throw new Error('Resource not found')
  }
  
});