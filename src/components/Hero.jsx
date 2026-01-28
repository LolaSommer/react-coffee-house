import "./hero.scss";
import brewvibe from '../assets/brewvibe.png';
import brewVibeWeb from '../assets/brewvibeWeb.webp';
  import { useRef} from 'react';
import { heroAnimation } from "../animations/heroAnimations";
function Hero() {
   const cupRef = useRef(null);
   const glowRef = useRef(null);
   heroAnimation(cupRef, glowRef);
  return <section className="hero" id="hero" aria-labelledby="hero-heading">
    <div className="hero__container">
      <div className="hero__colls-left">
    <h1 className="hero__title" id="hero-heading">Find Your Frequency...</h1>

 <div className="hero__text-group">
     <p className="hero__text">Explore our coffee rituals, from grounding espresso to sacral cappuccino. Your aura is thirsty.</p>
    </div>
</div>
<div className="hero__colls-right">
 <div className="hero__cup-wrap">
    <div className="hero__cup-glow" ref={glowRef}></div>
   <picture>
          <source srcSet={brewVibeWeb} type="image/webp" />
          <img ref={cupRef} className="hero__img" src={brewvibe} 
           loading="eager"
          alt="Aura Brew coffee" />
        </picture>
 </div>
 </div>
 </div>
  </section>;
}

export default Hero;

