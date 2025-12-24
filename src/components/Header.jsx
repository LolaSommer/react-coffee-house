import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
       <svg className="header__icon" aria-hidden="true" focusable="false">
     <use href="#aura-brew-logo"/>
      </svg>
      </div>
      <nav className="header__nav" aria-label="Main navigation">
         <ul className="header__check">
        <li className="header__link"><a href="#hero" className="header__list">Home</a></li>
        <li className="header__link"><a href="#menu" className="header__list">Menu</a></li>
        <li className="header__link"><a href="#about" className="header__list">About</a></li>
        <li className="header__link"><a href="#events" className="header__list">Events</a></li>
        <li className="header__link"><a href="#contact" className="header__list">Contact</a></li>
        </ul>
      </nav>
      <div className="header__group">
        <div className="header__auth">
        <button type="button" aria-label="Log in to your account" className="header__login">Log in</button>
        </div>
        <div className="header__cart-group">
      <button type="button" className="header__cart">
         <svg className="header__icon-cart" aria-label="Open shopping cart">
       <use href="#cart-icon"/>
      </svg>
      </button>
      <span className="header__cart-total" aria-live="polite" aria-atomic="true">0</span>
      </div>
      </div>
    </header>
  );
}

export default Header;
