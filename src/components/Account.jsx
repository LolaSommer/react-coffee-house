import './Account.scss';
import promo from '../assets/promo.webp';
import { useState } from 'react';
function Account({ onLogout,userData,setUserData,onOpenDeliveryModal}) {
const [isEditingProfile, setIsEditingProfile] = useState(false);
  return (
    <div className='acc'>
      <div className='acc__group'>
      <div className='acc__form'>
        <form className="acc__auto">
          <h2 className='acc__title'>Your account details</h2>
          <label className="acc__text">Name
            <input className="acc__input" type="text" name="name" placeholder="Enter your name"  
              value={userData.profile.name || ''}
  disabled={!isEditingProfile}
  onChange={e =>
    setUserData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        name: e.target.value,
      },
    }))
  }/>
          </label>
          <label className="acc__text">Email
            <input className="acc__input" type="email" name="email" 
            placeholder="Enter your email address"    
            value={userData.profile?.email || ''}
  disabled={!isEditingProfile}
  onChange={(e) =>
    setUserData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        email: e.target.value,
      },
    }))
  }/>
          </label>
          <label className="acc__text">Phone number
  <input
    className="acc__input"
    type="tel"
    placeholder="Enter your phone number"
    value={userData.phone || ''}
    onChange={(e) =>
      setUserData(prev => ({
        ...prev,
        phone: e.target.value,
      }))
    }
  />
</label>

          <label className="acc__text">Date of birth
            <input className="acc__input" name="birth" 
             value={userData.profile?.birth || ''}
  disabled={!isEditingProfile}
  onChange={(e) =>
    setUserData(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        birth: e.target.value,
      },
    }))
  }
  type="text" placeholder="Enter your birthday" />
          </label>
          <div className="acc__btn">
           <button
  type="button"
  className="acc-btn"
  onClick={() => {
    if (isEditingProfile) {
      setIsEditingProfile(false);
    } else {
      setIsEditingProfile(true);
    }
  }}
>
  {isEditingProfile ? 'Save changes' : 'Edit profile'}
</button>

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
            <input className='history__input' type='checkbox' id='promo'
             value='yes' 
             name='promo'></input>
            <label className='history__label' 
            htmlFor='promo'>Subscribe to get updates, news, and exclusive deals.</label>
          </div>
        </div>
      </div>

      <div className='back__group'>
        <div className='promo'>
          <h3 className='promo__title'>Just for You</h3>
          <p className='promo__untertitle'>Your personal offers will show up here.</p>
          <picture>
            <source srcSet={promo} type="image/webp" />
            <img className="promo__img" loading="lazy" src={promo} alt="" />
          </picture>
        </div>
        <div className='back'>
          <button className='back__btn' type="button" onClick={onLogout}>Log out</button>
        </div>
      </div>
      </div>
       <section className='info'>
      <div className="adress">
  <h2 className="adress__title">Saved delivery address</h2>

  {!userData.address ? (
    <p className="adress__empty">
      No delivery address saved yet
    </p>
  ) : (
    <>
      <p className="adress__text"> 
        {userData.address.street}, {userData.address.city}
      </p>
      <div className='adress-btn'>
      <button
        type="button"
        className="adress__btn"
         onClick={() => onOpenDeliveryModal('edit')}
      >
        Change address
      </button>
      </div>
      </>
  )}
</div>
     <div className="payment-methods">
  <h2 className="payment__title">Payment method</h2>

  {!userData.payment?.card ? (
    <p className="payment__empty">
      No payment method saved yet
    </p>
  ) : (
    <>
      <input
        className="payment__input"
        value={`**** **** **** ${userData.payment.card.card.slice(-4)}`}
        disabled
      />
      <div className='payment-btn'>
      <button
        type="button"
        className="payment__btn"
        onClick={onOpenDeliveryModal}
      >
        Change payment
      </button>
      </div>
    </>
  )}
</div>
          </section>
      </div>
  );
}

export default Account;
