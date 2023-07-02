const express = require('express');
const router = express.Router();

const GetAllController = require('../controller/GetallController');

router.get('/', GetAllController.getAllPage);

module.exports = router;