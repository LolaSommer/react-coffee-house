import './about.scss';
import auracafe from '../assets/auracafe.webp';
import heroVideo from '../assets/heroVideo.mp4';
import {useRef} from 'react';
import { useState } from 'react';
function About() {
  const [isPlay,setIsPlay]=useState(false);
  const [hasStarted,setHasStarted]=useState(false);
  const vidRef = useRef(null);
  const handleBigPlayVideo=()=>{
    vidRef.current.play();
    setIsPlay(true);
    setHasStarted(true);
  }
  const handleToggleplay=()=>{
    if(vidRef.current.paused){
       vidRef.current.play();
     setIsPlay(true);
    }else{
     vidRef.current.pause();
    setIsPlay(false);
    }
    
  }
  return <section className='about' id='about'>
    <div className='about__colls-left'>
<div className='about__img'>
  <picture>
  <source srcSet={auracafe} type="image/webp" />
  <img className="about__img" src={auracafe} alt="A bright, cozy café space where coffee rituals come to pfe" />
  </picture>
</div>
</div>
<div className='about__colls-right'>
<h1 className='about__title'>How We Brew Magic</h1>
<p className='about__untertitle'>In one orbit of the Earth around the Sun, we have transformed a quiet morning ritual into a conscious practice. We didn't just open a café — we tuned a space where every cup of coffee becomes a tuning fork for your day.</p>
<div className='about__info'> This past year, we have:
  <p className='about__text'>-- Learned to psten to the beans, selecting 7 unique varieties whose "energy profiles" resonate with different states of the soul.</p>
  <p className='about__text'>-- Transformed the process into a dance, where the barista's movement is not work but meditation, and steaming milk is the creation of a cloud for your thoughts.</p>
  <p className='about__text'>-- Crafted our "Sacred Sweets" — not mere desserts, but materiapzed intentions that complete the ritual.
</p>
</div>
<div className='about__video-group'>
<video  ref={vidRef} className="about__video"  muted playsInline aria-hidden="true">
  <source src={heroVideo} type="video/mp4" />
</video>
 {!hasStarted && (<button type="button" aria-label="Play video" onClick={handleBigPlayVideo} className='video__btn'>Magic Process</button>)}
 {hasStarted &&(<button type="button" aria-label="play video"  onClick={handleToggleplay}  className={`video__btn-small ${isPlay ? 'is-playing' : 'is-paused'}`}></button>)}
 </div>
<p className='about__untertitle'>Our philosophy is simple: coffee is not fuel; it is a conduit. From the rich, grounding "Root Chakra Espresso" that anchors you in the moment, to the ethereal "Third Eye Cappuccino" that clarifies perception.</p>
  <p className='about__untertitle'>We do not brew drinks.</p>
  <p className='about__untertitle'>We tune frequencies.</p>
</div>
  </section>
}

export default About;
