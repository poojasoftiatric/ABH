import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SustainabilitySection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Top Left Tag
      gsap.fromTo(tagRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

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

      gsap.fromTo(videoRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
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
      className="relative w-full h-[120vh] min-h-[600px] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp"
          alt="Sustainability Background"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      </div>
      
      <div ref={tagRef} className="absolute top-8 left-6 md:top-12 md:left-12 z-20">
        <p className="font-primary text-sm md:text-base font-medium tracking-wide text-white">Sustainability</p>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16 lg:gap-8 px-[40px] pt-32 pb-[20px]">
        {/* Left Side: Floating Video Frame */}
        <div className="w-full lg:w-1/3 flex justify-start items-end">
          <div ref={videoRef} className="relative w-[90%] max-w-lg aspect-[16/10] rounded-xl overflow-hidden cursor-pointer shadow-2xl bg-black group">
            <iframe
              src="https://player.vimeo.com/video/1062435323?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
              className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-105 transition-transform duration-1000"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 flex justify-end items-end">
          <div ref={contentRef} className="flex flex-col text-white max-w-lg">
            <h2 className="font-primary text-5xl md:text-6xl font-normal tracking-tight mb-6">
              Designing for longevity
            </h2>
            <p className="font-primary text-lg md:text-[22px] text-gray-200 leading-snug font-normal mb-10">
              ABH creates buildings of unparalleled quality and longevity. From our industry-leading Low Carbon Strategy Handbook to AI-assisted climate modelling, our commitment to sustainability is infused into every aspect of our practice.
            </p>
            <div className="flex flex-row items-center gap-4">
              <a href="/sustainability" className="bg-white text-black text-xs font-medium tracking-widest uppercase px-6 py-4 flex items-center gap-2 hover:bg-gray-200 transition-colors">
                Our Approach <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
