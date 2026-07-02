import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function SustainabilityHero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative w-full h-[95vh] bg-black overflow-hidden ">
      <iframe
        src="https://player.vimeo.com/video/1062435323?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
        className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Sustainability Hero Video"
      ></iframe>
      
      {/* Gradient overlay for text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 z-10 pointer-events-none"></div> */}
      
      {/* Heading */}
      <div className="absolute bottom-0 z-20 flex flex-col justify-end p-6 md:p-8 pb-16 md:pb-4">
        <h1 
          ref={headingRef}
          className="font-primary text-5xl md:text-8xl lg:text-9xl tracking-tighter font-medium text-white max-w-7xl"
        >
          Sustainability
        </h1>
      </div>
    </div>
  );
}
