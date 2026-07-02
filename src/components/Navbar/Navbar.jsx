import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
const expertiseData = [
  { id: 'architecture', title: 'Architecture', image: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'ARCHITECTURE' },
  { id: 'interior', title: 'Interior Architecture', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'INTERIOR' },
  { id: 'masterplans', title: 'Masterplans', image: 'https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'RENDER BY ZHA' },
  { id: 'virtual', title: 'Virtual Spaces', image: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'VIRTUAL' },
  { id: 'workplace', title: 'Workplace Consultancy', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'WORKPLACE' },
  { id: 'products', title: 'Products', image: 'https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'PRODUCTS' },
  { id: 'exhibitions', title: 'Exhibitions', image: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'EXHIBITIONS' },
  { id: 'installations', title: 'Installations + Pavilions', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'INSTALLATIONS' },
];

const aboutUsData = [
  { id: 'culture', title: 'Culture', image: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'CULTURE' },
  { id: 'our-story', title: 'Our Story', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'PHOTOGRAPH BY LUKE HAYES' },
  { id: 'awards', title: 'Awards', image: 'https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'AWARDS' },
];

const researchData = [
  { id: 'hpg', title: 'High Performance Geometry', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'PHOTOGRAPH BY LUKE HAYES' },
  { id: 'si', title: 'Spatial Intelligence', image: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'SPATIAL INTELLIGENCE' },
  { id: 'ss', title: 'Social Simulations', image: 'https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'SOCIAL SIMULATIONS' },
  { id: 'vr', title: 'Virtual Reality', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'VIRTUAL REALITY' },
];

const mediaHubData = [
  { id: 'news', title: 'News', image: 'https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'PHOTOGRAPH BY VIRGILE SIMON BERTRAND' },
  { id: 'publications', title: 'Publications', image: 'https://media-prod.zha.com/zhweb-prod-media/media/adtpt3ck/6_zha_beeah-hq_sharjah_uae_-huftonpluscrow-2-1.jpg?w=1920&g=0.5x0.5&fm=webp', label: 'PHOTOGRAPH BY LUKE HAYES' },
  { id: 'events', title: 'Events', image: 'https://media-prod.zha.com/zhweb-prod-media/media/lwhhik3k/1_striatus_video_full-version00_04_03_07still003.jpg?w=1920&g=0.5200626959247648x0.5222915932892549&fm=webp', label: 'PHOTOGRAPH BY VIRGILE SIMON BERTRAND' },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(expertiseData[2]); // Default to Masterplans
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const dropdownTimeoutRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (dropdownName) {
      setActiveDropdown(dropdownName);
      if (dropdownName === 'expertise') setHoveredSubItem(expertiseData[2]);
      if (dropdownName === 'about-us') setHoveredSubItem(aboutUsData[1]);
      if (dropdownName === 'research') setHoveredSubItem(researchData[0]);
      if (dropdownName === 'media-hub') setHoveredSubItem(mediaHubData[2]);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavMouseLeave = () => {
    setIsHovered(false);
    setActiveDropdown(null);
  };

  const isLightBackground = isHovered || activeDropdown || isMobileMenuOpen;

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleNavMouseLeave}
        className={`fixed top-0 left-0 w-full h-14 z-50 transition-all duration-300 ${isLightBackground
          ? 'bg-white text-black shadow-sm'
          : 'bg-white/10 backdrop-blur-md text-white'
          }`}
      >
        <div className="flex justify-between items-center w-full px-6 py-2 relative z-50">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <svg
              width="80"
              height="40"
              viewBox="0 0 160 80"
              fill={isLightBackground ? "black" : "white"}
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-300"
            >
              <text x="0" y="55" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" letterSpacing="-2">ABH</text>
            </svg>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 text-[10px] font-medium tracking-widest uppercase">
            <Link to="/projects" className="hover:opacity-70 transition-opacity pointer-events-none" onMouseEnter={() => handleDropdownEnter(null)}>Projects</Link>

            {/* Expertise with Dropdown */}
            <div
              className="relative h-full py-4 -my-4 flex items-center cursor-pointer"
              onMouseEnter={() => handleDropdownEnter('expertise')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/expertise" className={`pointer-events-none transition-opacity flex items-center gap-1 ${activeDropdown === 'expertise' ? 'opacity-100' : 'hover:opacity-70'}`}>
                Expertise
                <span className={`text-[10px] transition-transform duration-300 ${activeDropdown === 'expertise' ? 'rotate-180' : ''}`}>▼</span>
              </Link>
            </div>

            <Link to="/people" className="hover:opacity-70 transition-opacity pointer-events-none" onMouseEnter={() => handleDropdownEnter(null)}>People</Link>

            <div
              className="relative h-full py-4 -my-4 flex items-center cursor-pointer"
              onMouseEnter={() => handleDropdownEnter('about-us')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/about" className={`pointer-events-none transition-opacity flex items-center gap-1 ${activeDropdown === 'about-us' ? 'opacity-100' : 'hover:opacity-70'}`}>
                About Us
                <span className={`text-[10px] transition-transform duration-300 ${activeDropdown === 'about-us' ? 'rotate-180' : ''}`}>▼</span>
              </Link>
            </div>

            <div
              className="relative h-full py-4 -my-4 flex items-center cursor-pointer"
              onMouseEnter={() => handleDropdownEnter('research')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/research" className={`pointer-events-none transition-opacity flex items-center gap-1 ${activeDropdown === 'research' ? 'opacity-100' : 'hover:opacity-70'}`}>
                Research
                <span className={`text-[10px] transition-transform duration-300 ${activeDropdown === 'research' ? 'rotate-180' : ''}`}>▼</span>
              </Link>
            </div>

            <Link to="/sustainability" className="hover:opacity-70 transition-opacity pointer-events-none" onMouseEnter={() => handleDropdownEnter(null)}>Sustainability</Link>

            <div 
              className="relative h-full py-4 -my-4 flex items-center cursor-pointer"
              onMouseEnter={() => handleDropdownEnter('media-hub')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/media-hub" className={`pointer-events-none transition-opacity flex items-center gap-1 ${activeDropdown === 'media-hub' ? 'opacity-100' : 'hover:opacity-70'}`}>
                Media Hub 
                <span className={`text-[10px] transition-transform duration-300 ${activeDropdown === 'media-hub' ? 'rotate-180' : ''}`}>▼</span>
              </Link>
            </div>

            <Link to="/contact" className="hover:opacity-70 transition-opacity" onMouseEnter={() => handleDropdownEnter(null)}>Contact</Link>

            <div className="w-px h-4 bg-current opacity-30 mx-2"></div>

            <button 
              className="hover:opacity-70 transition-opacity p-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 p-1 group z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`h-[2px] bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[4px]' : 'w-6 group-hover:w-8'}`}></div>
            <div className={`h-[2px] bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[4px]' : 'w-6 group-hover:w-8'}`}></div>
          </button>
        </div>

        {/* Desktop Dropdown Container */}
        <div
          onMouseEnter={() => { if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current); }}
          onMouseLeave={handleDropdownLeave}
          className={`hidden lg:block absolute top-full left-[30px] w-[calc(100%-60px)] pt-[10px] transition-all duration-500 ease-in-out ${(activeDropdown === 'expertise' || activeDropdown === 'about-us' || activeDropdown === 'research' || activeDropdown === 'media-hub') ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className={`w-full bg-white overflow-hidden transition-all duration-500 ease-in-out rounded-lg shadow-xl ${(activeDropdown === 'expertise' || activeDropdown === 'about-us' || activeDropdown === 'research' || activeDropdown === 'media-hub') ? 'max-h-[500px] border border-gray-100' : 'max-h-0'}`}>
          <div className="w-full p-6 flex gap-8 h-[340px]">
            {/* Left Column: Link List */}
            <div className={`w-1/4 flex flex-col py-1 pl-4 ${activeDropdown === 'about-us' || activeDropdown === 'research' || activeDropdown === 'media-hub' ? 'justify-start gap-4' : 'justify-between'}`}>
              {(activeDropdown === 'about-us' ? aboutUsData : activeDropdown === 'research' ? researchData : activeDropdown === 'media-hub' ? mediaHubData : expertiseData).map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredSubItem(item)}
                  className={`flex justify-between items-center cursor-pointer pb-1 transition-colors duration-300 ${hoveredSubItem.id === item.id
                    ? 'border-b-2 border-black text-black font-bold'
                    : 'border-b-2 border-transparent text-gray-400 hover:text-gray-600 font-normal'
                    }`}
                >
                  <span className="text-[13px]">{item.title}</span>
                  {hoveredSubItem.id === item.id && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Image */}
            <div className="w-3/4 relative h-full rounded-lg overflow-hidden group bg-gray-100">
              <img
                src={hoveredSubItem.image}
                alt={hoveredSubItem.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                key={hoveredSubItem.id}
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <p className="text-white text-[10px] tracking-widest font-bold uppercase">{hoveredSubItem.label}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-x-2 top-[70px] z-[60] lg:hidden transition-all duration-400 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >

        {/* Links Block */}
        <div className="bg-white rounded-xl shadow-2xl flex flex-col px-6 py-6 gap-5 text-black text-[15px] font-primary">
          <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition-colors">Projects</Link>
          
          <div className="flex justify-between items-center cursor-pointer hover:text-gray-600 transition-colors group">
             <Link to="/expertise" onClick={() => setIsMobileMenuOpen(false)} className="flex-grow">Expertise</Link>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <Link to="/people" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition-colors">People</Link>

          <div className="flex justify-between items-center cursor-pointer hover:text-gray-600 transition-colors group">
             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex-grow">About Us</Link>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <div className="flex justify-between items-center cursor-pointer hover:text-gray-600 transition-colors group">
             <Link to="/research" onClick={() => setIsMobileMenuOpen(false)} className="flex-grow">Research</Link>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <Link to="/sustainability" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition-colors">Sustainability</Link>

          <div className="flex justify-between items-center cursor-pointer hover:text-gray-600 transition-colors group">
             <Link to="/media-hub" onClick={() => setIsMobileMenuOpen(false)} className="flex-grow">Media Hub</Link>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-600 transition-colors">Contact</Link>
        </div>
      </div>
      
      {/* Click-away backdrop for mobile menu */}
      <div 
        className={`fixed inset-0 z-[50] bg-black/40 lg:hidden transition-opacity duration-400 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Search Overlay */}
      <div 
        className={`fixed inset-x-0 top-0 z-[60] bg-white/0 transition-all duration-500 ${
          isSearchOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        {/* Header matching original layout but white background */}
        <div className="flex justify-between items-center w-full px-6 py-4 bg-white shadow-sm">
          <Link to="/" onClick={() => setIsSearchOpen(false)} className="flex items-center cursor-pointer">
            <svg width="80" height="40" viewBox="0 0 160 80" fill="black" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="55" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" letterSpacing="-2">ABH</text>
            </svg>
          </Link>
          <button onClick={() => setIsSearchOpen(false)} className="p-2 text-black hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Search Input Container */}
        <div className="w-full px-2 md:px-4 py-4 bg-transparent drop-shadow-md">
          <div className="w-full bg-white rounded flex items-center px-4 md:px-6 py-3 md:py-4">
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-grow text-xl md:text-3xl font-primary font-normal text-gray-700 placeholder-gray-400 outline-none w-full"
            />
            <button className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-black ml-4 hover:opacity-70 transition-opacity whitespace-nowrap">
              Enter to search
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Click-away backdrop */}
        <div className="absolute inset-x-0 top-[180px] h-[100vh] bg-black/10 backdrop-blur-[2px] z-[-1]" onClick={() => setIsSearchOpen(false)}></div>
      </div>
    </>
  );
}
