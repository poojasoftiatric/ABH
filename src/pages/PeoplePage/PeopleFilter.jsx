import React from 'react';

export default function PeopleFilter() {
  const dropdowns = [
    { label: 'TITLES' },
    { label: 'OFFICE LOCATION' },
    { label: 'TEAM' }
  ];

  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-8 flex flex-col gap-6 font-primary text-[10px] md:text-[11px] tracking-widest uppercase font-medium mt-10">
      
      {/* Search Bar */}
      <div className="w-full bg-[#111] flex items-center justify-between px-4 py-4 rounded-sm border border-[#222]">
        <input 
          type="text" 
          placeholder="PEOPLE DIRECTORY" 
          className="bg-transparent text-white outline-none w-full placeholder-gray-500 tracking-widest"
        />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-pointer hover:text-white">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
        {dropdowns.map((filter, index) => (
          <div 
            key={index} 
            className="border border-white/20 p-2 rounded-sm flex justify-between items-center cursor-pointer hover:border-white/60 transition-colors bg-black"
          >
            <span>{filter.label}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="flex justify-start items-center gap-6 mt-4">
        <span className="text-gray-500">236 PEOPLE</span>
      </div>

    </div>
  );
}
