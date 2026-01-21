import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSectionReveal(menuRef) {
  useEffect(() => {
    const element = menuRef.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element, 
      { 
        opacity: 0, 
        y: 120 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element, 
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          // markers: true // ← Раскомментируй для проверки (появятся маркеры на странице)
        },
      }
    );

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [menuRef]); 
}
