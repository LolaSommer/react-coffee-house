import "./menu.scss";
import silken from '../assets/silken.webp';
import reading from '../assets/reading.webp';
import lunar from '../assets/lunar.webp';
import harmony from '../assets/harmony.webp';
import sesonail from '../assets/sesonail.webp';
import mystic from '../assets/mystic.webp';
function Menu() {
  return (
    <section id="menu" className="menu">
      <h1 className="menu__title">Discover Our Blends</h1>
      <div className="menu__container">
      <div className="menu__cards">
        <div className="menu__card">
           <picture>
          <source srcSet={silken} type="image/webp" />
          <img className="menu__img" src={silken} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Silken Whisper</div>
        <div className="card__description">A smooth and comforting blend of milk and caramel.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={mystic} type="image/webp" />
          <img className="menu__img" src={mystic} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Mystic Blend</div>
        <div className="card__description">A bold fusion of smoked paprika, rich chocolate, and fresh cream.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={harmony} type="image/webp" />
          <img className="menu__img" src={harmony} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Aura Harmony</div>
        <div className="card__description">Chilled coffee with alternative milk and vanilla.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={sesonail} type="image/webp" />
          <img className="menu__img" src={sesonail} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Ephemeral Brew</div>
        <div className="card__description">A taste that exists only for a moment.Always fleeting. Always new.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={lunar} type="image/webp" />
          <img className="menu__img" src={lunar} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Lunar Brew</div>
        <div className="card__description">Decaffeinated coffee with your choice of add-ins.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={reading} type="image/webp" />
          <img className="menu__img" src={reading} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Fortune's Choice</div>
        <div className="card__description">Let the barista decide.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
      </div>
      <button className="card__next">
         <svg className="card__icon">
       <use href="#icon-arrow"/>
      </svg>
      </button>
      </div>
    </section>
  );
}

export default Menu;
