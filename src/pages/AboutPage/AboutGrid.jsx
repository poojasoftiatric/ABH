import React from 'react';

export default function AboutGrid() {
  return (
    <div className="w-full bg-black text-white pb-24">
      
      {/* 1. Culture / We are ZHA */}
      <div className="flex flex-col lg:flex-row w-full min-h-[80vh]">
        {/* Left Col */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col items-center justify-start border-b lg:border-b-0 lg:border-r border-[#222]">
          {/* Small Culture Image */}
          <div className="w-[80%] max-w-sm aspect-video mt-12 md:mt-24 rounded-sm overflow-hidden">
            <img 
              src="https://picsum.photos/seed/zha-culture/800/450?grayscale" 
              alt="Culture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
        
        {/* Right Col */}
        <div className="w-full lg:w-1/2 relative min-h-[60vh] border-b border-[#222] lg:border-b-0">
          <img 
            src="https://picsum.photos/seed/zha-weare/1200/800?grayscale" 
            alt="Office Building" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Text Overlay Card */}
          <div className="absolute bottom-12 left-6 md:left-12 lg:-left-12 z-10 w-[85%] md:w-[70%] bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-sm border border-[#222]">
            <h2 className="font-primary text-3xl md:text-5xl mb-4 font-normal">We are ABH</h2>
            <p className="text-gray-300 font-primary text-sm md:text-base leading-relaxed mb-8">
              We are architects, designers, innovators. We're creators, strategists, connectors. We're a diverse community of 500 people from 55 nations working across 5 global offices. We are ABH.
            </p>
            <a href="/culture" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
              CULTURE <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-30 my-8"></div>

      {/* 2. Our Story */}
      <div className="flex flex-col lg:flex-row w-full min-h-[80vh] border-y border-[#222] bg-[#111]">
        {/* Left Col (Text) */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center relative">
          <div className="absolute top-6 left-6 md:top-12 md:left-12">
            <p className="font-primary text-[10px] tracking-widest uppercase text-gray-400">Our Story</p>
          </div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl mb-6 font-normal">Our Story</h2>
          <p className="text-gray-300 font-primary text-sm md:text-lg leading-relaxed mb-10 max-w-md">
            ABH evolved from a one-room studio to a global practice, wholly owned by our 500 employees. Approaching the milestone of 50 years pioneering radical architectural solutions, we reflect proudly on our history and look ahead to creating the cities of tomorrow.
          </p>
          <div>
            <a href="/our-story" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
              OUR STORY <span>&rarr;</span>
            </a>
          </div>
        </div>
        
        {/* Right Col (Image) */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 flex justify-center items-center">
          <div className="w-full h-full max-h-[600px] rounded-sm overflow-hidden">
            <img 
              src="https://picsum.photos/seed/zha-story/1200/800?grayscale" 
              alt="Golden Architecture" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>

      {/* 3. The Legacy of Dame Zaha */}
      <div className="flex flex-col lg:flex-row w-full min-h-[100vh]">
        {/* Left Col (Portrait) */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#222]">
          <div className="w-[70%] max-w-sm aspect-[3/4] rounded-sm overflow-hidden mt-12">
            <img 
              src="https://picsum.photos/seed/zha-legacy-portrait/800/1200?grayscale" 
              alt="Dame Zaha" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
        
        {/* Right Col (Text overlay on Image) */}
        <div className="w-full lg:w-1/2 relative min-h-[60vh]">
          <img 
            src="https://picsum.photos/seed/zha-legacy-bg/1200/800?grayscale" 
            alt="Abstract Architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 left-6 md:left-12 lg:-left-12 z-10 w-[85%] md:w-[70%] bg-black p-8 md:p-12 rounded-sm border border-[#222]">
            <h2 className="font-primary text-3xl md:text-5xl mb-6 font-normal">The Legacy of Dame Zaha</h2>
            <p className="text-gray-300 font-primary text-sm md:text-base leading-relaxed mb-8">
              The architect Zaha Hadid transformed notions of form and space, expanding the realm of possibilities for architecture. Her work gave a whole new generation permission to experiment.
            </p>
            <a href="/legacy" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
              LEARN MORE <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-30 my-8"></div>

      {/* 4. Awards */}
      <div className="flex flex-col lg:flex-row w-full min-h-[60vh] border-y border-[#222] bg-[#111]">
        {/* Left Col (Image) */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 flex justify-center items-center">
          <div className="w-full h-full max-h-[500px] rounded-sm overflow-hidden">
            <img 
              src="https://picsum.photos/seed/zha-awards/1200/800?grayscale" 
              alt="Awards Scale" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
        
        {/* Right Col (Text) */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center relative">
          <div className="absolute top-6 left-6 md:top-12 md:left-12">
            <p className="font-primary text-[10px] tracking-widest uppercase text-gray-400">Awards</p>
          </div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl mb-6 font-normal mt-8 md:mt-0">Awards</h2>
          <p className="text-gray-300 font-primary text-sm md:text-lg leading-relaxed mb-10 max-w-md">
            ABH's ground-breaking architecture and design has been recognised by leading professionals and academic institutions worldwide. We have received more than 300 accolades, recognising the quality of our work.
          </p>
          <div>
            <a href="/awards" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
              READ MORE <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* 5. Careers */}
      <div className="relative w-full min-h-[80vh] border-b border-[#222]">
        <img 
          src="https://picsum.photos/seed/zha-careers-bg/2000/1000?grayscale" 
          alt="Careers Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
          <p className="font-primary text-[10px] tracking-widest uppercase text-gray-400">Careers</p>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row w-full h-full min-h-[80vh]">
          {/* Left image inset */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-end justify-center">
             <div className="w-[80%] max-w-md aspect-video rounded-sm overflow-hidden mb-12">
               <img 
                 src="https://picsum.photos/seed/zha-careers/800/450?grayscale" 
                 alt="Model Building" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
               />
             </div>
          </div>
          {/* Right Text */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl mb-6 font-normal">Careers</h2>
            <p className="text-gray-200 font-primary text-sm md:text-lg leading-relaxed mb-10 max-w-md">
              Our determination to continue the ongoing evolution of new discoveries is absolute, working relentlessly to progress new ideas and innovations developed by our studio over the past 50 years. As an employee-owned business, we reinvest all profits back into our people and our company.
            </p>
            <div>
              <a href="/careers" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
                CAREERS <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
