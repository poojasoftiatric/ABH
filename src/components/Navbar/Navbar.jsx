import React, { useState } from 'react';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 flex justify-between items-center ${
        isHovered 
          ? 'bg-white text-black shadow-md' 
          : 'bg-white/10 backdrop-blur-md text-white'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <svg 
          width="80" 
          height="40" 
          viewBox="0 0 160 80" 
          fill={isHovered ? "black" : "white"}
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300"
        >
          {/* Simple ABH replacement for ZHA logo based on what we had earlier, just using text since we don't have the real ABH vector paths */}
          <text x="0" y="55" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" letterSpacing="-2">ABH</text>
        </svg>
      </div>

      {/* Links */}
      <div className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase">
        <a href="#" className="hover:opacity-70 transition-opacity">Projects</a>
        <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-1">Expertise <span className="text-[10px]">▼</span></a>
        <a href="#" className="hover:opacity-70 transition-opacity">People</a>
        <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-1">About Us <span className="text-[10px]">▼</span></a>
        <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-1">Research <span className="text-[10px]">▼</span></a>
        <a href="#" className="hover:opacity-70 transition-opacity">Sustainability</a>
        <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-1">Media Hub <span className="text-[10px]">▼</span></a>
        <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        
        <div className="w-px h-4 bg-current opacity-30 mx-2"></div>
        
        <button className="hover:opacity-70 transition-opacity p-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 p-1 group">
        <div className="w-6 h-[2px] bg-current transition-all group-hover:w-8"></div>
        <div className="w-6 h-[2px] bg-current transition-all group-hover:w-8"></div>
      </button>
    </nav>
  );
}
