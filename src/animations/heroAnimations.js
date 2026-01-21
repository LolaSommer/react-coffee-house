  import {useEffect } from 'react';
import gsap from 'gsap';
  export function heroAnimation(cupRef,glowRef){
useEffect(() => {
  if (!cupRef.current) return;
 gsap.to(cupRef.current, {
  y: -10,
  rotateZ: 2,
  rotateY: 10,
  scale: 1.04,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
}, []);
useEffect(() => {
  if (!glowRef.current) return;

  gsap.fromTo(glowRef.current, {
    opacity:0.1,scale:0.9},
    {
     opacity: 0.5,
    scale: 1.18,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}, []);
  }
