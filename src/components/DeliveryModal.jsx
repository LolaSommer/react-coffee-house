import './DeliveryModal.scss';
import { useState,useEffect } from 'react';

function DeliveryModal({onClose,onSaveDelivery}) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [externalType, setExternalType] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null); 
  const [savePayment,setSavePayment]= useState(false);
  const [formValues, setFormValues] = useState({
  name: '',
  ZIP: '',
  city: '',
  street: '',
  cardname: '',
  Apartment:'',
  card: '',
  date: '',
  CVC: '',
});
const handleSubmit = () => {
  const data = {
    address: {
      name: formValues.name,
      ZIP: formValues.ZIP,
      city: formValues.city,
      street: formValues.street,
      apartment: formValues.Apartment,
    },
    payment: {
      method: activeMethod,
      savePayment,
    },
  };

  onSaveDelivery(data);
  onClose();
};
const [isFormValid, setIsFormValid] = useState(false);
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormValues(prev => ({
    ...prev,
    [name]: value,
  }));
};

  const savePaymentText={
  visa: 'Save card on file',
  mastercard: 'Save card on file',
  paypal: 'Remember my PayPal account',
  applepay: 'Remember for faster Apple Pay checkout',
  }
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
useEffect(() => {
  const addressValid = Boolean(
    formValues.name &&
    formValues.ZIP &&
    formValues.city &&
    formValues.street
  );

  const methodSelected = Boolean(paymentMethod);

  let paymentValid = false;

  if (paymentMethod === 'card') {
    paymentValid = Boolean(
      formValues.cardname &&
      formValues.card &&
      formValues.date &&
      formValues.CVC
    );
  }

  if (paymentMethod === 'external') {
    paymentValid = true;
  }

  setIsFormValid(addressValid && methodSelected && paymentValid);
}, [formValues, paymentMethod]);



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
            <form className="reg__auto" onSubmit={e => e.preventDefault()}>
              <label className="reg__text">Name
                <input className="reg__input" type="text" name="name"  value={formValues.name}
                  onChange={handleChange} placeholder="Enter your name" pattern="[A-Za-zА-Яа-я '\-]{2,}" required />
              </label>
              <label className="reg__text">ZIP code
                <input className="reg__input" type="text" name="ZIP" value={formValues.ZIP}
                  onChange={handleChange} placeholder="Enter your ZIP code" required />
              </label>
              <label className="reg__text">City
                <input className="reg__input" type="text" name="city"  value={formValues.city}
                  onChange={handleChange} placeholder="Enter your city" required />
              </label>
              <label className="reg__text">Street
                <input className="reg__input" name="street"  value={formValues.street}
                  onChange={handleChange} type="text" placeholder="Enter your street" required />
              </label>
              <label className="reg__text">Apartment (optional)
                <input className="reg__input" type="text" name="Apartment"
                    value={formValues.Apartment}
                   onChange={handleChange}
                 placeholder="Enter your apartment" />
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
                    <input
                   className="card__input"
                    name="cardname"
                     value={formValues.cardname}
                  onChange={handleChange}
                    type="text"
                      placeholder="Enter your name"
                   required
                  />
                  </label>
                  <label className="card__text">Card number
                    <input className="card__input"
                     type="text"
                      name="card" 
                       value={formValues.card}
                  onChange={handleChange}
                      placeholder="Enter your card number"
                       required />
                  </label>
                  <div className='card__number'>
                    <label className="card__text">Expiry date
                      <input className="card__input-num" 
                      type="text" 
                      name="date" 
                       value={formValues.date}
                  onChange={handleChange}
                      placeholder="MM / YY" required />
                    </label>
                    <label className="card__text">CVC
                      <input className="card__input-num" 
                      type="text" name="CVC"
                       value={formValues.CVC}
                  onChange={handleChange}
                       placeholder="3-digit code"
                        required />
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
              {activeMethod &&(
              <div className='save__group'>
          <input className='save__input' type='checkbox' id='save' value='yes' name='save'
          checked={savePayment}
          onChange={e=>setSavePayment(e.target.checked)}></input>
         <label className='save__label' htmlFor='save'>{savePaymentText[activeMethod]}</label>
          </div>
              )}
                
              <div className="reg__btn">
                <button type="submit"  className="reg-btn" onClick={handleSubmit} disabled={!isFormValid} >Confirm delivery</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryModal;