import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.fromTo(contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-auto min-h-screen lg:h-screen pt-32 pb-[10px] md:pt-48 md:pb-[10px] px-6 md:px-12 flex flex-col justify-end bg-black overflow-hidden"
      style={{ opacity: 0 }}
    >
      {/* Top Left Tag */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20">
        <p className="text font-primary text-sm md:text-base font-medium tracking-wide text-white">About Us</p>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://media-prod.zha.com/zhweb-prod-media/media/xfnbc5ft/02455_cp_vsb_dec23_n302923.jpg?w=1920&g=0.5x0.5&fm=webp"
          alt="Architecture Background"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to ensure text readability without hiding the image */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mx-auto mt-16 md:mt-0">

        {/* Left Side: Text Content */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col text-white">
          <h2 className="font-primary text-5xl md:text-6xl font-normal tracking-tight mb-8">
            About the practice
          </h2>
          <p className="font-primary text-xl md:text-[22px] text-gray-300 leading-snug font-normal mb-10 max-w-lg">
            We are architects, designers, coders. Thinkers, creators, innovators. We are a diverse community of 500 people from 55 nations working across 5 global offices. We are ABH.
          </p>
          <div className="flex flex-row items-center gap-4">
            <a href="/inside-abh" className="bg-white text-black text-xs font-medium tracking-widest uppercase px-6 py-4 flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Inside ABH <span>&rarr;</span>
            </a>
            <a href="/team" className="bg-transparent border border-white/40 text-white text-xs font-medium tracking-widest uppercase px-6 py-4 flex items-center gap-2 hover:bg-white/10 transition-colors">
              The Team <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Side: Image / Video with Play Button */}
        <div ref={imageRef} className="w-full lg:w-1/3 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl rounded-lg overflow-hidden cursor-pointer group shadow-2xl">
            <img
              src="https://media-prod.zha.com/zhweb-prod-media/media/mvdhc2b0/zha-brand-screenshot-suggestion.jpg?w=1920&g=0.5x0.5&fm=webp"
              alt="Office"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Watch Now Overlay Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-bold tracking-widest uppercase leading-tight text-center pointer-events-auto transition-transform group-hover:scale-110">
                Watch<br />Now
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
