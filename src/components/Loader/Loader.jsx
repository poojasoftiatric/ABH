import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: 1.5, // simulate loading time
        ease: 'power3.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        }
      });
    }, loaderRef);

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[100] bg-black text-white flex items-center justify-center pointer-events-none"
    >
      <div className="overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest animate-pulse">
          ABH
        </h1>
      </div>
    </div>
  );
}
