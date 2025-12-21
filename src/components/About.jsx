import './about.scss';
import auracafe from '../assets/auracafe.webp';
import heroVideo from '../assets/heroVideo.mp4';
function About() {
  return <section className='about'>
    <div className='about__colls-left'>
<div className='about__img'>
  <picture>
  <source srcSet={auracafe} type="image/webp" />
  <img className="about__img" src={auracafe} alt="Aura Brew coffee" />
  </picture>
</div>
</div>
<div className='about__colls-right'>
<h1 className='about__title'>How We Brew Magic</h1>
<p className='about__untertitle'>In one orbit of the Earth around the Sun, we have transformed a quiet morning ritual into a conscious practice. We didn't just open a café — we tuned a space where every cup of coffee becomes a tuning fork for your day.</p>
<ul className='about__info'> This past year, we have:
  <li className='about__text'>Learned to listen to the beans, selecting 7 unique varieties whose "energy profiles" resonate with different states of the soul.</li>
  <li className='about__text'>Transformed the process into a dance, where the barista's movement is not work but meditation, and steaming milk is the creation of a cloud for your thoughts.</li>
  <li className='about__text'>Crafted our "Sacred Sweets" — not mere desserts, but materialized intentions that complete the ritual.
</li>
</ul>
<div className='about__video-group'>
<video className="about__video" autoPlay muted loop playsInline>
  <source src={heroVideo} type="video/mp4" />
</video>
 <button type="button" aria-label="Play video" className='video__btn'>Magic Process</button>
 <button type="button" aria-label="play video" className='video__btn-small play hidden'></button>
 </div>
<p className='about__untertitle'>Our philosophy is simple: coffee is not fuel; it is a conduit. From the rich, grounding "Root Chakra Espresso" that anchors you in the moment, to the ethereal "Third Eye Cappuccino" that clarifies perception.</p>
  <p className='about__untertitle'>We do not brew drinks.</p>
  <p className='about__untertitle'>We tune frequencies.</p>
</div>
  </section>
}

export default About;
