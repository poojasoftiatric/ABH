import React from 'react';

const eventItems = [
  {
    id: 1,
    title: 'Constructing Home: A Creative Collage & 3D-Making Workshop',
    img: 'https://picsum.photos/seed/zhac-evt-1/1000/800',
    tags: ['WORKSHOP'],
  },
  {
    id: 2,
    title: 'What Endures: From Local Knowledge to Global Futures',
    img: 'https://picsum.photos/seed/zhac-evt-2/800/400',
    tags: ['PANEL DISCUSSION'],
  },
  {
    id: 3,
    title: 'AADRL: Work in Progress Exhibition at ABH Gallery',
    img: 'https://picsum.photos/seed/zhac-evt-3/800/400',
    tags: ['EXHIBITION'],
  },
  {
    id: 4,
    title: "'Architecture of Possibility' exhibition at MOCAUP",
    img: 'https://picsum.photos/seed/zhac-evt-4/800/400',
    tags: ['EXHIBITION'],
  },
  {
    id: 5,
    title: "'How can the built environment sector authentically integrate...",
    img: 'https://picsum.photos/seed/zhac-evt-5/800/400',
    tags: ['TALK'],
  },
  {
    id: 6,
    title: "'Designing in Hybrid Realms' panel discussion",
    img: 'https://picsum.photos/seed/zhac-evt-6/800/400',
    tags: ['PANEL DISCUSSION'],
  },
  {
    id: 7,
    title: 'LFA Studio Lates 2026',
    img: 'https://picsum.photos/seed/zhac-evt-7/800/400',
    tags: ['TOUR'],
  },
  {
    id: 8,
    title: "'Function Through Form' exhibition at ABH Gallery",
    img: 'https://picsum.photos/seed/zhac-evt-8/1000/1200',
    tags: ['EXHIBITION'],
  },
  {
    id: 9,
    title: 'Inside ABH: A Guided London Office Tour',
    img: 'https://picsum.photos/seed/zhac-evt-9/800/400',
    tags: ['TOUR'],
  },
  {
    id: 10,
    title: "'Lighting and Materiality in the Workplace' panel discussion",
    img: 'https://picsum.photos/seed/zhac-evt-10/800/400',
    tags: ['PANEL DISCUSSION'],
  }
];

export default function MediaHubEvents() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-10">
      
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-16 md:mb-24">
        <div className="w-full md:w-1/3">
          <p className="font-primary text-xs uppercase tracking-widest text-gray-400">Events</p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl leading-tight font-normal mb-4">
            Explore our events
          </h2>
          <p className="font-primary text-sm md:text-base text-gray-400 leading-relaxed">
            Join our global programme of exhibitions, talks, and events, in person or online.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col w-full mb-12 border-b border-[#222]">
        <div className="flex flex-wrap gap-4 md:gap-12 pb-6 ">
          {['CATEGORY', 'LOCATION', 'YEAR', 'STATUS'].map(filter => (
            <div key={filter} className="w-full md:w-48 border border-[#444] p-2">
              <div className="flex justify-between items-center cursor-pointer text-[14px] uppercase font-primary tracking-widest text-white hover:text-gray-300 transition-colors">
                <span>{filter}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-4">
           <span className="cursor-pointer text-[10px] uppercase font-primary tracking-widest text-gray-400 hover:text-white transition-colors border-b border-gray-400 pb-1">CLEAR ALL</span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {eventItems.map((item, index) => {
          // Identify the tall items: Index 0 (1st item), and Index 7 (8th item)
          const isTall = index === 0 || index === 7;

          return (
            <div key={item.id} className={`group cursor-pointer border border-[#222] ${isTall ? 'col-span-1 lg:col-span-2 lg:row-span-2' : 'col-span-1'}`}>
              <div className={`w-full ${isTall ? 'h-full min-h-[400px]' : 'aspect-[4/3] lg:aspect-auto lg:h-[300px]'} relative overflow-hidden bg-[#0a0a0a]`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full ${isTall ? 'h-[60%] lg:h-full' : 'h-full'} object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                <div className={`absolute bottom-0 left-0 ${isTall ? 'p-6 md:p-8' : 'p-4 md:p-6'} w-full flex flex-col justify-end z-10`}>
                  <div className="flex justify-between items-start">
                    <h3 className={`font-primary font-normal leading-tight text-white pr-4 ${isTall ? 'text-xl md:text-2xl lg:text-3xl max-w-md' : 'text-sm md:text-base'}`}>{item.title}</h3>
                    <span className={`text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-500 ${isTall ? 'text-2xl' : 'text-lg md:text-xl'}`}>&rarr;</span>
                  </div>
                  <div className={`flex flex-wrap gap-2 ${isTall ? 'mt-12' : 'mt-6'}`}>
                    {item.tags.map(tag => (
                      <span key={tag} className="border border-[#444] px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-gray-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
      
      <div className="w-full flex justify-center mt-16">
        <span className="font-primary text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-gray-400 transition-colors border-b">SHOW MORE</span>
      </div>

    </div>
  );
}
