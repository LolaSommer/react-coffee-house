import './DeliveryModal.scss';
import { useState } from 'react';

function DeliveryModal({onClose}) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [externalType, setExternalType] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null); 

  const externalContent = {
    paypal: {
      text: 'After clicking "Pay with PayPal", you will be redirected to PayPal to securely complete your purchase.'
    },
    applepay: {
      text: 'After clicking "Pay with Apple Pay", you will be redirected to Apple Pay to securely complete your purchase.',
    }
  };

  const methods = [
    { id: 'mastercard', icon: '#icon-mastercard' },
    { id: 'visa', icon: '#icon-visa' },
    { id: 'paypal', icon: '#icon-paypal' },
    { id: 'applepay', icon: '#icon-applepay' },
  ];

  const handleMethodClick = (methodId) => {
    setActiveMethod(methodId); 

    if (methodId === 'visa' || methodId === 'mastercard') {
      setPaymentMethod('card');
      setExternalType(null);
    } else {
      setPaymentMethod('external');
      setExternalType(methodId);
    }
  };

  return (
    <>
      <div className="modal-open reg__form" role="dialog" aria-labelledby="form-title">
        <div className="reg__overlay" onClick={onClose}></div>
        <div className="reg__wrapper">
          <div className="reg__line">
            <button className="reg__close" aria-label="close" onClick={onClose}>
              <svg className="reg__icon"><use href="#icon-close"></use></svg>
            </button>
          </div>
          <div className="reg__window" role="dialog" aria-modal="true">
            <div className="reg__header">
              <h2 className="reg__title" id="form-title">Delivery address</h2>
              <p className='reg__untertitle'>Please enter the address for delivery</p>
            </div>
            <form className="reg__auto">
              <label className="reg__text">Name
                <input className="reg__input" type="text" name="name" placeholder="Enter your name" pattern="[A-Za-zА-Яа-я '\-]{2,}" required />
              </label>
              <label className="reg__text">ZIP code
                <input className="reg__input" type="text" name="ZIP" placeholder="Enter your ZIP code" required />
              </label>
              <label className="reg__text">City
                <input className="reg__input" type="text" name="city" placeholder="Enter your city" required />
              </label>
              <label className="reg__text">Street
                <input className="reg__input" name="street" type="text" placeholder="Enter your street" required />
              </label>
              <label className="reg__text">Apartment (optional)
                <input className="reg__input" type="text" name="Apartment" placeholder="Enter your apartment" />
              </label>
              
              <div className='pay'>
                <h3 className='pay__title'>Select payment method</h3>
                <div className="pay__options">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      className={`pay__metod ${
                        activeMethod === method.id ? 'pay__metod--active' : ''
                      }`}
                      onClick={() => handleMethodClick(method.id)}
                    >
                      <svg className="pay__icon">
                        <use href={method.icon}></use>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className={`card-form ${paymentMethod === 'card' ? 'card-form--open' : ''}`}>
                <div className='card__block'>
                  <label className="card__text">Cardholder name
                    <input className="card__input" type="text" name="cardname" placeholder="Enter your name" required />
                  </label>
                  <label className="card__text">Card number
                    <input className="card__input" type="text" name="card" placeholder="Enter your card number" required />
                  </label>
                  <div className='card__number'>
                    <label className="card__text">Expiry date
                      <input className="card__input-num" type="text" name="date" placeholder="MM / YY" required />
                    </label>
                    <label className="card__text">CVC
                      <input className="card__input-num" type="text" name="CVC" placeholder="3-digit code" required />
                    </label>
                  </div>
                </div>
              </div>

              {paymentMethod === 'external' && externalType && (
                <div className="external-form external-form--open">
                  <div className="external__block">
                    <svg className="external__icon">
                      <use href="#icon-redirect"></use>
                    </svg>
                    <p className="external__text">
                      {externalContent[externalType].text}
                    </p>
                  </div>
                </div>
              )}

              <div className="reg__btn">
                <button type="submit" className="reg-btn">Confirm delivery</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryModal;