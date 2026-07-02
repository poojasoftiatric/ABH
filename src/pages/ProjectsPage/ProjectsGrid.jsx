import React from 'react';

const projects = [
  {
    id: 1,
    title: 'King Abdullah Financial District (KAFD) Metro Station',
    desc: 'KAFD Metro Station will serve as a key interchange on the new network for the Blue Line (Line 1) with the terminus of the Yellow Line to the airport (Line 4) and the Purple Line (Line 6) as well as a skybridge connecting to the local KAFD monorail.',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/p1zm1p0l/03654_cp_vsb_jun26_n322761.jpg?w=1200&g=0.5x0.5&fm=webp',
    tags: ['TRANSPORT + INFRASTRUCTURE'],
    size: 'large'
  },
  {
    id: 2,
    title: 'ME Dubai Hotel',
    desc: 'Home to the new ME Dubai hotel, the Opus is located in the Burj Khalifa district adjacent to Downtown Dubai...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/hffotpjq/03222_cp_hc_apr26_n322904.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['HOSPITALITY'],
    size: 'small'
  },
  {
    id: 3,
    title: 'Opus',
    desc: 'Home to the new ME Dubai hotel, the Opus is located in the Burj Khalifa district adjacent to Downtown Dubai...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/awub3yk2/01_zha_the-cascades_tirana_render-by-nightnurse.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['MIXED USE', 'OFFICES'],
    size: 'small'
  },
  {
    id: 4,
    title: 'Striatus 3D Printed Concrete Bridge',
    desc: 'Striatus is an arched masonry footbridge composed of 3D-printed concrete blocks assembled without...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/kg0khmsb/03170_cp_hc_jun26_n323119.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['INSTALLATIONS + PAVILIONS'],
    size: 'small'
  },
  {
    id: 5,
    title: 'Mobile Art Chanel Contemporary Art Container',
    desc: 'A unique sculptural pavilion created as an exhibition/event space for Chanel – inspired by the brand’s distinctive...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/xfnbc5ft/02455_cp_vsb_dec23_n302923.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['INSTALLATIONS + PAVILIONS'],
    size: 'small'
  },
  {
    id: 6,
    title: 'Serpentine North Gallery',
    desc: 'The Serpentine North Gallery consists of two distinct parts, namely the conversion of a classical 19th centur...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['CULTURE', 'HERITAGE + REGENERATION'],
    size: 'small'
  },
  {
    id: 7,
    title: 'Neil Barrett Flagship Store',
    desc: 'Our concept echoes the brand’s minimalism and use of fixed points, folds, pleats and cut outs. Space in t...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['RETAIL'],
    size: 'small'
  },
  {
    id: 10,
    title: 'KnitCandela',
    desc: 'KnitCandela is a thin, sinuous concrete shell built on ultra-lightweight knitted formwork that was carried to Mexico from Switzerland in a suitcase.',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/khdl4r5v/17052024-zha-studio126-lukehayes-crop.jpg?w=1200&g=0.5x0.5&fm=webp',
    tags: ['INSTALLATIONS + PAVILIONS'],
    size: 'large'
  },
  {
    id: 8,
    title: 'Dominion Office Building',
    desc: 'Located in Moscow’s Sharikopodshipnikovskaya Street, next to tram and trolleybus stops an...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['OFFICES'],
    size: 'small'
  },
  {
    id: 9,
    title: 'Beijing Daxing International Airport',
    desc: 'Beijing Daxing International Airport is a new airport in the Daxing district 46km south of the city centre (20 minutes ...',
    img: 'https://media-prod.zha.com/zhweb-prod-media/media/mvdhc2b0/zha-brand-screenshot-suggestion.jpg?w=750&g=0.5x0.5&fm=webp',
    tags: ['TRANSPORT + INFRASTRUCTURE'],
    size: 'small'
  }
];

export default function ProjectsGrid() {
  return (
    <div className="w-full bg-black text-white pb-24 border-t border-[#222]">
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col group cursor-pointer border-b border-[#222] ${
              project.size === 'large' ? 'md:col-span-2 md:row-span-2 md:border-r' : 'col-span-1 md:border-r'
            } ${project.size === 'small' && project.id === 5 ? 'md:border-r-0' : ''} ${project.size === 'small' && project.id === 9 ? 'md:border-r-0' : ''}`}
          >
            <div className={`w-full overflow-hidden ${project.size === 'large' ? 'aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/10]' : 'aspect-video'}`}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col flex-grow p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`font-normal ${project.size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} tracking-tight pr-4 group-hover:text-gray-300 transition-colors`}>
                  {project.title}
                </h3>
                <span className="text-white group-hover:translate-x-1 transition-transform shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="border border-white/20 px-3 py-1 text-[9px] md:text-[10px] tracking-widest uppercase font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
