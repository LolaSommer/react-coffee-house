import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function EventsBlogAnimation(sectionRef, titleRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const darkness = section.querySelector(".light__darkness");
    if (!darkness) return;

    gsap.to(darkness, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,  
        start: "top 70%",        
        toggleActions: "play none none reverse",
      
      },
    });
  }, []);
}




