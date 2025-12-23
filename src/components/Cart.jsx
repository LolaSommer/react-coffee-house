import './cart.scss';
import ckookis from '../assets/ckookis.webp'
import pack from '../assets/pack.webp';
import fartuk from '../assets/fartuk.webp';
import happy from '../assets/happy.webp';
function Cart() {
  return <div className="modal-open cart__modal" aria-hidden="true"> 
        <div className="cart__modal-window" role="dialog" aria-modal="true" aria-labelledby="cart__modal-title"> 
          <div className="cart__modal-top">
            <button className="cart__modal-close" aria-label="close">
                   <svg className="cart__modal-icon"><use href="#icon-close"></use></svg>
                  </button>  
            <div className="cart__modal-header">
          <h2 className="cart__modal-title" id="cart__modal-title">Your order</h2>
          </div>
          <div className="cart__modal-empty hidden">
            <picture>
          <source srcSet={ckookis} type="image/webp" />
          <img className="menu__deserts-img" src={ckookis} alt="Aura Brew coffee" />
        </picture>
           <p className="cart__modal-sad">Your cart is empty</p> 
           <p className="cart__modal-hungry">Looks like someone got hungry…</p>
           </div>
          <div className="cart__modal-items">
      
          </div>
          <div className="cart__modal-extrastitle">Deepen the ritual:</div>
          <div className="cart__modal-extras">
            <div className="cart__modal-extra cart__modal-coffee" data-extra-id="americano">
              <picture>
          <source srcSet={happy} type="image/webp" />
          <img className="menu__deserts-img" src={happy} alt="Aura Brew coffee" />
        </picture>
              <div className="cart__modal-priceblock">
              <div className="cart__modal-text">Birthday card</div>
              <div className="cart__modal-extraprice">6<sup>$</sup></div>
              </div>
            </div>
             <div className="cart__modal-extra cart__modal-capuchino" data-extra-id="cappuccino">
              <picture>
          <source srcSet={pack} type="image/webp" />
          <img className="menu__deserts-img" src={pack} alt="Aura Brew coffee" />
        </picture>
              <div className="cart__modal-priceblock">
              <div className="cart__modal-text">Coffee Bag</div>
              <div className="cart__modal-extraprice">23<sup>$</sup></div>
              </div>
            </div>
             <div className="cart__modal-extra cart__modal-soda" data-extra-id="soda">
              <picture>
          <source srcSet={fartuk} type="image/webp" />
          <img className="menu__deserts-img" src={fartuk} alt="Aura Brew coffee" />
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
