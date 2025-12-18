import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
       <svg className="header__icon">
     <use href="/icons/sprite.svg#aura-brew-logo"/>
      </svg>
      </div>
      <nav className="header__nav">
        <ul className="header__check">
        <li><a href="#hero" className="header__list">Home</a></li>
        <li><a href="#menu" className="header__list">Menu</a></li>
        <li><a href="#events" className="header__list">Events</a></li>
        <li><a href="#about" className="header__list">About</a></li>
        <li><a href="#contact" className="header__list">Contact</a></li>
        </ul>
      </nav>
      <div className="header__group">
      <button type="submit" className="header__login">Log in</button>
      <button type="button" className="header__cart">
         <svg className="header__icon-close">
       <use href="/icons/sprite.svg#cart-icon"/>
      </svg>
      </button>
      </div>
    </header>
  );
}

export default Header;
