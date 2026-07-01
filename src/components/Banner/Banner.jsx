import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bannerRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
        }
      });

      gsap.to(tagRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 70%",
        }
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="box module pt-12 pb-12 banner-video relative w-full px-2 xl:px-2"
      style={{ opacity: 0 }}
    >
      <div className="grid h-auto w-full relative group rounded-2xl overflow-hidden aspect-video bg-black">
        <div className="box flex flex-initial shrink-0 media-holder w-full h-full absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1062058141?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ border: 'none' }}
            title="Vimeo Video Banner"
          ></iframe>
        </div>

        {/* Video Label in top-left */}
        <div className="absolute top-8 left-8 flex flex-col items-start content-block pointer-events-none z-10">
          <p
            ref={tagRef}
            className="text font-primary text-sm md:text-base font-medium text-white mix-blend-difference"
            style={{ opacity: 0, transform: 'translateY(-10px)' }}
          >
            Video
          </p>
        </div>
      </div>
    </section>
  );
}
