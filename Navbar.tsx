import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <svg width="140" height="42" viewBox="0 0 140 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                {/* Blue Triangle - The signature element */}
                <path d="M5 38 L18 38 L18 25 Z" fill="#7AA4DB" />
                
                {/* Letter A (Stylized) */}
                <path d="M22 38 H32 L46 5 H35 L22 38Z" fill="white" /> 
                <path d="M18 22 H30 L25 10 L18 25 V22Z" fill="white" /> 
                
                {/* Letter B */}
                <path d="M50 5 H65 C75 5 78 10 78 14 C78 18 74 21 68 21 C76 21 80 25 80 30 C80 35 74 38 64 38 H50 V5 Z M60 12 V17 H64 C66 17 68 16 68 14 C68 13 67 12 64 12 H60 Z M60 25 V31 H64 C68 31 69 30 69 28 C69 26 68 25 64 25 H60 Z" fill="white" />
                
                {/* Letter T */}
                <path d="M84 5 H110 V12 H102 V38 H92 V12 H84 V5 Z" fill="white" />
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-heading text-base font-bold text-white hover:text-abt-blue transition-colors duration-200 tracking-wider uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-abt-blue focus:outline-none transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 absolute w-full left-0 top-24 shadow-xl h-screen">
          <div className="px-6 pt-6 pb-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-heading block text-xl font-bold text-white hover:text-abt-blue transition-colors tracking-wide uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;