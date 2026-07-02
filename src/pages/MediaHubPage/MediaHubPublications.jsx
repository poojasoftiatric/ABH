import React from 'react';

const pubItems = [
  {
    id: 1,
    title: 'ABH: Complete Works 1979 - Today (2020 Edition)',
    img: 'https://picsum.photos/seed/zhac-pub-1/1000/1000',
    tags: ['PUBLICATION'],
  },
  {
    id: 2,
    title: 'ABH: LF One',
    img: 'https://picsum.photos/seed/zhac-pub-2/800/800',
    tags: ['PUBLICATION'],
  },
  {
    id: 3,
    title: 'The Complete ABH: Expanded and Updated',
    img: 'https://picsum.photos/seed/zhac-pub-3/800/800',
    tags: ['PUBLICATION'],
  },
  {
    id: 4,
    title: 'ABH 1950-2016: The Explosion Reforming Space',
    img: 'https://picsum.photos/seed/zhac-pub-4/800/800',
    tags: ['PUBLICATION'],
  },
  {
    id: 5,
    title: 'The Antwerp Port House',
    img: 'https://picsum.photos/seed/zhac-pub-5/800/800',
    tags: ['PUBLICATION'],
  },
  {
    id: 6,
    title: 'ABH: BMW Central Building',
    img: 'https://picsum.photos/seed/zhac-pub-6/800/800',
    tags: ['PUBLICATION'],
  },
  {
    id: 7,
    title: 'ABH: Car Park and Terminus Strasbourg',
    img: 'https://picsum.photos/seed/zhac-pub-7/1000/1000',
    tags: ['PUBLICATION'],
  }
];

export default function MediaHubPublications() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-10">
      
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-16 md:mb-24">
        <div className="w-full md:w-1/3">
          <p className="font-primary text-xs uppercase tracking-widest text-gray-400">Publications</p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl leading-tight font-normal mb-4">
            Discover our publications
          </h2>
          <p className="font-primary text-sm md:text-base text-gray-400 leading-relaxed">
            Explore publications about and by ABH, from exhibition catalogues and monographs to research publications, project-specific books, and architectural theory.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col w-full mb-12 border-b border-[#222]">
        <div className="flex flex-wrap gap-4 md:gap-12 pb-6">
          {['COUNTRY', 'PUBLICATION TYPES', 'YEAR'].map(filter => (
            <div key={filter} className="w-full md:w-56 border border-[#444] p-2 font-bold text-gray-300">
              <div className="flex justify-between items-center cursor-pointer text-[14px] uppercase font-primary tracking-widest text-gray-300 hover:text-white transition-colors">
                <span>{filter}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {pubItems.map((item, index) => {
          // Identify the tall items: Index 0 (1st item), and Index 6 (7th item)
          const isTall = index === 0 || index === 6;

          return (
            <div key={item.id} className={`group cursor-pointer border border-[#222] ${isTall ? 'col-span-1 lg:col-span-2 lg:row-span-2' : 'col-span-1'}`}>
              <div className={`w-full ${isTall ? 'h-full min-h-[400px]' : 'aspect-[4/3] lg:aspect-auto lg:h-[300px]'} relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center p-8`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
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
