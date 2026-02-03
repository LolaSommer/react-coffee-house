import { createOrder } from '../services/order.service.js';
console.log('ORDER CONTROLLER FILE:', import.meta.url);

export function createOrderController(req, res) {
  
  const { userId, items, deliveryType } = req.body;

try {
  const order = createOrder({ userId, items, deliveryType });

  return res.status(201).json({
    status: 'ok',
    order,
  });
} catch (error) {
  if (error.message === 'ORDER_EMPTY') {
    return res.status(400).json({
      error: 'ORDER_EMPTY',
    });
  }

  return res.status(500).json({
    error: 'INTERNAL_ERROR',
  });
}

}

