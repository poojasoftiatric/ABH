import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    id: 1, 
    title: 'BEEAH Headquarters', 
    category: 'Architecture',
    location: 'Sharjah, UAE', 
    img: 'https://images.unsplash.com/photo-1541888087814-7264a7808605?q=80&w=2938&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-2 aspect-[4/3]'
  },
  { 
    id: 2, 
    title: 'Morpheus Hotel', 
    category: 'Architecture',
    location: 'Macau, China', 
    img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2940&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  { 
    id: 3, 
    title: 'Leeza SOHO', 
    category: 'Architecture',
    location: 'Beijing, China', 
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-2 aspect-[3/4]'
  },
  { 
    id: 4, 
    title: 'Heydar Aliyev Center', 
    category: 'Cultural',
    location: 'Baku, Azerbaijan', 
    img: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=2940&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-1 aspect-[21/9]'
  }
];

export default function FeaturedSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Archive
          </h2>
          <button className="mt-6 md:mt-0 text-sm tracking-widest uppercase border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
            View All Projects
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={el => cardRefs.current[index] = el}
              className={`group cursor-pointer flex flex-col ${project.className}`}
            >
              <div className="relative overflow-hidden w-full h-full bg-gray-100 mb-6">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{project.location}</p>
                </div>
                <span className="text-xs tracking-widest uppercase text-gray-400">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
