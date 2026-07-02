import React from 'react';

export default function ResearchGrid() {
  return (
    <div className="w-full bg-black text-white pb-14">
      
      {/* 1. High Performance Geometry */}
      <div className="w-full px-4 md:px-8 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row w-full min-h-[60vh] bg-[#1a1a1a] rounded-xl overflow-hidden">
          {/* Left Col (Video) */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-center justify-end">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
              <iframe
                src="https://player.vimeo.com/video/1098307763?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
                className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="High Performance Geometry Video"
              ></iframe>
            </div>
          </div>
          
          {/* Right Col (Text) */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:pr-24 flex flex-col justify-end">
            <h2 className="font-primary text-3xl md:text-5xl lg:text-6xl mb-4 font-normal tracking-tight">High Performance Geometry</h2>
            <p className="text-gray-300 font-primary text-sm md:text-xl leading-relaxed mb-10 max-w-md">
              We develop bespoke technologies to optimise design and construction processes.
            </p>
            <div>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs md:text-sm tracking-wide font-medium rounded hover:bg-gray-200 transition-colors">
                READ MORE <span className="ml-1 font-light">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* 2. Spatial Intelligence */}
      <div className="w-full px-4 md:px-8 pb-8 md:pb-16">
        <div className="flex flex-col lg:flex-row w-full min-h-[60vh] bg-[#1a1a1a] rounded-xl overflow-hidden">
          {/* Left Col (Text) */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:pl-24 flex flex-col justify-end order-2 lg:order-1">
            <h2 className="font-primary text-3xl md:text-5xl lg:text-6xl mb-4 font-normal tracking-tight">Spatial Intelligence</h2>
            <p className="text-gray-300 font-primary text-sm md:text-xl leading-relaxed mb-10 max-w-md">
              We utilise data analytics and artificial intelligence to improve people's experience of our spaces.
            </p>
            <div>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs md:text-sm tracking-wide font-medium rounded hover:bg-gray-200 transition-colors">
                READ MORE <span className="ml-1 font-light">&rarr;</span>
              </a>
            </div>
          </div>
          
          {/* Right Col (Image) */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-center justify-start order-1 lg:order-2">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/zha-research-spatial/800/600?grayscale" 
                alt="Spatial Intelligence" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Social Simulations */}
      <div className="w-full px-6 md:px-12 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
          {/* Left Column (Image + Text) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center mt-20">
            {/* Top Image */}
            <div className="w-[60%] md:w-[50%] aspect-[4/5] rounded-xl overflow-hidden mb-12">
              <img 
                src="https://picsum.photos/seed/zha-research-social-left/800/1000" 
                alt="Social Simulations Detail" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Text Block */}
            <div className="w-full flex flex-col justify-start">
              <h2 className="font-primary text-3xl md:text-5xl lg:text-6xl mb-4 font-normal tracking-tight">Social Simulations</h2>
              <p className="text-gray-300 font-primary text-sm md:text-xl leading-relaxed mb-10 max-w-md">
                We apply behavioural simulation to create human-centred workspaces.
              </p>
              <div>
                <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs md:text-sm tracking-wide font-medium rounded hover:bg-gray-200 transition-colors">
                  READ MORE <span className="ml-1 font-light">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column (Large Image) */}
          <div className="w-full lg:w-7/12 flex justify-end items-start">
            <div className="w-full md:w-[95%] aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/zha-research-social-right/1200/900" 
                alt="Social Simulations Context" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Virtual Reality */}
      <div className="relative w-full min-h-[80vh] border-b border-[#222]">
        <img 
          src="https://picsum.photos/seed/zha-research-vr-bg/2000/1000?grayscale" 
          alt="Virtual Reality Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

        <div className="relative z-10 flex flex-col lg:flex-row w-full h-full min-h-[80vh]">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-end">
            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl mb-6 font-normal">Virtual Reality</h2>
            <p className="text-gray-200 font-primary text-sm md:text-lg leading-relaxed mb-10 max-w-sm">
              We produce virtual reality design tools to explore its aesthetic and cultural potential.
            </p>
            <div>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[10px] tracking-widest font-bold uppercase hover:bg-gray-200 transition-colors">
                READ MORE <span>&rarr;</span>
              </a>
            </div>
          </div>
          {/* Right image inset */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-end justify-center lg:justify-end">
             <div className="w-[90%] max-w-lg aspect-video rounded-sm overflow-hidden relative mb-12">
               <iframe
                 src="https://player.vimeo.com/video/1098464591?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
                 className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                 frameBorder="0"
                 allow="autoplay; fullscreen; picture-in-picture"
                 allowFullScreen
                 title="Virtual Reality Video"
               ></iframe>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}
