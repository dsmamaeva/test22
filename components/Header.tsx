import React, { useState } from 'react';
import { Menu, X, Hexagon, ChevronRight, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Каталог', href: '#', isButton: true },
  { label: 'Решения', href: '#' },
  { label: 'Сервис', href: '#' },
  { label: 'О нас', href: '#' },
  { label: 'Контакты', href: '#' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);

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
                item.isButton ? (
                  <button
                    key={item.label}
                    onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                    className={`font-display text-xl tracking-wider px-3 py-2 rounded-md transition-colors flex items-center gap-2 ${
                        isCatalogOpen ? 'text-[#6B809B]' : 'text-white hover:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-display text-xl tracking-wider hover:text-gray-300 transition-colors px-3 py-2 rounded-md"
                  >
                    {item.label}
                  </a>
                )
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
        <div className="hidden md:block absolute top-full left-0 w-full bg-black border-b border-gray-700 shadow-2xl z-40">
           <div className="container mx-auto px-4 py-8">
               <div className="flex flex-col items-start gap-4">
                    {/* Item 1 */}
                   <a href="#" className="group w-full md:w-[300px] h-[80px] bg-[#2a2e3a] border border-gray-700 hover:border-gray-500 flex items-center justify-between px-6 rounded hover:bg-[#3b4050] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                       <span className="font-display text-2xl text-white tracking-wide">Лабораторные печи</span>
                       <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                           <ChevronRight size={24} />
                       </div>
                   </a>

                   {/* Item 2 */}
                   <a href="#" className="group w-full md:w-[300px] h-[80px] bg-[#2a2e3a] border border-gray-700 hover:border-gray-500 flex items-center justify-between px-6 rounded hover:bg-[#3b4050] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                       <span className="font-display text-2xl text-white tracking-wide">Промышленные печи</span>
                       <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                           <ChevronRight size={24} />
                       </div>
                   </a>

                   {/* Item 3 */}
                   <a href="#" className="group w-full md:w-[300px] h-[80px] bg-[#2a2e3a] border border-gray-700 hover:border-gray-500 flex items-center justify-between px-6 rounded hover:bg-[#3b4050] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                       <span className="font-display text-2xl text-white tracking-wide">Туннельные печи</span>
                       <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                           <ChevronRight size={24} />
                       </div>
                   </a>

                   {/* Item 4 */}
                   <a href="#" className="group w-full md:w-[300px] h-[80px] bg-[#2a2e3a] border border-gray-700 hover:border-gray-500 flex items-center justify-between px-6 rounded hover:bg-[#3b4050] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                       <span className="font-display text-2xl text-white tracking-wide">Высокотемпературные печи</span>
                       <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                           <ChevronRight size={24} />
                       </div>
                   </a>
               </div>
           </div>
        </div>
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button 
                onClick={() => setIsMobileCatalogOpen(!isMobileCatalogOpen)}
                className="w-full text-left text-white bg-gray-900 block px-3 py-2 rounded-md text-xl font-display tracking-wider flex justify-between items-center"
             >
                Каталог
                <ChevronDown size={20} />
             </button>
             {isMobileCatalogOpen && (
                 <div className="pl-4 space-y-2 py-2 bg-gray-900/50 rounded-md mt-1">
                     <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-display">Лабораторные печи</a>
                     <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-display">Промышленные печи</a>
                     <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-display">Туннельные печи</a>
                     <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-display">Высокотемпературные печи</a>
                 </div>
             )}
            {navItems.filter(item => !item.isButton).map((item) => (
              <a
                key={item.label}
                href={item.href}
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