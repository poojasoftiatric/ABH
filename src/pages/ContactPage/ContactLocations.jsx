import React from 'react';

export default function ContactLocations() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-14 py-16 md:py-20 flex flex-col md:flex-row border-t border-[#222]">
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="text-[16px] font-normal text-white">Our locations</h3>
      </div>
      
      <div className="md:w-[65vw] md:pr-2 flex flex-col gap-12">
        {/* London Studio */}
        <div className="flex flex-col gap-6">
          <img 
            src="https://media-prod.zha.com/zhweb-prod-media/media/khdl4r5v/17052024-zha-studio126-lukehayes-crop.jpg?w=1080&g=0.5012539184952978x0.31457330098257547&fm=webp" 
            alt="London Studio" 
            className="w-full h-[350px] object-cover"
          />
          <div>
            <h2 className="text-[44px] md:text-5xl font-normal mb-3 tracking-tight">London Studio</h2>
            <p className="text-gray-400 text-[15px] mb-8 leading-relaxed max-w-lg">
              101 Goswell Road, London EC1V 7EZ, United Kingdom
            </p>
            <div className="flex flex-col gap-1 text-[15px] text-white">
              <p>Phone: +44 20 7253 5147</p>
              <a href="#" className="hover:text-gray-300 transition-colors">Open in Google Maps</a>
            </div>
          </div>
        </div>

        <hr className="border-[#222] my-4" />

        {/* Other Studios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Beijing Studio */}
          <div className="flex flex-col gap-6">
            <img 
              src="https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp" 
              alt="Beijing Studio" 
              className="w-full h-[220px] object-cover"
            />
            <div>
              <h2 className="text-[32px] tracking-tight font-normal mb-3">Beijing Studio</h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                Room 51221, 12F, Building D, Galaxy SOHO No.2<br/>
                NanzhuGan HuTong, Dongcheng District Beijing 100010,<br/>
                China
              </p>
              <a href="#" className="text-[15px] text-white hover:text-gray-300 transition-colors">Open in Google Maps</a>
            </div>
          </div>

          {/* Hong Kong Studio */}
          <div className="flex flex-col gap-6">
            <img 
              src="https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp" 
              alt="Hong Kong Studio" 
              className="w-full h-[220px] object-cover"
            />
            <div>
              <h2 className="text-[32px] tracking-tight font-normal mb-3">Hong Kong Studio</h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                Unit 2503, Tai Tung Building, No. 8 Fleming Road,<br/>
                Wanchai, Hong Kong
              </p>
              <a href="#" className="text-[15px] text-white hover:text-gray-300 transition-colors">Open in Google Maps</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
