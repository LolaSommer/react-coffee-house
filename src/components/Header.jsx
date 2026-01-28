import './header.scss';

function Header({activeSection,onCartOpen, onAuthClick,onOpenAccount,totalItems,isAuth,onGoHome,currentPage}) {
let buttonText = 'Log in';
let handleClick = onAuthClick;

if (isAuth && currentPage === 'home') {
  buttonText = 'My account';
  handleClick = onOpenAccount;
}

if (isAuth && currentPage === 'account') {
  buttonText = 'Back to home';
  handleClick = onGoHome;
}
if (currentPage === 'events'){
  buttonText='Back to home';
   handleClick = onGoHome;
}

  return (
    <header className="header">
      <div className="header__logo">
       <svg className="header__icon" aria-hidden="true" focusable="false">
     <use href="#aura-brew-logo"/>
      </svg>
      </div>
      <nav className="header__nav" aria-label="Main navigation">
  <ul className="header__check">
  {currentPage !== 'events' && (
    <>
      <li className="header__link">
        <a href="#hero" className={`header__list ${activeSection === 'hero' ? 'header__list--active' : ''}`}>
          Home
        </a>
      </li>

      <li className="header__link">
        <a href="#menu" className={`header__list ${activeSection === 'menu' ? 'header__list--active' : ''}`}>
          Menu
        </a>
      </li>

      <li className="header__link">
        <a href="#about" className={`header__list ${activeSection === 'about' ? 'header__list--active' : ''}`}>
          About
        </a>
      </li>

      <li className="header__link">
        <a href="#events" className={`header__list ${activeSection === 'events' ? 'header__list--active' : ''}`}>
          Events
        </a>
      </li>

      <li className="header__link">
        <a href="#contact" className={`header__list ${activeSection === 'contact' ? 'header__list--active' : ''}`}>
          Contact
        </a>
      </li>
    </>
  )}

  {currentPage === 'events' && (
    <>
      <li className="header__link"><a href="#events-home" className={`header__list ${activeSection === 'events-home' ? 'header__list--active' : ''}`}>Home</a></li>
            <li className="header__link"><a href="#tasseography" className={`header__list ${activeSection === 'tasseography' ? 'header__list--active' : ''}`}>Tasseography</a></li>
      <li className="header__link"><a href="#dark" className={`header__list ${activeSection === 'dark' ? 'header__list--active' : ''}`}>No Light</a></li>
      <li className="header__link"><a href="#roast" className={`header__list ${activeSection === 'roast' ? 'header__list--active' : ''}`}>Roasting</a></li>
      <li className="header__link"><a href="#sound" className={`header__list ${activeSection === 'sound' ? 'header__list--active' : ''}`}>Sound</a></li>
     
    </>
  )}
</ul>

</nav>

      <div className="header__group">
        <div className="header__auth">
    <button
  type="button"
  className="header__login"
  onClick={handleClick}
>
  {buttonText}
</button>
        </div>
        <div className="header__cart-group">
      <button type="button" className="header__cart" onClick={onCartOpen}>
         <svg className="header__icon-cart" aria-label="Open shopping cart">
       <use href="#cart-icon"/>
      </svg>
      </button>
      <span className="header__cart-total" aria-live="polite" aria-atomic="true">{totalItems}</span>
      </div>
      </div>
    </header>
  );
}



export default Header;
