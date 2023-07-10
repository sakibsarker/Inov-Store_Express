const path = require('path');
const productsdata=require('../data/products');
exports.getApiPage = (req, res) => {
  res.json(productsdata)
};

exports.getApiPageSingle = (req, res) => {
  const product=productsdata.find((p)=>p._id===req.params.id)
  res.json(product)
};