const express = require('express');
const router = express.Router();
const { createOrderController } = require('../controllers/order.controller');

router.post('/', createOrderController);

module.exports = router;



