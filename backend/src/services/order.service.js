export function createOrder({ userId, items, deliveryType }) {

 if (!items || items.length === 0) {
  throw new Error('ORDER_EMPTY');
}
if(!userId){
  throw new Error('USER_REQUIRED');
}
if(deliveryType !== 'delivery'&& deliveryType !=='pickup'){
   throw new Error('INVALID_DELIVERY_TYPE');
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


