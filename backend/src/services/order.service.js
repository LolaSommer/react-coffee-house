console.log('ORDER SERVICE FILE LOADED');
export function createOrder({ userId, items, deliveryType }) {
    console.log('SERVICE ITEMS:', items);

  if (!items || items.length === 0) {
    return null;
  }

  const orderId = Date.now();

  return {
    id: orderId,
    userId,
    items,
    deliveryType,
    status: 'created',
  };
}


