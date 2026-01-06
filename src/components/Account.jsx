import './Account.scss';
function Account() {
  return (
    <div className='reg__form'>
     <form className="reg__auto">
                         <label className="reg__text">Name
                        <input className="reg__input" type="text" name="name" placeholder="Enter your name" pattern="[A-Za-zА-Яа-я '\-]{2,}" required/>
                        </label>
                        <label className="reg__text">Email
                       <input className="reg__input" type="email" name="email" placeholder="Enter your email address" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" required/>
                       </label>
                       <label className="reg__text">Phone number
                       <input className="reg__input" type="tel" name="tel" placeholder="Enter your phone number" pattern="^\+?[0-9\s\-]{7,15}$" required/>
                       </label>
                       <label className="reg__text">Password
                      <input className="reg__input" name="password" type="password" placeholder="Enter your password" required minlength="6"/>
                       </label>
                       <label className="reg__text">Confirm password
                       <input className="reg__input" type="password" name="confirm-password" placeholder="Confirm your password" required minlength="6"/>
                        </label>
                       <div className="reg__options">
                         <label className="reg__radio">
                        <input className="reg__modal-radio" type="radio" name="rewards program" value="agree"/>
                        <span className="radio__label"></span>
                       <span className="reg__text">I agree to join the rewards program</span>
                       </label>
                       </div>
                        <div className="reg__btn">
                       <button type="button" className="reg-btn" disabled>Create Account</button>
                       </div>
                       </form>
    </div>
  );
}

export default Account;
