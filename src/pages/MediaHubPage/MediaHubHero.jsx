import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function MediaHubHero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative w-full h-[95vh] bg-black overflow-hidden">
      <img
        src="https://media-prod.zha.com/zhweb-prod-media/media/lcej4iia/01825_cp_hc_jan25_n313292.jpg?w=1920&g=0.5188087774294671x0.8248125868964988&fm=webp"
        alt="Media Hub Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Heading */}
      <div className="absolute bottom-0 z-20 flex flex-col justify-end p-6 md:p-8 pb-16 md:pb-4">
        <h1 
          ref={headingRef}
          className="font-primary text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter mix-blend-difference"
        >
          MEDIA HUB
        </h1>
      </div>
    </div>
  );
}
