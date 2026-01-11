import { useState } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);
 function clearCart(){
  setCart([]);
 }
  const addToCart = (cartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.cartKey === cartItem.cartKey);
      if (existing) {
        return prev.map(i =>
          i.cartKey === cartItem.cartKey
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...cartItem, quantity: 1 }];
    });
  };

  const increaseQty = (key) =>
    setCart(prev =>
      prev.map(i =>
        i.cartKey === key ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

  const decreaseQty = (key) =>
    setCart(prev =>
      prev
        .map(i =>
          i.cartKey === key ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    );

  const removeFromCart = (key) =>
    setCart(prev => prev.filter(i => i.cartKey !== key));

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
const updateCartItem = (updatedItem) => {
  setCart(prev =>
    prev.map(item =>
      item.cartKey === updatedItem.cartKey
        ? { ...item, ...updatedItem }
        : item
    )
  );
};

  return {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    updateCartItem,
    total,
    totalItems,
    clearCart,
  };
}
