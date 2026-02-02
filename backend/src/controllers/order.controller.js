import { createOrder } from '../services/order.service.js';
console.log('ORDER CONTROLLER FILE:', import.meta.url);

export function createOrderController(req, res) {
  
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

