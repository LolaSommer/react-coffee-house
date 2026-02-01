const { createOrder } = require('../services/order.service');

function createOrderController(req, res) {
  const { userId, items, deliveryType } = req.body;
  const order = createOrder({
    userId,
    items,
    deliveryType,
  });

  res.status(201).json(order);
}

module.exports = {
  createOrderController,
};
