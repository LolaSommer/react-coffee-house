import './auth.scss';
import { useState } from 'react';

function Auth({onCloseAuth}) {
   const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [isPhoneValid,setIsPhoneValid] = useState(false);
 const [code, setCode] = useState(['', '', '', '']);
const [isCodeComplete, setIsCodeComplete] = useState(false);
function handleClose() {
  setStep('phone');
  setPhone('');
  onCloseAuth();
}
function handlePhoneChange(e) {
  const value = e.target.value;
  setPhone(value);

  const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
  setIsPhoneValid(phoneRegex.test(value));
}

function handleCodeChange(index, value) {
  if (!/^\d?$/.test(value)) return; 

  const newCode = [...code];
  newCode[index] = value;
  setCode(newCode);

  const isComplete = newCode.every(digit => digit !== '');
  setIsCodeComplete(isComplete);
}
function handleVerifyClick() {
  if (!isCodeComplete) {
    setStep('phone');
  } else {
    // здесь позже будет логин
    onClose();
  }
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
        <input className="auth__input" value={phone} onChange={handlePhoneChange} type="tel" name="tel" placeholder="+49  ___ ___ ___" required></input>
         </label>
      </form>
      <p className='auth__sms'>We’ll send you a one-time code to verify your number.</p>
      <div className='auth__btn-group'>
      <p className='auth__text'>By continuing, you agree to our <a className='auth__link' href="#">Terms</a> and <a  className='auth__link' href="#">Privacy Policy</a></p>
      <button  type="button" className='auth__btn' disabled={!isPhoneValid} onClick={() => setStep('code')}>
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
      <form className="auth__form">
  {code.map((digit, index) => (
    <label key={index} className="auth__num">
      <input
        className="auth__code"
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={digit}
        onChange={(e) => handleCodeChange(index, e.target.value)}
        required
      />
    </label>
  ))}
</form>

      <div className='auth__btn-group'>
      <p className='auth__text'>Didn’t receive the code? Request a new one in 60 seconds.</p>
      <button className='auth__btn' onClick={handleVerifyClick}>
   {isCodeComplete ? 'Verify' : 'Change number'}
</button>
      </div>
    </div>
  )}
</div>
</div>
  ); 
}

export default Auth;
