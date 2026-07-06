import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function HeroVideo({ 
  title, 
  vimeoId, 
  videoTitle = "Hero Video",
  videoScale = "200%",
  hasGsapAnimation = true,
  hideScrollIcon = false,
  customOverlay = null,
  titleClassName = "font-primary text-6xl md:text-8xl lg:text-[120px] tracking-tighter leading-none mb-0 pb-0"
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
    <div className="relative w-full h-[60vh] md:h-[100vh] bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: videoScale, height: videoScale }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={videoTitle}
        ></iframe>
      </div>
      
      {/* Overlay */}
      {customOverlay !== null ? (
        customOverlay
      ) : (
        <div className="absolute inset-0 to-transparent"></div>
      )}
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12">
        <div className="flex justify-between items-end w-full">
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
