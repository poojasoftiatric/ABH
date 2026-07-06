import React from 'react';
import HeroImage from '../../components/common/HeroImage';

export default function ExpertiseHero() {
  return (
    <HeroImage 
      title="Expertise" 
      imgSrc="https://media-prod.zha.com/zhweb-prod-media/media/xw3noymh/beeah-headquarters-by-zaha-hadid-architects-09.jpg?w=1920&g=0.5x0.5&fm=webp" 
      imgAlt="Expertise Hero"
      heightClass="h-[60vh] md:h-[100vh]"
      hideScrollIcon={false}
      titleClassName="font-primary text-6xl md:text-8xl lg:text-[120px] tracking-tighter leading-none mb-0 pb-0"
    />
  );
}
