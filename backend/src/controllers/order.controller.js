import { createOrder } from '../services/order.service.js';

export function createOrderController(req, res) {
  console.log('ORDER CONTROLLER HIT');
  const { userId, items, deliveryType } = req.body;

  const order = createOrder({
    userId,
    items,
    deliveryType,
  });

  if (!order) {
    return res.status(400).json({
      message: 'Order is empty',
    });
  }

  return res.status(201).json({
    status: 'ok',
    order,
  });
}

