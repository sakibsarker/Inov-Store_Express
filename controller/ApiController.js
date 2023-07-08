const path = require('path');
const productsdata=require('../data/products');
exports.getApiPage = (req, res) => {
  res.json(productsdata)
};