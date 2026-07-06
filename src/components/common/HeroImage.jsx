import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function HeroImage({ 
  title, 
  imgSrc, 
  imgAlt = "Hero Image",
  heightClass = "h-[60vh] md:h-[90vh]",
  grayscale = false,
  hasGsapAnimation = true,
  hideScrollIcon = true,
  customOverlay = null,
  titleClassName = "font-primary text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight"
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    if (hasGsapAnimation) {
      gsap.fromTo(headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, [hasGsapAnimation]);

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden`}>
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        className={`w-full h-full object-cover ${grayscale ? 'grayscale opacity-80' : ''}`}
      />
      
      {/* Overlay */}
      
      
      {/* Content */}
      <div className={hideScrollIcon ? "absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12 md:pb-16" : "absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12"}>
        <div className={hideScrollIcon ? "" : "flex justify-between items-end w-full"}>
          <h1 
            ref={headingRef}
            className={`text-white opacity-0 ${titleClassName}`}
          >
            {title}
          </h1>
          
          {/* Scroll / Drag Icon */}
          {!hideScrollIcon && (
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/30 mb-4 cursor-pointer hover:bg-white/10 transition-colors z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 5v14M12 19l-4-4M12 19l4-4" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
