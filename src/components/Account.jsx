import './Account.scss';
import promo from '../assets/promo.webp';
function Account({onLogout,onGoHome}) {
  return (
    <div className='acc'>
    <div className='acc__form'>
      
     <form className="acc__auto">
      <h2 className='acc__title'>Your account details</h2>
                         <label className="acc__text">Name
                        <input className="acc__input" type="text" name="name" placeholder="Enter your name" pattern="[A-Za-zА-Яа-я '\-]{2,}"/>
                        </label>
                        <label className="acc__text">Email
                       <input className="acc__input" type="email" name="email" placeholder="Enter your email address" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"/>
                       </label>
                       <label className="acc__text">Phone number
                       <input className="acc__input" type="tel" name="tel" placeholder="Enter your phone number" pattern="^\+?[0-9\s\-]{7,15}$"/>
                       </label>
                       <label className="acc__text">Password
                      <input className="acc__input" name="password" type="password" placeholder="Enter your password"/>
                       </label>
                       <label className="acc__text">Confirm password
                       <input className="acc__input" type="password" name="confirm-password" placeholder="Confirm your password"/>
                        </label>
                        <div className="acc__btn">
                       <button type="button" className="acc-btn">Save change</button>
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
  );
}

export default Account;
