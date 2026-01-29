import './cart.scss';
import emptycart from '../assets/emptycart.webp';
import { extras } from '../data/extras';
import {useRef, useEffect} from 'react';
function CartItem({item,onPlus, onMinus, onRemove,onEdit,onUpdateMessage}){
  return( <div className='cart__item'>
              <div className='cart__item-wrapper'>
                <div className='cart__item-pic'>
                   <picture>
          <source srcSet={item.image} type="image/webp" />
          <img className="cart__item-img"
          loading="lazy"
           src={item.image} 
           alt={item.title}
           />
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
                    {item.type === 'coffee' && (<button onClick={() =>onEdit(item)}
  className="cart__item-change" type='button'>change</button>)}
    <button className="cart__item-left" type='button' onClick={onMinus}>-</button>
      <div className="cart__item-count">{item.quantity}</div>
      <button className="cart__item-right" type='button' onClick={onPlus}>+</button>
      <button className="cart__item-remove" type='button' data-remove="coffee" onClick={onRemove}>
  <svg className="icon-trash">
    <use href="#icon-trash"></use>
  </svg>
      </button>
                </div>
              </div>
                 {item.type === 'card' && (
  <div className="cart__item-message">
    <h3 className='message__title'>✍️Inscribe your intention</h3>
   <textarea
  className="message__area"
  rows="2"
  cols="40"
  maxLength="150"
  placeholder="Happy Birthday! Thinking of you and wishing you warmth today."
  value={item.message || ''}
onChange={(e) =>
  onUpdateMessage({
    ...item,
    message: e.target.value,
  })
}


/>
  </div>
)}
            </div>
  );
} 

function Cart({userData,handleOrderSuccess,isAuth,openModal,onUpdateCartItem,cart,onClose,onPlus, onMinus, onRemove,total,totalItems,onChange,onAddToCart,isDeliveryChecked,
  setIsDeliveryChecked,onOpenDeliveryModal}) {
function handleCheckout() {
  if (!isAuth) {
    openModal('auth');
    return;
  }

  if (isDeliveryChecked && !userData?.address) {
    openModal('delivery');
    return;
  }

handleOrderSuccess();
}
  const canUseDelivery = isDeliveryChecked && total >= 25;
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
    return  <div className="modal-open cart__modal" 
     role="dialog"
  aria-modal="true"
    aria-labelledby="cart__modal-title"
  > 
 
        <div className="cart__modal-window" ref={cartRef} > 
          <div className="cart__modal-top">
            <button className="cart__modal-close" aria-label="close" type='button' onClick={onClose}>
                   <svg className="cart__modal-icon"><use href="#icon-close"></use></svg>
                  </button>  
    <div className="cart__modal-empty">
            <picture>
          <source srcSet={emptycart} type="image/webp" />
          <img className="cart__modal-imgEmpty" loading="lazy" src={emptycart} alt="Empty coffee cup waiting for your choice" />
        </picture>
           <p className="cart__modal-sad">Your cup is still empty</p> 
           <p className="cart__modal-hungry">Choose what resonates with you</p>
           </div>
           </div>
           </div>
           </div>
  }
  else{ 
  return   <div className="modal-open cart__modal" > 
        <div className="cart__modal-window" ref={cartRef} role="dialog" aria-modal="true" aria-labelledby="cart__modal-title"> 
          <div className="cart__modal-top">
            <button className="cart__modal-close" type='button' aria-label="close" onClick={onClose}>
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
            onEdit={onChange}  
           onUpdateMessage={onUpdateCartItem}
           />))}
          </div>
          {filteredExtras.length > 0 && (
  <div className='cart__modal-wrapper'>
    <div className="cart__modal-extrastitle">Deepen the ritual:</div>
    <div className="cart__modal-extras">
      {filteredExtras.map((extra) => (
        <button
          key={extra.id}
          className="cart__modal-extra"
          type='button'
          onClick={() => {
            const extraItem = {
              cartKey: extra.id,
              id: extra.id,
              title: extra.title,
              image: extra.image,
              price: extra.price,
              quantity: 1,
              type:extra.type,
                ...(extra.type === 'card' && { message: '' }),
            };
            onAddToCart(extraItem);
          }}
        >
          <picture>
            <source srcSet={extra.image} type="image/webp" />
            <img
              className="cart__modal-img"
              loading="lazy"
              src={extra.image}
              alt={extra.alt}
            />
          </picture>
          <div className="cart__modal-priceblock">
            <div className="cart__modal-text">{extra.title}</div>
            <div className="cart__modal-extraprice">
              {extra.price}<sup>$</sup>
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>
)}

          <div className='cart__modal-deliverygroup'>
          <input className='cart__modal-input'
           type='checkbox'
           id='delivery' value='yes' name='delivery' 
          disabled={total<25}
          checked={isDeliveryChecked}
          onChange={(e) => setIsDeliveryChecked(e.target.checked)}
          aria-describedby="delivery-hint"
          ></input>
         <label className='cart__modal-label' htmlFor='delivery'> Delivery — free from $25</label>
         <p id="delivery-hint" className="visually-hidden">
    Delivery is available for orders from $25
        </p>
          </div>
          {isDeliveryChecked && userData?.address && ( 
           <div className="cart__delivery-summary">
            <div className="cart__delivery-address">
             Deliver to: {userData.address.street}
            </div>
 <button
  type="button"
  className="cart__delivery-change"
  onClick={() => onOpenDeliveryModal('edit')}
>
  change
</button>

  </div>
)}
          </div>
          <div className="cart__modal-bottom">
          <div className="cart__modal-summary">
            <div className="cart__modal-number">{totalItems} items</div>
        <div className="cart__modal-total">{total.toFixed(2)}$</div>
        </div>
        <div className="cart__modal-order">
       <button className="cart__modal-checkout" type='summit'  onClick={handleCheckout}>Checkout</button>
        </div>
        </div>
         
        </div>
                </div>}

}

export default Cart;
