import './footer.scss';

function Footer() {
  return  <footer className="footer">
          <div classNameName="container__footer">
            <div className="footer__container">
              <div className="footer__rows">
             <div className="footer__logo"><svg aria-hidden="true"   viewBox="0 20 400 80" focusable="false" className="footer__logo-img"><use href="#aura-brew-logo"></use></svg>
             </div>
            <div className="footer__nav-item">
          <ul>
            <li><a className="footer__nav-link footer__strong" data-scroll="hero">Home</a></li>
            <li><a className="footer__nav-link" data-scroll="menu">Order Now</a></li>
          </ul>
          </div>
           <div className="footer__nav-item">
          <ul>
            <li><a className="footer__nav-link footer__strong" data-scroll="events">Exchange of Energy</a></li>
            <li><a className="footer__nav-link" data-scroll="events">Aura Events</a></li>
          </ul>
           </div>
            <div className="footer__nav-item">
          <ul>
            <li><a className="footer__nav-link footer__strong" data-scroll="menu">Discover our blend</a></li>
            <li><a className="footer__nav-link" data-scroll="menu">Sacral sweets</a></li>
          </ul>
            </div>
             </div>
          <div className="footer__contacts">
            <div className="footer__coll">
          <p className="footer__tel">
          <a className="footer__link" href="tel:15551234567" aria-label="Call PizzaShop">
         +1 (555) 123 4567
         </a>
         </p>
         </div>
         <div className="footer__social">
         <a href="#"  aria-label="Instagram" className="footer__icon" data-type="instagram"><svg className="footer__img" aria-hidden="true" focusable="false" ><use href="#inst"></use></svg></a>
         <a href="#" aria-label="Twitter" className="footer__icon" data-type="twitter"><svg className="footer__img" aria-hidden="true" focusable="false"><use href="#X"></use></svg></a>
         <a href="#" aria-label="Facebook" className="footer__icon" data-type="facebook"><svg className="footer__img" aria-hidden="true" focusable="false"><use href="#facebook-net"></use></svg></a>
         </div>
         </div>
         </div>
         </div>
        </footer>
}

export default Footer;
