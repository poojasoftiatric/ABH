import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Hide default cursor on desktop mostly
    const ctx = gsap.context(() => {
      const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });
      };
      
      const onHover = () => {
        gsap.to(cursorRef.current, { scale: 3, backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid white', duration: 0.3 });
      };
      
      const onLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'white', border: 'none', duration: 0.3 });
      };

      window.addEventListener('mousemove', moveCursor);
      
      // Select all interactive elements
      const interactives = document.querySelectorAll('a, button, .cursor-pointer');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onHover);
        el.addEventListener('mouseleave', onLeave);
      });

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        interactives.forEach(el => {
          el.removeEventListener('mouseenter', onHover);
          el.removeEventListener('mouseleave', onLeave);
        });
      }
    }, cursorRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[200] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ willChange: 'transform' }}
    />
  );
}
