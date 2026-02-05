import { createOrder } from '../services/order.service.js';
export function createOrderController(req, res) {
  
 const { items, deliveryType } = req.body;
const userId = req.user.id;


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
 if(error.message ==='USER_REQUIRED'){
  return res.status(400).json({
    error:'USER_REQUIRED',
  })
 }
 if (error.message === 'INVALID_DELIVERY_TYPE') {
  return res.status(400).json({
    error: 'INVALID_DELIVERY_TYPE',
  });
}

  return res.status(500).json({
    error: 'INTERNAL_ERROR',
  });
}

}

