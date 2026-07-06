import React from 'react';
import HeroImage from '../../components/common/HeroImage';

export default function ContactBanner() {
  return (
    <HeroImage 
      title="Contact Us" 
      imgSrc="https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp" 
      imgAlt="ABH Architecture"
      heightClass="h-[70vh] md:h-[90vh]"
      hideScrollIcon={true}
      titleClassName="text-5xl md:text-8xl font-normal text-white"
    />
  );
}
