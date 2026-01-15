
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/132b3ff08a1eac4781e862f34043ff3b/abb684f8070d52f6482568aad0831f3b.png" 
              alt="Kinetic Green Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vehicles" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
            }`}>
              Vehicles
            </a>
            <a href="#dealers" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
            }`}>
              Dealers
            </a>
            <a href="/b2b" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
            }`}>
              B2B
            </a>
            <a href="#media" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
            }`}>
              Media
            </a>
            <a href="#about" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
            }`}>
              About Us
            </a>
            <a href="#contact" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-300'
            }`}>
              Contact
            </a>
          </div>

          <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
            <i className={`ri-menu-line text-2xl ${isScrolled ? 'text-gray-700' : 'text-white'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
