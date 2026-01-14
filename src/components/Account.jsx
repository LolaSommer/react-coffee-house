import './Account.scss';
import promo from '../assets/promo.webp';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { profileSchema } from '../validation/profileSchema';
import { addressSchema } from '../validation/addressSchema';
import { paymentSchema } from '../validation/paymentSchema';
import {phoneSchema} from '../validation/phoneSchema';
function Account({ onLogout, onGoHome, deliveryData }) {
const phoneInitialValues = {
  tel: '',
};

const {
  values: phoneValues,
  handleChange: handlePhoneChange,
  validateForm: validatePhone,
} = useForm(phoneInitialValues, phoneSchema);

const addressInitialValues = {
  ZIP: '',
  city: '',
  street: '',
  Apartment: '',
};
const {
  values: addressValues,
  handleChange: handleAddressChange,
  validateForm: validateAddress,
} = useForm(addressInitialValues, addressSchema);

  const profileInitialValues = {
  name: '',
  email: '',
  tel: '',
  birth: '',
};
const paymentInitialValues = {
  cardname: '',
  card: '',
  date: '',
  CVC: '',
};
const paymentForm = useForm(paymentInitialValues, paymentSchema);
const {
  values: paymentValues,
  isValid: isPaymentValid,
  handleChange: handlePaymentChange,
  validateForm: validatePayment,
} = paymentForm;



const {
  values: profileValues,
  handleChange: handleProfileChange,
  validateForm: validateProfile,
} = useForm(profileInitialValues, profileSchema);

const handleProfileSave = () => {
  if (validateProfile()) {
    console.log('Profile data:', profileValues);
    // позже: сохранить / отправить / положить в state
  }
};

    const paymentMethods = [
  { id: 'visa', label: 'Visa', icon: '#icon-visa' },
  { id: 'mastercard', label: 'Mastercard', icon: '#icon-mastercard' },
  { id: 'paypal', label: 'PayPal', icon: '#icon-paypal' },
  { id: 'applepay', label: 'Apple Pay', icon: '#icon-applepay' },
];
const [selectedPayment, setSelectedPayment] = useState(deliveryData?.payment?.method || '');
  return (
    <div className='acc'>
      <div className='acc__group'>
      <div className='acc__form'>
        <form className="acc__auto">
          <h2 className='acc__title'>Your account details</h2>
          <label className="acc__text">Name
            <input className="acc__input" type="text" name="name" placeholder="Enter your name"   value={profileValues.name}
  onChange={handleProfileChange}/>
          </label>
          <label className="acc__text">Email
            <input className="acc__input" type="email" name="email" placeholder="Enter your email address"    value={profileValues.email}
  onChange={handleProfileChange}/>
          </label>
          <label className="acc__text">Phone number
            <input className="acc__input" type="tel" name="tel" placeholder="Enter your phone number"   value={phoneValues.tel}
  onChange={handlePhoneChange} />
          </label>
          <label className="acc__text">Date of birth
            <input className="acc__input" name="birth"  value={profileValues.birth}
  onChange={handleProfileChange} type="text" placeholder="Enter your birthday" />
          </label>
          <div className="acc__btn">
            <button type="button" onClick={handleProfileSave} className="acc-btn">Save change</button>
          </div>
        </form>
      </div>

      <div className='history'>
        <h3 className='history__title'>Order History</h3>
        <div className='history__text'>
          <p className='history__text-untertitle'>You haven't placed any orders in the last 90 days.</p>
        </div>
        <div className='sms'>
          <h3 className='history__text-title'>Email & SMS</h3>
          <div className='history__subscribe'>
            <input className='history__input' type='checkbox' id='promo' value='yes' name='promo'></input>
            <label className='history__label' htmlFor='promo'>Subscribe to get updates, news, and exclusive deals.</label>
          </div>
        </div>
      </div>

      <div className='back__group'>
        <div className='promo'>
          <h3 className='promo__title'>Just for You</h3>
          <p className='promo__untertitle'>Your personal offers will show up here.</p>
          <picture>
            <source srcSet={promo} type="image/webp" />
            <img className="promo__img" src={promo} alt="Silken Whisper signature coffee with milk and caramel notes" />
          </picture>
        </div>
        <div className='back'>
          <button className='back__btn' type="button" onClick={onLogout}>Log out</button>
        </div>
      </div>
      </div>
       <section className='info'>
      <div className='adress'>
        <form className="adress__auto">
          <h2 className='adress__title'>Saved delivery address</h2>
          <label className="adress__text">ZIP code
            <input className="adress__input" type="text"value={addressValues.ZIP}
  onChange={handleAddressChange} name="ZIP" placeholder="Enter your ZIP code" required />
          </label>
          <label className="adress__text">City
            <input className="adress__input" type="text" name="city" value={addressValues.city}
  onChange={handleAddressChange}  placeholder="Enter your city" required />
          </label>
          <label className="adress__text">Street
            <input className="adress__input" name="street" value={addressValues.street}
  onChange={handleAddressChange} type="text" placeholder="Enter your street" required />
          </label>
          <label className="adress__text">Apartment (optional)
            <input className="adress__input" type="text"   value={addressValues.Apartment}
  onChange={handleAddressChange} name="Apartment" placeholder="Enter your apartment" />
          </label>
          <div className="adress__btn">
           <button
           className='adress-btn'
  type="button"
  onClick={() => {
    if (validateAddress()) {
      console.log('Saved address:', addressValues);
    }
  }}
>
  Save address
</button>

          </div>
        </form>
      </div>

      <div className="payment-methods">
        {paymentMethods.map(method => (
          <div key={method.id} className="payment-option">
            <input
              type="radio"
              id={method.id}
              name="payment"
              className="payment-radio"
             checked={selectedPayment === method.id}
      onChange={() => setSelectedPayment(method.id)}
            />
            <label htmlFor={method.id} className="payment-label">
              <div className="label-header">
                <span className='label__text'>
              {method.label}
                </span>
                <span className="icon">
                  <svg className='icon__svg'>
                    <use href={method.icon}></use>
                  </svg>
                </span>
              </div>
              <div className="payment-details">
                {method.id === 'paypal' || method.id === 'applepay' ? (
                  <div>
                    <p>You will be redirected to the secure {method.label} page.</p>
                    <button type="button" className="payment-button">
                      Go to {method.label}
                    </button>
                  </div>
                ) : (
                  <div className="card-fields">
                    <input className="card__input"
                     name='card' 
                     value={paymentValues.card}
                  onChange={handlePaymentChange} 
                   type="text" 
                   placeholder="Card number"/>
                    <input className="card__input" 
                    name='date'
                    value={paymentValues.data}
                  onChange={handlePaymentChange}
                  type="text" placeholder="MM/YY"/>
                    <input className="card__input"
                    name='CVC'
                       value={paymentValues.CVC}
                  onChange={handlePaymentChange}
                  type="text" placeholder="CVC" />
                    <input className="card__input" name='cardname'  value={paymentValues.cardname}
                  onChange={handlePaymentChange}type='text' placeholder='Card name'/>
                  </div>
                )}
                      {(selectedPayment === 'visa' || selectedPayment === 'mastercard') && (
  <button
    type="button"
    className='payment__btn'
    onClick={() => {
      if (validatePayment()) {
        console.log('Saved payment:', paymentValues);
      }
    }}
  >
    Save payment method
  </button>
)}
              </div>
            </label>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default Account;
