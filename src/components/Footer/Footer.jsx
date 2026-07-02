import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const anchorRef = useRef(null);
  const footerContentRef = useRef(null);
  const topWrapperRef = useRef(null);
  const bottomWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Basic fade-in for the footer when it enters the viewport
      gsap.to(anchorRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      });

      gsap.to(footerContentRef.current, {
        height: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      });

      gsap.to([topWrapperRef.current, bottomWrapperRef.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={footerRef} className="box flex flex-initial shrink-0 footer-wrapper home desktop w-[calc(100%-20px)] mx-auto relative z-10 bg-black text-white p-6 md:p-6 overflow-hidden mt-12 rounded-lg h-[800px] md:h-[400px]">
      <div ref={anchorRef} className="box flex flex-initial shrink-0 footer-anchor w-full h-full relative rounded-lg p-4" style={{ opacity: 0 }}>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 media-holder footer-background w-full h-full rounded-lg">
          <img
            alt="Beeah HQ"
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
            src="https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <footer ref={footerContentRef} className="box relative z-10 w-full h-full flex flex-col justify-between" style={{ height: "0%" }}>

          {/* Top Section */}
          <div ref={topWrapperRef} className="stack flex flex-col md:flex-row items-start justify-between footer-top-wrapper pt-0" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="box flex flex-initial shrink-0 media-holder footer-logo mb-8 md:mb-0">
              <svg
                width="110"
                height="55"
                viewBox="0 0 160 80"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="0" y="55" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" letterSpacing="-2">ABH</text>
              </svg>
            </div>
            <div className="stack flex flex-col md:flex-row gap-4 md:gap-8 items-start footer-top-links text-xs tracking-widest uppercase font-medium">
              <a className="hover:text-gray-300 transition-colors" href="/contact">Contact</a>
              <a className="hover:text-gray-300 transition-colors" href="https://zha.jobs.personio.com/?language=en" target="_blank" rel="noreferrer">Careers &#8599;</a>
              <a className="hover:text-gray-300 transition-colors" href="/reports">Reports</a>
              <a className="hover:text-gray-300 transition-colors" href="/expertise">Expertise</a>
            </div>
          </div>

          {/* Bottom Section */}
          <div ref={bottomWrapperRef} className="stack flex flex-col footer-bottom-wrapper pb-0 border-t border-white/20 pt-6" style={{ opacity: 0, transform: 'translateY(20px)' }}>

            <div className="text text-xs md:text-lg text-gray-300 footer-disclaimer mb-8 max-w-6xl leading-relaxed">
              <p>“ABH®” and “ABH Architects™” are trade marks of ABH Architects Limited, a company based in London, UK and owned by its employees. ABH Architects Group previously traded under a trade mark licence from the ABH Foundation. Following the termination of the licence in 2025 the ABH Architects Group ceased all use of that trade mark and disclaims any connection with the Foundation.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 md:gap-0">
              <div className="stack flex flex-row items-center footer-social-links">
                <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="w-5 h-5"><path fill="currentColor" fillRule="evenodd" d="M11.742 2.26a2.79 2.79 0 0 0-1.962-.816H4.225a2.786 2.786 0 0 0-2.778 2.778v5.556a2.786 2.786 0 0 0 2.778 2.778H9.78a2.786 2.786 0 0 0 2.778-2.778V4.222a2.79 2.79 0 0 0-.816-1.962M4.225.333H9.78a3.9 3.9 0 0 1 3.89 3.89v5.555a3.9 3.9 0 0 1-3.89 3.889H4.225a3.9 3.9 0 0 1-3.89-3.89V4.223A3.9 3.9 0 0 1 4.226.333m5.926 3.749a.834.834 0 1 0 .926-1.386.834.834 0 0 0-.926 1.386m-1.914 1.07a2.222 2.222 0 1 0-2.47 3.696 2.222 2.222 0 0 0 2.47-3.696m-3.086-.924a3.333 3.333 0 1 1 3.703 5.543 3.333 3.333 0 0 1-3.703-5.543" clipRule="evenodd"></path></svg>
                </a>
              </div>

              <div className="stack flex flex-wrap items-center gap-6 footer-bottom-links text-xs tracking-widest uppercase font-medium">
                <a className="hover:text-gray-300 transition-colors" href="/privacy-policy">Privacy Policy</a>
                <a className="hover:text-gray-300 transition-colors" href="/terms-of-use">Terms of Use</a>
                <a className="hover:text-gray-300 transition-colors" href="/sustainability">Sustainability</a>
                <a className="hover:text-gray-300 transition-colors" href="/media-hub">Media Hub</a>
                <span className="footer-copyright opacity-50 ml-4">©2026 ABH</span>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}
