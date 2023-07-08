const express = require('express');
const router = express.Router();

const ApiController = require('../controller/ApiController');

router.get('/products', ApiController.getApiPage);

module.exports = router;
