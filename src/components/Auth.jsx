import './auth.scss';
import { useState } from 'react';

function Auth({onCloseAuth}) {
   const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
function handleClose() {
  setStep('phone');
  setPhone('');
  onCloseAuth();
}

  return (
    <div className='auth'>
    <div className='auth__overlay' onClick={onCloseAuth}></div>
    <div className='auth__wrapper'>
      <div className="auth__line">
        <button className="auth__close" aria-label="close"onClick={onCloseAuth}>
        <svg className="auth__icon"><use href="#icon-close"></use></svg>
          </button>
          </div>
     {step === 'phone' &&(<div className='auth__window'>
      <div className='auth__group'>
      <h2 className='auth__title'>Enter your phone number</h2>
      <p className='auth__description'>We’ll use it to sign you in.</p>
      </div>
      <form>
        <label className="auth__tel">
        <input className="auth__input" value={phone} onChange={e=>setPhone(e.target.value)} type="tel" name="tel" placeholder="+49  ___ ___ ___" pattern="^\+?[0-9\s\-]{7,15}$" required></input>
         </label>
      </form>
      <p className='auth__sms'>We’ll send you a one-time code to verify your number.</p>
      <div className='auth__btn-group'>
      <p className='auth__text'>By continuing, you agree to our <a className='auth__link' href="#">Terms</a> and <a  className='auth__link' href="#">Privacy Policy</a></p>
      <button className='auth__btn' onClick={() => setStep('code')} disabled={!phone}>
  Continue
</button>

      </div>
    </div>
     )}
       {step === 'code' &&( 
    <div className='auth__window'>
      <div className='auth__group'>
      <h2 className='auth__title'>Enter the SMS code</h2>
      <p className='auth__description'>We sent to {phone}</p>
      </div>
      <form className='auth__form'>
        <label className="auth__num">
        <input className="auth__code" type="tel" name="tel" required></input>
         </label>
         <label className="auth__num">
        <input className="auth__code" type="tel" name="tel"  required></input>
         </label>
         <label className="auth__num">
        <input className="auth__code" type="tel" name="tel" required></input>
         </label>
         <label className="auth__num">
        <input className="auth__code" type="tel" name="tel" required></input>
         </label>
      </form>
      <div className='auth__btn-group'>
      <p className='auth__text'>Didn’t receive the code? Request a new one in 60 seconds.</p>
      <button className='auth__btn' onClick={() => setStep('phone')}>
  Verify
</button>
      </div>
    </div>
  )}
</div>
</div>
  ); 
}

export default Auth;
