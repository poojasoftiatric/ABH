import React from 'react';

export default function ContactsSection() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-14 py-16 md:py-20 flex flex-col md:flex-row border-t border-[#222]">
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="text-[16px] font-normal text-white">Contacts</h3>
      </div>
      
      <div className="md:w-[65vw] md:pr-2 flex flex-col gap-8">
        {/* Top Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Press & PR */}
          <div className="flex flex-col">
            <h2 className="text-[32px] tracking-tight font-normal">Press & PR</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              If you would like to discuss a press enquiry or find out more about our company, please contact the press department.
            </p>
            <a href="mailto:press@abh.com" className="text-[15px] text-white hover:text-gray-300 transition-colors">
              press@abh.com
            </a>
          </div>

          {/* New Business */}
          <div className="flex flex-col">
            <h2 className="text-[32px] tracking-tight font-normal">New Business</h2>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              If you would like to discuss a new project, please contact the new business team.
            </p>
            <a href="mailto:projects@abh.com" className="text-[15px] text-white hover:text-gray-300 transition-colors">
              projects@abh.com
            </a>
          </div>
        </div>

        <hr className="border-[#222] my-2" />

        {/* Bottom Row */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="text-[32px] tracking-tight font-normal">Exhibitions</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            If you would like to discuss a potential exhibition or loan with us, please contact the exhibition department.
          </p>
          <a href="mailto:exhibitions@abh.com" className="text-[15px] text-white hover:text-gray-300 transition-colors">
            exhibitions@abh.com
          </a>
        </div>
        
      </div>
    </div>
  );
}
