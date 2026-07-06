import React from 'react';

export default function ContentSection({ 
  title, 
  dividerColor = '#4a6b63',
  children 
}) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="hidden md:block md:w-1/3 relative">
        {dividerColor && (
          <div className="w-16 h-px mt-3" style={{ backgroundColor: dividerColor }}></div>
        )}
      </div>
      <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-6 font-primary text-[15px] leading-relaxed text-[#a0a0a0]">
        {title && (
          <h2 className="text-white text-3xl md:text-4xl mb-2 tracking-wide font-normal">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
