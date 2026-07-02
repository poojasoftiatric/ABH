import React from 'react';

const boardDirectors = [
  { id: 1, name: 'Patrik Schumacher', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Mouzhan Majidi', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Jim Heverin', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Gianluca Racana', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Charles Walker', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
];

const directors = [
  { id: 6, name: 'Paul Brislin', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' },
  { id: 7, name: 'Paola Cattarin', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop' },
  { id: 8, name: 'Cristiano Ceccato', img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop' },
  { id: 9, name: 'Nils Fischer', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop' },
  { id: 10, name: 'Paulo Flores', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop' },
  { id: 11, name: 'Manuela Gatto', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { id: 12, name: 'Johannes Hoffmann', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
  { id: 13, name: 'Filippo Innocenti', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
  { id: 14, name: 'Christopher Lépine', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
  { id: 15, name: 'Melodie Leung', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop' },
];

const associateDirectors = [
  { id: 16, name: 'Gerhild Ayas', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { id: 17, name: 'Shajay Bhooshan', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop' },
  { id: 18, name: 'Bianca Cheung', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop' },
  { id: 19, name: 'Kaloyan Erevinov', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' },
  { id: 20, name: 'Daniel Fiser', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
];

export default function PeopleGrid() {

  const PersonCard = ({ person }) => (
    <div className="flex flex-col group cursor-pointer border-r border-b border-[#222]">
      {/* Black and white image by default, color on hover */}
      <div className="w-full aspect-[4/5] overflow-hidden bg-[#111]">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
      </div>
      
      <div className="flex justify-between items-end p-4 md:p-6 bg-black">
        <h3 className="font-primary font-normal text-sm md:text-base tracking-tight pr-4 text-gray-300 group-hover:text-white transition-colors max-w-[80%] leading-snug">
          {person.name.split(' ').map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </h3>
        <span className="text-white group-hover:translate-x-1 transition-transform shrink-0 pb-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black text-white pb-24">
      
      {/* Board Directors Section */}
      <div className="mb-12">
        <h2 className="font-primary text-2xl md:text-3xl font-normal px-6 md:px-12 py-8 border-t border-[#222]">
          Board Directors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-[#222]">
          {boardDirectors.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>

      {/* Directors Section */}
      <div className="mb-12">
        <h2 className="font-primary text-2xl md:text-3xl font-normal px-6 md:px-12 py-8 border-t border-[#222]">
          Directors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-[#222]">
          {directors.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>

      {/* Associate Directors Section */}
      <div className="mb-12">
        {/* Gradient Line separator shown in PDF page 2 */}
        <div className="h-[2px] w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-50 mb-8"></div>
        
        <h2 className="font-primary text-2xl md:text-3xl font-normal px-6 md:px-12 pb-8">
          Associate Directors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-[#222]">
          {associateDirectors.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>

    </div>
  );
}
