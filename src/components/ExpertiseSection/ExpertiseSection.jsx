import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertises = [
  {
    id: 1,
    title: 'Architecture',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/kg0khmsb/03170_cp_hc_jun26_n323119.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 2,
    title: 'Interior Architecture',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/hffotpjq/03222_cp_hc_apr26_n322904.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 3,
    title: 'Masterplans',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/p1zm1p0l/03654_cp_vsb_jun26_n322761.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 4,
    title: 'Virtual Spaces',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/awub3yk2/01_zha_the-cascades_tirana_render-by-nightnurse.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 5,
    title: 'Product Design',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/kg0khmsb/03170_cp_hc_jun26_n323119.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 6,
    title: 'Exhibition Design',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/hffotpjq/03222_cp_hc_apr26_n322904.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 7,
    title: 'Research',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/p1zm1p0l/03654_cp_vsb_jun26_n322761.jpg?w=750&g=0.5x0.5&fm=webp',
  },
  {
    id: 8,
    title: 'Computation',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/awub3yk2/01_zha_the-cascades_tirana_render-by-nightnurse.jpg?w=750&g=0.5x0.5&fm=webp',
  }
];

export default function ExpertiseSection() {
  const sectionRef = useRef(null);
  const headingSideRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      gsap.to(headingSideRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.to([titleRef.current, descRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      const items = gsap.utils.toArray('.grid-item');
      gsap.fromTo(items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="box module pt-24 pb-24 md:pt-16 md:pb-32 bg-black text-white flex flex-col w-full"
      style={{ opacity: 0 }}
    >
      {/* Header Section */}
      <div
        ref={headingSideRef}
        className="flex flex-col md:flex-row w-full px-6 md:px-12 mb-16 xl:mb-20"
        style={{ opacity: 0 }}
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <p className="text font-primary text-sm md:text-base font-medium tracking-wide text-white">Expertise</p>
        </div>
        <div className="w-full md:w-2/3 xl:w-3/4 flex flex-col items-start text-left">
          <h1
            ref={titleRef}
            className="text font-primary text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            Explore our wide range of expertise
          </h1>
          <p
            ref={descRef}
            className="text font-primary text-lg md:text-2xl text-gray-400 leading-snug font-normal max-w-5xl"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            All scales, all sectors, all budgets. All around the world, and into the virtual world. From small product collaborations to grand masterplans. Whatever the iteration, ABH’s core commitment never wavers: we are designing a better world.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full px-6 md:px-12">
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/20"
        >
          {expertises.map((item, index) => (
            <div 
              key={item.id} 
              className="grid-item flex flex-col group cursor-pointer border-r border-b border-white/20 overflow-hidden bg-black"
            >
              {/* Image Container */}
              <div className="w-full aspect-[16/9] overflow-hidden relative">
                <img
                  alt={item.title}
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>

              {/* Text / Arrow Container */}
              <div className="flex flex-row justify-between items-center p-6 bg-black">
                <h3 className="text-white font-primary text-lg md:text-xl font-normal group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-white group-hover:translate-x-1 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
