import './footer.scss';
import {social} from '../data/social';
function Footer({onNavigate}) {
  return  <footer className="footer" id='contact'>
          <div className="container__footer">
            <div className="footer__container">
              <div className="footer__rows">
             <div className="footer__logo"><svg aria-hidden="true"   viewBox="0 20 400 80" focusable="false" className="footer__logo-img"><use href="#aura-brew-logo"></use></svg>
             </div>
            <div className="footer__nav-item">
          <ul>
            <li><a className="footer__nav-link footer__strong" onClick={()=>onNavigate('hero')} >Home</a></li>
          </ul>
          </div>
           <div className="footer__nav-item">
          <ul>
            <li><a className="footer__nav-link footer__strong" onClick={()=>onNavigate('events')}>Exchange of Energy</a></li>
          </ul>
           </div>
            <div className="footer__nav-item">
          <ul>
            <li><a className="footer__nav-link footer__strong" onClick={()=>onNavigate('menu')}>Discover our blend</a></li>
          </ul>
            </div>
             </div>
          <div className="footer__contacts">
            <div className="footer__coll">
          <p className="footer__tel">
          <a className="footer__link" href="tel:15551234567" aria-label="Call AuraBrew">
         +1 (555) 123 4567
         </a>
         </p>
         </div>
         <div className="footer__social">
                  {social.map((soc) => (
  <a  key={soc.id}
    href={soc.link}
    className="footer__icon"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={soc.label}
  >
    <svg className="footer__img"
    aria-hidden="true"
    focusable="false"
    >
      <use href={soc.icon} />
    </svg>
  </a>
))}
       
         </div>
         </div>
         </div>
         </div>
        </footer>
}

export default Footer;
