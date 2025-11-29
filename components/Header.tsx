import React, { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const navItems = [
  { label: 'Каталог', href: 'catalog.html', isButton: true },
  { label: 'Решения', href: '#' },
  { label: 'Сервис', href: '#' },
  { label: 'О нас', href: '#' },
  { label: 'Контакты', href: '#' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black/90 text-white sticky top-0 z-50 border-b border-gray-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded clip-path-polygon">
               <Hexagon size={28} strokeWidth={2.5} />
            </div>
            <span className="font-display text-3xl tracking-wide">AVT</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-display text-xl tracking-wider transition-colors px-3 py-2 rounded-md ${
                    item.isButton 
                      ? 'text-white border border-white/50 bg-white/10 hover:bg-white/20 px-4' 
                      : 'hover:text-gray-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-xl font-display tracking-wider ${
                    item.isButton ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;