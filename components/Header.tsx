import React, { useState } from 'react';
import { Menu, X, Hexagon, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Каталог', href: '#', isCatalogTrigger: true },
  { label: 'Решения', href: '#' },
  { label: 'Сервис', href: '#' },
  { label: 'О нас', href: '#' },
  { label: 'Контакты', href: '#' },
];

const catalogCategories = [
  { title: "Лабораторные печи", href: "#" },
  { title: "Промышленные печи", href: "#" },
  { title: "Туннельные печи", href: "#" },
  { title: "Высокотемпературные печи", href: "#" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (item.isCatalogTrigger) {
      e.preventDefault();
      setIsCatalogOpen(!isCatalogOpen);
    } else {
      setIsCatalogOpen(false);
    }
  };

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
                  onClick={(e) => handleNavClick(e, item)}
                  className={`font-display text-xl tracking-wider hover:text-gray-300 transition-colors px-3 py-2 rounded-md ${
                    item.isCatalogTrigger && isCatalogOpen ? 'text-gray-300 bg-gray-800' : ''
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

      {/* Catalog Dropdown (Overlay) */}
      {isCatalogOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex flex-col gap-6 pl-4 md:pl-20">
                 {catalogCategories.map((cat, index) => (
                   <a 
                     key={index} 
                     href={cat.href}
                     className="group relative w-full md:w-[350px] h-[80px] bg-[#2a2e3a] flex items-center justify-between px-8 hover:bg-[#3b4050] transition-colors duration-300 cursor-pointer"
                   >
                      <span className="font-display text-2xl text-white tracking-wide">
                        {cat.title}
                      </span>
                      <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                        <ChevronRight size={24} />
                      </div>
                   </a>
                 ))}
              </div>
           </div>
           {/* Close overlay on click outside (transparent layer) */}
           <div 
             className="fixed inset-0 top-[calc(5rem+400px)] z-40 bg-black/20 backdrop-blur-sm"
             onClick={() => setIsCatalogOpen(false)}
           ></div>
        </div>
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-xl font-display tracking-wider"
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