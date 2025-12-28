import './cart.scss';
import emptycart from '../assets/emptycart.webp';
import pack from '../assets/pack.webp';
import fartuk from '../assets/fartuk.webp';
import happy from '../assets/happy.webp';
import {useRef, useEffect} from 'react';
function Cart({onClose}) {
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
  return   <div className="modal-open cart__modal" aria-hidden="true"> 
        <div className="cart__modal-window" ref={cartRef} role="dialog" aria-modal="true" aria-labelledby="cart__modal-title"> 
          <div className="cart__modal-top">
            <button className="cart__modal-close" aria-label="close" onClick={onClose}>
                   <svg className="cart__modal-icon"><use href="#icon-close"></use></svg>
                  </button>  
            <div className="cart__modal-header">
          <h2 className="cart__modal-title" id="cart__modal-title">Your order</h2>
          </div>
          <div className="cart__modal-empty hidden">
            <picture>
          <source srcSet={emptycart} type="image/webp" />
          <img className="cart__modal-img" src={emptycart} alt="Empty coffee cup waiting for your choice" />
        </picture>
           <p className="cart__modal-sad">Your cup is still empty</p> 
           <p className="cart__modal-hungry">Choose what resonates with you</p>
           </div>
          <div className="cart__modal-items">
      
          </div>
          <div className="cart__modal-extrastitle">Deepen the ritual:</div>
          <div className="cart__modal-extras">
            <div className="cart__modal-extra cart__modal-card" data-extra="card">
              <picture>
          <source srcSet={happy} type="image/webp" />
          <img className="cart__modal-img" src={happy} alt="Greeting card to add a personal note to your coffee order" />
        </picture>
              <div className="cart__modal-priceblock">
              <div className="cart__modal-text">Birthday card</div>
              <div className="cart__modal-extraprice">6<sup>$</sup></div>
              </div>
            </div>
             <div className="cart__modal-extra cart__modal-coffee" data-extra="bag">
              <picture>
          <source srcSet={pack} type="image/webp" />
          <img className="cart__modal-img" src={pack} alt="Signature coffee beans for your home ritual" />
        </picture>
              <div className="cart__modal-priceblock">
              <div className="cart__modal-text">Coffee Bag</div>
              <div className="cart__modal-extraprice">23<sup>$</sup></div>
              </div>
            </div>
             <div className="cart__modal-extra cart__modal-apron" data-extra="apron">
              <picture>
          <source srcSet={fartuk} type="image/webp" />
          <img className="cart__modal-img" src={fartuk} alt="Barista apron inspired by the Aura Brew ritual" />
        </picture>
             <div className="cart__modal-priceblock">
              <div className="cart__modal-text">Barista Apron</div>
              <div className="cart__modal-extraprice">33<sup>$</sup></div>
              </div>
            </div>
             

          </div>
          </div>
          <div className="cart__modal-bottom">
          <div className="cart__modal-summary">
            <div className="cart__modal-number">0 items</div>
        <div className="cart__modal-total">$0.00</div>
        </div>
        <div className="cart__modal-order">
       <button className="cart__modal-checkout">Checkout</button>
        </div>
        </div>
      
        </div>
                </div>
}

export default Cart;
