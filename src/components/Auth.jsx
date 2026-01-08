import './auth.scss';
import { useState, useRef,useEffect } from 'react';

function Auth({onClose,onAuthSuccess}) {
const [step, setStep] = useState('phone');
const [phone, setPhone] = useState('');
const [isPhoneValid,setIsPhoneValid] = useState(false);
const [code, setCode] = useState(['', '', '', '']);
const inputsRef = useRef([]);
const [timer, setTimer] = useState(60);
const [canResend, setCanResend] = useState(false);
useEffect(() => {
  if (step !== 'code') return;
  if (timer === 0) {
    setCanResend(true);
    return;
  }

  const interval = setInterval(() => {
    setTimer(prev => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [step, timer]);
function handleResend() {
  setCode(['', '', '', '']);
  setTimer(60);
  setCanResend(false);
}

function handleClose() {
  setStep('phone');
  setPhone('');
  onClose();
}
function handlePhoneChange(e) {
  const rawValue = e.target.value;
  // 1. оставить только цифры
  const digitsOnly = rawValue.replace(/\D/g, '');
  // 2. сохранить очищенный номер
  setPhone(digitsOnly);
  // 3. проверить длину
  const isValid =
    digitsOnly.length >= 10 && digitsOnly.length <= 15;
  // 4. обновить флаг
  setIsPhoneValid(isValid);
}

function handleCodeChange(index, value) {
 const digit = value.replace(/\D/g, '').slice(0, 1);
 const newCode = [...code];
 newCode[index]=digit;
 setCode(newCode);
 if(digit && inputsRef.current[index +1]){
  inputsRef.current[index+1].focus();
 }
}
function handleKeyDown(index, e) {
  if (
    e.key === 'Backspace' &&
    !code[index] &&
    inputsRef.current[index - 1]
  ) {
    inputsRef.current[index - 1].focus();
  }
}
function handleVerifyClick() {
  if (!isCodeComplete) {
    setStep('phone');
    setCode(['', '', '', '']);
  } else {
    onAuthSuccess(true);
    onClose();
  }
}

const isCodeComplete = code.every(d=> d !== '');

  return (
    <div className='auth'>
    <div className='auth__overlay' onClick={onClose}></div>
    <div className='auth__wrapper'>
      <div className="auth__line">
        <button className="auth__close" aria-label="close"onClick={onClose}>
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
  {code.map((digit, i) => (
    <label key={i} className="auth__num">
      <input
        className="auth__code"
        type="text"
         
    ref={el => (inputsRef.current[i] = el)}
    value={digit}
    maxLength={1}
    onChange={e => handleCodeChange(i, e.target.value)}
    onKeyDown={e => handleKeyDown(i, e)}
        required
      />
    </label>
  ))}
</form>

     <div className='auth__btn-group'>

  {!canResend && (
    <p className='auth__text'>
      Didn’t receive the code? Request a new one in {timer} seconds.
    </p>
  )}

  {canResend && (
    <button
      className='auth__resend'
      onClick={handleResend}
    >
      Resend code
    </button>
  )}

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
