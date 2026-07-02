import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const IMAGES = [
  'https://media-prod.zha.com/zhweb-prod-media/media/2ibjpg5d/img-17.jpg?w=1920&g=0.5x0.5&fm=webp',
  'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5526461578699878x0.2794127047438531&fm=webp',
  'https://media-prod.zha.com/zhweb-prod-media/media/3mqdexb1/04011_cr_n307772.jpg?w=1920&g=0.44862155388471175x0.47916507613719966&fm=webp'
];

export default function Hero() {
  const wrapperRef = useRef(null);
  const loaderRef = useRef(null);
  const loaderLogoRef = useRef(null);
  const loaderProgressRef = useRef(null);
  const headingWrapperRef = useRef(null);
  const headingItemsRef = useRef([]);

  const flare1Ref = useRef(null);
  const flare2Ref = useRef(null);
  const xTo1 = useRef(null);
  const yTo1 = useRef(null);
  const xTo2 = useRef(null);
  const yTo2 = useRef(null);

  const [currentImage, setCurrentImage] = useState(0);

  // Mouse move for sun flare
  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = wrapperRef.current.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    
    // Center of the wrapper
    const cx = width / 2;
    const cy = height / 2;
    
    // Angle from center to mouse
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    let targetX = x;
    let targetY = y;
    
    // Keep the flare 100px behind the mouse cursor relative to the center of the screen
    if (dist > 100) {
      const angle = Math.atan2(dy, dx);
      targetX = x - Math.cos(angle) * 100;
      targetY = y - Math.sin(angle) * 100;
    } else {
      // If mouse is very close to center, keep flare at center
      targetX = cx;
      targetY = cy;
    }

    // Smooth follow with gsap.quickTo
    if (xTo1.current) xTo1.current(targetX - 600); // 600 is half the width/height of flare1
    if (yTo1.current) yTo1.current(targetY - 600);
    if (xTo2.current) xTo2.current(targetX - 200); // 200 is half the width/height of flare2
    if (yTo2.current) yTo2.current(targetY - 200);
  };

  useEffect(() => {
    // Setup quickTo for smooth, slower follow
    xTo1.current = gsap.quickTo(flare1Ref.current, "x", { duration: 2.5, ease: "power3.out" });
    yTo1.current = gsap.quickTo(flare1Ref.current, "y", { duration: 2.5, ease: "power3.out" });

    // Core moves slightly faster for a parallax/layered effect, but still slow
    xTo2.current = gsap.quickTo(flare2Ref.current, "x", { duration: 1.5, ease: "power3.out" });
    yTo2.current = gsap.quickTo(flare2Ref.current, "y", { duration: 1.5, ease: "power3.out" });

    // Center them initially
    if (wrapperRef.current) {
      const { width, height } = wrapperRef.current.getBoundingClientRect();
      xTo1.current(width / 2 - 600);
      yTo1.current(height / 2 - 600);
      xTo2.current(width / 2 - 200);
      yTo2.current(height / 2 - 200);
    }
  }, []);

  useEffect(() => {
    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Loader sequence
    tl.to(loaderLogoRef.current, { opacity: 1, x: 0, duration: 1, ease: "power2.out" })
      .to(loaderProgressRef.current, { width: '100%', duration: 1.5, ease: "power2.inOut" }, "-=0.5")
      .to(loaderRef.current, {
        opacity: 0, duration: 0.5, onComplete: () => {
          loaderRef.current.style.display = 'none';
        }
      })
      // Heading reveal
      .to(headingWrapperRef.current, { opacity: 1, duration: 0 })
      .to(headingWrapperRef.current.querySelector('.home-heading'), { opacity: 1, duration: 0 })
      .to(headingItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

  }, []);

  return (
    <section
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      className="box module pt-0 pb-0 [&_.color-from-bg]:text-black home-wrapper h-screen flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >

      {/* Auto Slideshow Backgrounds */}
      <div className="absolute inset-0 z-0 bg-black">
        {IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transitionProperty: 'opacity, transform'
            }}
          ></div>
        ))}
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Sun Flare / Lens Flare following mouse */}
      <div
        ref={flare1Ref}
        className="absolute top-0 left-0 z-10 pointer-events-none w-[1200px] h-[1200px]"
        style={{
          background: `radial-gradient(circle, rgba(255, 230, 180, 0.4) 0%, transparent 70%)`,
          mixBlendMode: 'screen'
        }}
      ></div>

      {/* Sun Core following mouse */}
      <div
        ref={flare2Ref}
        className="absolute top-0 left-0 z-10 pointer-events-none w-[400px] h-[400px]"
        style={{
          background: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)`,
          mixBlendMode: 'overlay'
        }}
      ></div>

      {/* Loader Wrapper */}
      <div
        ref={loaderRef}
        className="stack flex flex-col items-center justify-center absolute inset-0 bg-black z-50 loader-wrapper"
        style={{ opacity: 1 }}
      >
        <div
          ref={loaderLogoRef}
          className="box flex flex-initial shrink-0 loader-logo mb-4"
          style={{ opacity: 0, transform: 'translateX(-50px)' }}
        >
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest animate-pulse">
              ABH
            </h1>
          </div>
        </div>
        <div className="w-64 h-[2px] bg-white/20 mt-4 overflow-hidden rounded-full">
          <div
            ref={loaderProgressRef}
            className="h-full bg-white loader-progress"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>

      {/* Heading */}
      <div
        ref={headingWrapperRef}
        className="box flex flex-initial shrink-0 home-reference z-20 w-full px-6 md:px-12 absolute bottom-8 md:bottom-16 left-0"
        style={{ opacity: 0 }}
      >
        <div className="box flex flex-initial shrink-0 home-heading-wrapper w-full max-w-[1600px] mx-auto pointer-events-none">
          <h1 className="home-heading flex flex-row font-normal text-[12vw] md:text-[7rem] leading-[0.85] tracking-tight flex-wrap gap-4" style={{ opacity: 0 }}>
            <span
              ref={el => headingItemsRef.current[0] = el}
              className="text font-primary home-heading-item block text-white drop-shadow-lg"
              style={{ opacity: 0, transform: 'translateY(50px)' }}
            >
              Forever
            </span>
            <span
              ref={el => headingItemsRef.current[1] = el}
              className="text font-primary home-heading-item block text-white drop-shadow-lg"
              style={{ opacity: 0, transform: 'translateY(50px)' }}
            >
              Advancing
            </span>
            <span
              ref={el => headingItemsRef.current[2] = el}
              className="text font-primary home-heading-item block text-white drop-shadow-lg"
              style={{ opacity: 0, transform: 'translateY(50px)' }}
            >
              Architecture
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
