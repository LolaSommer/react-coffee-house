import './cart.scss';
import emptycart from '../assets/emptycart.webp';
import { extras } from '../data/extras';
import {useRef, useEffect} from 'react';
import { useState } from 'react';
function CartItem({item,onPlus, onMinus, onRemove,onChange}){
  return( <div className='cart__item'>
              <div className='cart__item-wrapper'>
                <div className='cart__item-pic'>
                   <picture>
          <source srcSet={item.image} type="image/webp" />
          <img className="cart__item-img" src={item.image} />
        </picture>
                </div>
                <div className='cart__item-info'>
                 <div className='cart__item-title'>{item.title}</div>
                 {item.meta && (<div className='cart__item-info'>{item.meta}</div>)}
                 {item.text && (<div className="cart__item-info"> {item.text}</div>)}
                </div>
              </div>
              <div className='cart__item-counter'>
                <div className='cart__item-price'>{item.price} $</div>
                <div className='cart__item-radiogroup'>
                    {item.type === 'coffee' && (<button onClick={() => onChange(item)}
  className="cart__item-change">change</button>)}
      <div className="cart__item-left" onClick={onMinus}>-</div>
      <div className="cart__item-count">{item.quantity}</div>
      <div className="cart__item-right" onClick={onPlus}>+</div>
      <div className="cart__item-remove" data-remove="coffee" onClick={onRemove}>
  <svg className="icon-trash">
    <use href="#icon-trash"></use>
  </svg>
      </div>
                </div>
              </div>
            </div>
  );
} 

function Cart({cart,onClose,onPlus, onMinus, onRemove,total,totalItems,onChange,onAuthClick}) {
  const [selectedExtra, setSelectedExtra] = useState(null);
  const cartRef = useRef(null);
  useEffect(() => {
  function handleClickOutside(e) {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      onClose();
    }
  }

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [onClose]);
        const filteredExtras = extras.filter(extra => {
    return !cart.some(cartItem => cartItem.id === extra.id);
});
  if(cart.length ===0){
    return  <div className="modal-open cart__modal" aria-hidden="true"> 
        <div className="cart__modal-window" ref={cartRef} role="dialog" aria-modal="true" aria-labelledby="cart__modal-title"> 
          <div className="cart__modal-top">
            <button className="cart__modal-close" aria-label="close" onClick={onClose}>
                   <svg className="cart__modal-icon"><use href="#icon-close"></use></svg>
                  </button>  
    <div className="cart__modal-empty">
            <picture>
          <source srcSet={emptycart} type="image/webp" />
          <img className="cart__modal-imgEmpty" src={emptycart} alt="Empty coffee cup waiting for your choice" />
        </picture>
           <p className="cart__modal-sad">Your cup is still empty</p> 
           <p className="cart__modal-hungry">Choose what resonates with you</p>
           </div>
           </div>
           </div>
           </div>
  }
  else{ 
  return   <div className="modal-open cart__modal" aria-hidden="true"> 
        <div className="cart__modal-window" ref={cartRef} role="dialog" aria-modal="true" aria-labelledby="cart__modal-title"> 
          <div className="cart__modal-top">
            <button className="cart__modal-close" aria-label="close" onClick={onClose}>
                   <svg className="cart__modal-icon"><use href="#icon-close"></use></svg>
                  </button>  
            <div className="cart__modal-header">
          <h2 className="cart__modal-title" id="cart__modal-title">Your order</h2>
          </div>
          <div className="cart__modal-items">
           {cart.map(item => (<CartItem key={item.cartKey} item={item} 
          onPlus={() => onPlus(item.cartKey)}
          onMinus={() => onMinus(item.cartKey)}
          onRemove={() => onRemove(item.cartKey)}
            onChange={onChange}
           />))}
          </div>
          {filteredExtras.length > 0 && (<>
          <div className="cart__modal-extrastitle">Deepen the ritual:</div>
          <div className="cart__modal-extras">
 
            {filteredExtras.map((extra) => (
    <div
      key={extra.id}
      className='cart__modal-extra'
      onClick={() => {
  const cartKey = extra.id;

  const extraItem = {
    cartKey,
    id: extra.id,
    title: extra.title,
    image: extra.image,
    price: extra.price,
    quantity: 1,
  };

  onAddToCart(extraItem);
}}

      >
      <picture>
          <source srcSet={extra.image} type="image/webp" />
          <img className="cart__modal-img" src={extra.image} alt={extra.alt} />
        </picture>
              <div className="cart__modal-priceblock">
              <div className="cart__modal-text">{extra.title}</div>
              <div className="cart__modal-extraprice">{extra.price}<sup>$</sup></div>
              </div>
    </div>
  ))}
          </div>
          </>)}
          </div>
          <div className="cart__modal-bottom">
          <div className="cart__modal-summary">
            <div className="cart__modal-number">{totalItems(cart)} items</div>
        <div className="cart__modal-total">{total.toFixed(2)}$</div>
        </div>
        <div className="cart__modal-order">
       <button className="cart__modal-checkout" onClick={onAuthClick}>Checkout</button>
        </div>
        </div>
         
        </div>
                </div>}

}

export default Cart;
