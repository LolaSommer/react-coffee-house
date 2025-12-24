import "./hero.scss";
import brewvibe from '../assets/brewvibe.png';
import brewVibeWeb from '../assets/brewvibeWeb.webp';
import sparkl__btn from '../assets/sparkl__btn.png';
function Hero() {
  return <section className="hero" id="hero" aria-labelledby="hero-heading">
    <div className="hero__container">
      <div className="hero__colls-left">
    <h1 className="hero__title" id="hero-heading">Find Your Frequency...</h1>

 <div className="hero__text-group">
     <p className="hero__text">Explore our coffee rituals, from grounding espresso to sacral cappuccino. Your aura is thirsty.</p>
    </div>
</div>
<div className="hero__colls-right">
 <div >
   <picture>
          <source srcSet={brewVibeWeb} type="image/webp" />
          <img className="hero__img" src={brewvibe} alt="Aura Brew coffee" />
        </picture>
 </div>
 <div className="hero__btn-group">
 <button className="hero__btn-left">
<img className="hero__cristal" src={sparkl__btn} alt="cristal"/>
 </button>
 <button className="hero__btn-right">
<img className="hero__cristal" src={sparkl__btn} alt="cristal"/>
 </button>
 </div>
 </div>
 </div>
  </section>;
}

export default Hero;

