import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    id: 1,
    title: 'The new National Bank of the Republic of Kazakhstan headquarters now fully operational',
    date: '30/6/2026',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/kg0khmsb/03170_cp_hc_jun26_n323119.jpg?w=750&g=0.5x0.5&fm=webp',
    credit: 'Photograph by Hufton + Crow',
  },
  {
    id: 2,
    title: 'New Terminal 3B (T3B) at Chongqing Jiangbei International Airport photography by Hufton+Crow',
    date: '23/6/2026',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/hffotpjq/03222_cp_hc_apr26_n322904.jpg?w=750&g=0.5x0.5&fm=webp',
    credit: 'Photograph by Hufton + Crow',
  },
  {
    id: 3,
    title: 'Songshan Lake Exhibition and Performance Centre hosts inaugural programme of events',
    date: '16/6/2026',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/p1zm1p0l/03654_cp_vsb_jun26_n322761.jpg?w=750&g=0.5x0.5&fm=webp',
    credit: 'Photograph by Virgile Simon Bertrand',
  },
  {
    id: 4,
    title: 'ABH announces the Nest and Cascades',
    date: '4/6/2026',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/awub3yk2/01_zha_the-cascades_tirana_render-by-nightnurse.jpg?w=750&g=0.5x0.5&fm=webp',
    credit: '',
  }
];

export default function NewsCarousel({
  items = newsItems,
  title = "Latest news from ABH",
  description = "With 36 projects under construction around the world and 22 more in design development, our insatiable appetite for research, and myriad collaborations both physical and virtual, there is always something exciting happening at ABH. See the latest.",
  sectionName = "News",
  tagLabel = "News"
}) {
  const sectionRef = useRef(null);
  const headingSideRef = useRef(null);
  const carouselRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const slides = carouselRef.current.querySelectorAll('.carousel-item');
      if (slides[index]) {
        const slide = slides[index];
        const container = carouselRef.current;
        // Calculate the exact left scroll position to perfectly center the slide in the container
        const scrollLeft = slide.offsetLeft - container.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        setCurrentIndex(index);
      }
    }
  };

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the whole section wrapper
      gsap.to(sectionRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      // Slide in the side heading
      gsap.to(headingSideRef.current, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Stagger text in side heading
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

      // Fade in the carousel track
      gsap.to(carouselRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Reveal slides (width expanding from 0 in ABH style, though here we'll animate their opacity/x)
      const slides = gsap.utils.toArray('.carousel-item');
      gsap.fromTo(slides,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
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
      className="box module pt-24 pb-24 md:pt-10 md:pb-32 [&_.color-from-bg]:text-white news flex flex-col xl:flex-col overflow-hidden bg-black text-white"
      style={{ opacity: 0 }}
    >

      {/* Header Section */}
      <div
        ref={headingSideRef}
        className="flex flex-col md:flex-row w-full px-6 md:px-12 mb-12 xl:mb-10"
        style={{ opacity: 0 }}
      >
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <p className="text font-primary text-lg font-medium tracking-wide text-white">{sectionName}</p>
        </div>
        <div className="w-full md:w-2/3 xl:w-3/4 flex flex-col items-start text-left">
          <h1
            ref={titleRef}
            className="text font-primary text-4xl md:text-5xl font-normal tracking-tight mb-2"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {title}
          </h1>
          <p
            ref={descRef}
            className="text font-primary text-md md:text-2xl text-gray-500 leading-snug font-normal max-w-5xl"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full">
        {/* Navigation Arrows */}
        <div className={`hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 z-20 ${currentIndex === 0 ? 'opacity-50 pointer-events-none' : 'pointer-events-auto'}`}>
          <div
            onClick={prevSlide}
            className="w-24 h-24 rounded-full border border-white/40 bg-black/5 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        <div className={`hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 z-20 ${currentIndex === items.length - 1 ? 'opacity-50 pointer-events-none' : 'pointer-events-auto'}`}>
          <div
            onClick={nextSlide}
            className="w-24 h-24 rounded-full border border-white/40 bg-black/5 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex flex-row items-start w-full overflow-x-auto md:overflow-hidden snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-row items-start gap-6 pb-8 px-[7.5vw] md:px-[5vw]" style={{ width: 'max-content' }}>

            {items.map((item, index) => (
              <div key={item.id} className="carousel-item w-[85vw] md:w-[90vw] shrink-0 snap-center" style={{ transform: 'translateX(0)' }}>
                <div className="w-full h-[60vh] md:h-[700px] flex flex-col relative group cursor-pointer overflow-hidden bg-black">

                  {/* Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      alt={item.title}
                      src={item.img}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
                  </div>

                  {/* Overlay Content Block */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col z-20 shrink-0 pointer-events-auto group-hover:bg-white transition-colors duration-500 rounded-lg">

                    <div className="flex flex-row w-full justify-between items-center mb-6 text-sm font-medium relative">
                      <div className="bg-white text-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold group-hover:bg-black group-hover:text-white transition-colors duration-500">
                        {tagLabel}
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 text-white/60 group-hover:text-gray-400 transition-colors duration-500">
                        <span className="text-white group-hover:text-black transition-colors duration-500">0{index + 1}</span> / {items.length < 10 ? `0${items.length}` : items.length}
                      </div>
                      <div className="flex gap-4 text-white/60 group-hover:text-gray-500 transition-colors duration-500">
                        <span>{tagLabel}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6">
                      <h1 className="text-white group-hover:text-black font-primary text-3xl md:text-5xl font-normal tracking-tight max-w-4xl leading-tight transition-colors duration-500">
                        {item.title}
                      </h1>

                      {/* Read More Button - appears on hover */}
                      <button className="opacity-0 group-hover:opacity-100 bg-black text-white text-xs font-medium tracking-widest px-6 py-4 uppercase flex-shrink-0 hover:bg-gray-800 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        Read More &rarr;
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}
