import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertises = [
  {
    id: 1,
    title: 'Architecture',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/2ibjpg5d/img-17.jpg?w=1920&g=0.5x0.5&fm=webp',
    photographer: 'Hufton and Crow',
  },
  {
    id: 2,
    title: 'Interior Architecture',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5526461578699878x0.2794127047438531&fm=webp',
    photographer: 'Photograph by Virgile Simon Bertrand',
    subtitle: 'Grand Theatre Auditorium',
  },
  {
    id: 3,
    title: 'Masterplans',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/3mqdexb1/04011_cr_n307772.jpg?w=1920&g=0.44862155388471175x0.47916507613719966&fm=webp',
    photographer: 'Render by ABH',
  },
  {
    id: 4,
    title: 'Virtual Spaces',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/ntife1fu/metrotopia_zha_leeza.jpg?w=1920&g=0.5x0.5&fm=webp',
    photographer: '',
  },
];

export default function ExpertiseSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Fade in heading
      gsap.to(headingRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Animate cards staggering in
      gsap.fromTo(cardsRef.current, 
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="box module pt-24 pb-24 md:pt-32 md:pb-32 [&_.color-from-bg]:text-white listing-grid expertise flex flex-col xl:flex-row bg-black text-white" 
      style={{ opacity: 0 }}
    >
      
      {/* Side Heading */}
      <div 
        ref={headingRef}
        className="box flex flex-initial shrink-0 heading-side w-full xl:w-1/3 px-6 md:px-12 mb-12 xl:mb-0"
        style={{ opacity: 0 }}
      >
        <div className="stack flex flex-col items-start text-left content-block content-block-headingSide max-w-lg sticky top-32">
          <div className="stack flex flex-row items-start pre-content mb-6">
            <p className="text font-primary text-sm uppercase tracking-widest text-gray-500 tag">Expertise</p>
          </div>
          <h1 className="text font-primary text-4xl md:text-5xl font-medium tracking-tight heading-title mb-6">
            <span>Explore our wide range of expertise </span>
          </h1>
          <p className="text font-primary text-base md:text-lg text-gray-400 description leading-relaxed">
            All scales, all sectors, all budgets. All around the world, and into the virtual world. From small product collaborations to grand masterplans. Whatever the iteration, ABH’s core commitment never wavers: we are designing a better world. 
          </p>
        </div>
      </div>

      {/* Grid wrapper */}
      <div className="stack flex flex-col items-start text-left listing-grid-wrapper w-full xl:w-2/3 px-6 md:pr-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full listing-grid-content">
          
          {expertises.map((item, index) => (
            <div 
              key={item.id} 
              ref={el => cardsRef.current[index] = el}
              className="box flex flex-initial shrink-0 w-full"
            >
              <section className="box module pt-0 pb-0 [&_.color-from-bg]:text-black card-generic-wrapper w-full group cursor-pointer">
                <div className="grid card card-generic border border-gray-800 h-[60vh] md:h-[500px] flex flex-col relative overflow-hidden">
                  
                  <div className="box flex flex-initial shrink-0 media-holder card-media-holder absolute inset-0 bg-gray-900 z-0">
                    <img 
                      alt={item.title} 
                      src={item.img} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {item.photographer && (
                      <p className="absolute top-4 right-4 text-[10px] text-white/70 uppercase tracking-widest caption photographer credit z-10 text-right">
                        {item.photographer}
                      </p>
                    )}
                    {item.subtitle && (
                      <p className="absolute top-8 right-4 text-[10px] text-white/70 uppercase tracking-widest caption z-10 text-right">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="stack flex flex-col items-start text-left content-block content-block-generic card-content z-10 mt-auto p-8 text-white w-full">
                    <h4 className="text font-primary text-2xl md:text-3xl font-medium tracking-tight heading-title mb-6 w-full">
                      <span className="clamp">{item.title}</span>
                    </h4>
                    <div className="stack flex flex-row items-start button-group row w-full group-hover:underline underline-offset-4 decoration-white/50">
                      <div className="stack flex flex-row items-center uppercase tracking-widest text-sm font-medium">
                        <span>View More</span>
                        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </section>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
