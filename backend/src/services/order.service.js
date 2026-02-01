function createOrder({ userId, items, deliveryType }) {
  // 1. здесь позже будут проверки (наличие, доставка, скидки)
  // пока считаем, что всё прошло

  const orderId = Date.now(); // временный ID
  const status = 'created';

  const order = {
    id: orderId,
    userId,
    items,
    deliveryType,
    status,
  };

  return order;
}

module.exports = {
  createOrder,
};
