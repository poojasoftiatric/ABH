import React from 'react';

const newsItems = [
  {
    id: 1,
    title: 'The new National Bank of the Republic of Kazakhstan headquarters now fully operational',
    img: 'https://picsum.photos/seed/zhac-1/800/1000',
    tags: ['NEWS'],
  },
  {
    id: 2,
    title: 'New Terminal 3B (T3B) at Chongqing Jiangbei...',
    img: 'https://picsum.photos/seed/zhac-2/800/600',
    tags: ['NEWS'],
  },
  {
    id: 3,
    title: 'Songshan Lake Exhibition and Performance Centre hosts...',
    img: 'https://picsum.photos/seed/zhac-3/800/600',
    tags: ['NEWS'],
  },
  {
    id: 4,
    title: 'ABH announces the Nest and Cascades',
    img: 'https://picsum.photos/seed/zhac-4/800/600',
    tags: ['NEWS'],
  },
  {
    id: 5,
    title: 'Aeris Collection by ABH for Citco',
    img: 'https://picsum.photos/seed/zhac-5/800/600',
    tags: ['NEWS', 'EVENTS & EXHIBITIONS'],
  },
  {
    id: 6,
    title: 'Two new stadiums by ABH nominated for Stadium of the...',
    img: 'https://picsum.photos/seed/zhac-6/800/600',
    tags: ['NEWS', 'AWARDS'],
  },
  {
    id: 7,
    title: 'ABH & CY Lee to design NICFC in Taipei',
    img: 'https://picsum.photos/seed/zhac-7/800/600',
    tags: ['NEWS'],
  },
  {
    id: 8,
    title: 'Bishoftu International Airport construction begins',
    img: 'https://picsum.photos/seed/zhac-8/800/600',
    tags: ['NEWS'],
  },
  {
    id: 9,
    title: "'Architecture of Possibility: ABH'",
    img: 'https://picsum.photos/seed/zhac-9/800/600',
    tags: ['NEWS'],
  },
  {
    id: 10,
    title: 'ABH to design Qiantang Bay Cultural District',
    img: 'https://picsum.photos/seed/zhac-10/1200/800',
    tags: ['NEWS'],
  }
];

export default function MediaHubNews() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-10">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-16 md:mb-14">
        <div className="w-full md:w-1/3">
          <p className="font-primary text-xs uppercase tracking-widest text-gray-400">News</p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl leading-tight font-normal mb-8">
            The latest news from ABH
          </h2>
          <p className="font-primary text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
            With projects under construction and in design phase around the world, our insatiable appetite for research, and myriad collaborations both physical and virtual, there is always something exciting happening at ABH.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex w-full mb-12">
        <div className="w-full md:w-64 border border-[#222] p-2 font-bold text-gray-300">
          <div className="flex justify-between items-center cursor-pointer text-[14px] uppercase font-primary tracking-widest text-gray-300 hover:text-white transition-colors">
            <span>CATEGORY</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Left Tall Item (Spans 2 rows, 2 cols on lg) */}
        <div className="col-span-1 lg:col-span-2 lg:row-span-2 group cursor-pointer border border-[#222]">
          <div className="w-full h-full min-h-[400px] relative overflow-hidden bg-[#0a0a0a]">
            <img 
              src={newsItems[0].img} 
              alt={newsItems[0].title} 
              className="w-full h-[60%] lg:h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end z-10">
              <div className="flex justify-between items-start">
                <h3 className="font-primary text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-white max-w-md">{newsItems[0].title}</h3>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-500 text-2xl">&rarr;</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-12">
                {newsItems[0].tags.map(tag => (
                  <span key={tag} className="border border-[#444] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-300">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The rest of the items */}
        {newsItems.slice(1).map((item, index) => {
          // Identify if it's the large wide item at the end (index 8 is the 9th item after slice)
          const isWide = index === 8; 

          return (
            <div key={item.id} className={`group cursor-pointer border border-[#222] ${isWide ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1'}`}>
              <div className={`w-full ${isWide ? 'aspect-[16/9] lg:aspect-[2/1]' : 'aspect-[4/3] lg:aspect-auto lg:h-[350px]'} relative overflow-hidden bg-[#0a0a0a]`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                <div className={`absolute bottom-0 left-0 ${isWide ? 'p-6 md:p-8' : 'p-4 md:p-6'} w-full flex flex-col justify-end z-10`}>
                  <div className="flex justify-between items-start">
                    <h3 className={`font-primary font-normal leading-tight text-white pr-4 ${isWide ? 'text-xl md:text-2xl' : 'text-sm md:text-base'}`}>{item.title}</h3>
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-500 text-lg md:text-xl">&rarr;</span>
                  </div>
                  <div className={`flex flex-wrap gap-2 ${isWide ? 'mt-8' : 'mt-6'}`}>
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
    </div>
  );
}
