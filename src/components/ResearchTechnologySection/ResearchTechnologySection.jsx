import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ResearchTechnologySection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

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

      gsap.fromTo(videoRef.current,
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
      className="relative w-[calc(100%-40px)] mx-auto my-10 h-auto lg:h-[80vh] min-h-[600px] flex flex-col lg:flex-row bg-[#111215] overflow-hidden rounded-xl"
      style={{ opacity: 0 }}
    >
      {/* Left Column: Content */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-between p-8 md:p-16 z-10 relative gap-12 lg:gap-0">
        {/* Top Left Tag */}
        <div>
          <p className="text font-primary text-sm md:text-base font-medium tracking-wide text-white">Research & Technology</p>
        </div>
        
        {/* Bottom Text Content */}
        <div ref={contentRef} className="flex flex-col text-white max-w-xl">
          <h2 className="font-primary text-5xl md:text-6xl font-normal tracking-tight mb-6">
            Always ahead of the curve
          </h2>
          <p className="font-primary text-lg md:text-xl text-gray-300 leading-relaxed font-normal mb-8">
            Led by a culture of research, ABH is always ahead of the curve because we never stop learning: experimenting, testing, refining, seeking. Anticipating challenges and developing solutions. Envisioning new possibilities, and finding ways to build them.
          </p>
          <div className="flex flex-row items-center gap-4">
            <a href="/research" className="bg-white text-black text-xs font-medium tracking-widest uppercase px-6 py-4 flex items-center gap-2 hover:bg-gray-200 transition-colors">
              Our Research <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Full Height Video Frame with Padding */}
      <div ref={videoRef} className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-full p-4 md:p-8">
        <div className="relative w-full h-full bg-black overflow-hidden rounded-xl group shadow-2xl">
          <iframe
            src="https://player.vimeo.com/video/1062392242?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-105 transition-transform duration-1000"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
