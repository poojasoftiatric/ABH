import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const introRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(introRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        }
      });

      gsap.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 75%",
        }
      });

      gsap.to(descRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 65%",
        }
      });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="box module pt-16 pb-16 md:pt-24 md:pb-24 bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="box container mx-auto px-4 md:px-8 max-w-[1600px]">
        <div
          ref={introRef}
          className="stack flex flex-col md:flex-row items-start text-left custom-intro-content-wrapper gap-12 md:gap-24"
          style={{ opacity: 0 }}
        >
          <h2
            ref={headingRef}
            className="text font-primary text-2xl md:text-4xl lg:text-[2.5rem] font-medium tracking-tight mb-8 max-w-sm w-full md:w-1/3 leading-tight"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            <span>Over 40 years<br />designing, building,<br />innovating</span>
          </h2>
          <div
            ref={descRef}
            className="box flex flex-initial shrink-0 custom-intro-description text-xl md:text-2xl lg:text-[2rem] text-[#22665a] font-light w-full md:w-2/3 leading-snug"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            <h2>
              <span>From London to Beijing, Rome to Rabat, Miami to the Metaverse, ABH is building a better world. At every scale and in every sector, we work with our clients to create spaces of greater meaning and purpose. We imagine, we research, we innovate. We design a brighter future, together.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
