import './DeliveryModal.scss';
import { useState,useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { addressSchema } from '../validation/addressSchema';
import {paymentSchema} from '../validation/paymentSchema';
function DeliveryModal({onClose,onSaveDelivery,userData,mode}) {
  const [externalType, setExternalType] = useState(null); 
  const [savePayment,setSavePayment]= useState(false);
 const initialAddressValues = {
  name: userData?.address?.name || '',
  ZIP: userData?.address?.ZIP || '',
  city: userData?.address?.city || '',
  street: userData?.address?.street || '',
  Apartment: userData?.address?.apartment || '',
};
const addressForm = useForm(initialAddressValues, addressSchema);
const initialPaymentValues = userData?.payment?.card
  ? {
      cardname: userData.payment.card.cardname || '',
      card: userData.payment.card.card || '',
      date: userData.payment.card.date || '',
      CVC: userData.payment.card.CVC || '',
    }
  : {
      cardname: '',
      card: '',
      date: '',
      CVC: '',
    };

const paymentForm = useForm(initialPaymentValues, paymentSchema);
const [activeMethod, setActiveMethod] = useState(
  userData?.payment?.method || null
);

const [paymentMethod, setPaymentMethod] = useState(
  userData?.payment?.method === 'visa' ||
  userData?.payment?.method === 'mastercard'
    ? 'card'
    : userData?.payment?.method
    ? 'external'
    : null
);


const {
  values: addressValues,
  isValid: isAddressValid,
  handleChange: handleAddressChange,
  validateForm: validateAddress,
} = addressForm;

const {
  values: paymentValues,
  handleChange: handlePaymentChange,
  validateForm: validatePayment,
} = paymentForm;
const isEditMode = mode === 'edit';

const buttonText = isEditMode
  ? 'Save changes'
  : 'Confirm delivery';


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
useEffect(() => {
  if (userData?.address) {
    addressForm.setValues({
      name: userData.address.name || '',
      ZIP: userData.address.ZIP || '',
      city: userData.address.city || '',
      street: userData.address.street || '',
      Apartment: userData.address.apartment || '',
    });
  }

  if (userData?.payment?.card) {
    paymentForm.setValues({
      cardname: userData.payment.card.cardname || '',
      card: userData.payment.card.card || '',
      date: userData.payment.card.date || '',
      CVC: userData.payment.card.CVC || '',
    });
  }
}, [userData]);

  const methods = [
    { id: 'mastercard', icon: '#icon-mastercard',label:'Mastercard' },
    { id: 'visa', icon: '#icon-visa',label:'Visa' },
    { id: 'paypal', icon: '#icon-paypal',label:'paypal' },
    { id: 'applepay', icon: '#icon-applepay',label:'applepay' },
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
function handleSubmit(addressValues, paymentValues) {
  const data = {
    address: {
      name: addressValues.name,
      ZIP: addressValues.ZIP,
      city: addressValues.city,
      street: addressValues.street,
      apartment: addressValues.Apartment,
    },
    payment: {
      method: activeMethod,
      savePayment,
      ...(paymentMethod === 'card' && {
        card: paymentValues,
      }),
    },
  };

  onSaveDelivery(data);
  onClose();
}
const [formError, setFormError] = useState('');
const handleConfirm = () => {
  const isAddressOk = validateAddress();

  let isPaymentOk = true;
  if (paymentMethod === 'card') {
    isPaymentOk = validatePayment();
  }

  if (!isPaymentOk) {
    setFormError('Please check your card details.');
    return;
  }

  if (!isAddressOk) {
    setFormError('Please check your address details.');
    return;
  }

  handleSubmit(addressValues, paymentValues);
};

useEffect(() => {
  setFormError('');
}, [paymentValues, addressValues]);

  return (
    <>
      <div className="modal-open reg__form"  role="dialog"
  aria-modal="true" aria-labelledby="form-title">
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
                <input className="reg__input" type="text" name="name"  
                  onChange={handleAddressChange}   value={addressValues.name} placeholder="Enter your name" required />
              </label>
              <label className="reg__text">ZIP code
                <input className="reg__input" type="text" name="ZIP" 
                  onChange={handleAddressChange}   value={addressValues.ZIP} placeholder="Enter your ZIP code" required />
              </label>
              <label className="reg__text">City
                <input className="reg__input" type="text" name="city"  
                  onChange={handleAddressChange}   value={addressValues.city}  placeholder="Enter your city" required />
              </label>
              <label className="reg__text">Street
                <input className="reg__input" name="street" 
                  onChange={handleAddressChange} type="text"   value={addressValues.street} placeholder="Enter your street" required />
              </label>
              <label className="reg__text">Apartment (optional)
                <input className="reg__input" type="text" name="Apartment"
                 
                   onChange={handleAddressChange}
                     value={addressValues.Apartment}
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
                  value={paymentValues.cardname}
                  onChange={handlePaymentChange}
                    type="text"
                      placeholder="Enter your name"
                   required
                  />
                  </label>
                  <label className="card__text">Card number
                    <input className="card__input"
                     type="text"
                      name="card" 
                        value={paymentValues.card}
                  onChange={handlePaymentChange}
                      placeholder="Enter your card number"
                       required />
                  </label>
                  <div className='card__number'>
                    <label className="card__text">Expiry date
                      <input className="card__input-num" 
                      type="text" 
                      name="date" 
            value={paymentValues.date}
                  onChange={handlePaymentChange}
                      placeholder="MM / YY" required />
                    </label>
                    <label className="card__text">CVC
                      <input className="card__input-num" 
                      type="text" name="CVC"
                      value={paymentValues.CVC}
                  onChange={handlePaymentChange}
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
           <button
  type="button"
  className="reg-btn"
  
  onClick={handleConfirm}
>
  {mode === 'edit' ? 'Save changes' : 'Confirm delivery'}
</button>
{formError && <p className="form-error">{formError}</p>}


              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryModal;