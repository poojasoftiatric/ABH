import React from 'react';
import HeroImage from '../../components/common/HeroImage';

export default function MediaHubHero() {
  return (
    <HeroImage 
      title="Media Hub" 
      imgSrc="https://media-prod.zha.com/zhweb-prod-media/media/lcej4iia/01825_cp_hc_jan25_n313292.jpg?w=1920&g=0.5188087774294671x0.8248125868964988&fm=webp" 
      imgAlt="Media Hub Hero"
      heightClass="h-[60vh] md:h-[100vh]"
      hasGsapAnimation={true}
      hideScrollIcon={true}
      customOverlay={<div className="absolute inset-0 bg-transparent"></div>}
      titleClassName="font-primary text-6xl md:text-8xl lg:text-[6rem] tracking-tighter leading-none mb-0 pb-0"
    />
  );
}
