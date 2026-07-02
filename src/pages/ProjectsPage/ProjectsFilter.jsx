import React, { useState } from 'react';

export default function ProjectsFilter() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdowns = [
    { label: 'EXPERTISE' },
    { label: 'TYPOLOGIES' },
    { label: 'CONSTRUCTION STATUS' },
    { label: 'COUNTRY' },
    { label: 'REGION' }
  ];

  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-8 font-primary text-[10px] md:text-[11px] tracking-widest uppercase font-medium">
      
      {/* Mobile Filter Toggle */}
      <div 
        className="md:hidden border-t border-b border-[#222] py-4 mb-4 flex justify-between items-center cursor-pointer hover:text-gray-300 transition-colors" 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <span className="font-bold text-[12px]">FILTER</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transform transition-transform duration-300 ${isMobileOpen ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Filter Content (collapsible on mobile) */}
      <div className={`flex flex-col gap-6 md:block overflow-hidden transition-all duration-500 ease-in-out ${isMobileOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`}>
        
        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-4">
          {dropdowns.map((filter, index) => (
            <div 
              key={index} 
              className={`border border-white/20 p-3 rounded-sm flex justify-between items-center cursor-pointer hover:border-white/60 transition-colors ${index === 4 ? 'col-span-1 md:col-start-1 lg:col-start-5' : ''}`}
            >
              <span className="font-bold">{filter.label}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#222] md:border-none md:pt-0 md:mt-6 md:justify-start md:gap-6">
          <button className="text-gray-400 hover:text-white transition-colors cursor-pointer pb-1 border-b border-gray-400 hover:border-white">
            CLEAR ALL
          </button>
          <span className="text-white font-bold"><span className="text-white">182</span> <span className="text-[#6495ED] font-normal">PROJECTS</span></span>
        </div>
        
        {/* Mobile Bottom Border */}
        <div className="md:hidden border-b border-[#222] mt-4"></div>
      </div>

    </div>
  );
}
