import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function EventsBlogAnimation(sectionRef, titleRef, bagRef, roastRef, beanRefs) {
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
  }, [sectionRef, titleRef]); 

  useEffect(() => {
    const bag = bagRef.current;
    const beans = beanRefs.current;
    const roast = roastRef.current;
    if (!bag || !beans || !beans.length || !roast) return; 
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: roast,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
    tl.add(() => {
  const bagRect = bag.getBoundingClientRect();
  const bagCenterX = bagRect.left + bagRect.width / 2;
  const bagCenterY = bagRect.top + bagRect.height / 2;

  beanRefs.current.forEach(bean => {
    if (!bean) return;
    const beanRect = bean.getBoundingClientRect();

    gsap.set(bean, {
      x: bagCenterX - (beanRect.left + beanRect.width / 2),
      y: bagCenterY - (beanRect.top + beanRect.height / 2),
      opacity: 0,
      scale: 0.5,
    });
  });
});
    tl.fromTo(bag, {
      x: -500,
      rotation: -90,
      opacity: 0,
      scale: 0.8,
    }, {
      x: 0,
      rotation: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5
    });
    
    tl.to(beanRefs.current, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.2,
      stagger: 0.02,
      ease: "power2.in",
    }, "-=0.1");
    return () => {
  tl.kill();
};

  }, [bagRef, roastRef, beanRefs]); 
}




