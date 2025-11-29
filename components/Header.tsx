import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'ind' | 'lab'>('ind');

  return (
    <header className="relative w-full min-h-screen flex flex-col bg-[#1e212b] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 lg:px-12 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-2">
           <div className="font-display text-2xl tracking-widest uppercase font-bold text-white">
             AVT<span className="text-gray-400">.Ind</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">Каталог</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">Услуги</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">О нас</a>
          <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">Контакты</a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

         {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-[#1e212b] flex flex-col items-center justify-center gap-8">
                <a href="#" className="text-2xl font-display uppercase hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Каталог</a>
                <a href="#" className="text-2xl font-display uppercase hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Услуги</a>
                <a href="#" className="text-2xl font-display uppercase hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>О нас</a>
                <a href="#" className="text-2xl font-display uppercase hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center container mx-auto px-4 pt-24 pb-12 relative z-10">
         
         <div className="mb-12">
             <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none uppercase">
                <span className="block mb-2">Надежные</span>
                <span className="block text-gray-500">Печи</span>
             </h1>
             <div className="w-24 h-1 bg-blue-500 mt-6"></div>
         </div>

         {/* Category Switcher */}
         <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 md:p-12 backdrop-blur-sm">
             <div className="flex gap-6 mb-8 border-b border-gray-700 pb-4 overflow-x-auto">
                 <button 
                   onClick={() => setActiveCategory('ind')}
                   className={`text-lg uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${activeCategory === 'ind' ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                 >
                    Промышленные
                 </button>
                 <button 
                   onClick={() => setActiveCategory('lab')}
                   className={`text-lg uppercase tracking-wider pb-2 border-b-2 transition-all whitespace-nowrap ${activeCategory === 'lab' ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                 >
                    Лабораторные
                 </button>
             </div>

             <div className="relative min-h-[350px]">
                 {/* Industrial Details */}
                 {activeCategory === 'ind' && (
                     <div className="w-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in transition-opacity duration-500">
                         {/* Image */}
                         <div className="w-full lg:w-1/2 flex justify-center">
                             <img 
                                src="Img/imgprom.png" 
                                alt="Промышленные печи" 
                                className="max-w-full h-auto max-h-[300px] object-contain"
                                onError={(e) => { e.currentTarget.src = "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/fFKOob8vHA.png" }}
                             />
                         </div>
                         {/* Text Content */}
                         <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                             <h3 className="text-2xl font-display uppercase text-white">Высокая производительность</h3>
                             <p className="text-gray-300 text-lg leading-relaxed">
                                 Предназначены для использования в различных отраслях промышленности, включая крупное серийное производство, лаборатории и гончарные мастерские.
                             </p>
                             <a href="#" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                 Перейти в раздел
                             </a>
                         </div>
                     </div>
                 )}

                 {/* Laboratory Details */}
                 {activeCategory === 'lab' && (
                     <div className="w-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in transition-opacity duration-500">
                         {/* Image */}
                         <div className="w-full lg:w-1/2 flex justify-center">
                             <img 
                                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/iNtpTKAmN6.png" 
                                alt="Лабораторные печи" 
                                className="max-w-full h-auto max-h-[300px] object-contain"
                             />
                         </div>
                         {/* Text Content */}
                         <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                             <h3 className="text-2xl font-display uppercase text-white">Точность и контроль</h3>
                             <p className="text-gray-300 text-lg leading-relaxed">
                                 Компактные и высокоточные печи для исследовательских лабораторий, стоматологии и ювелирного дела. Гарантия стабильности температуры.
                             </p>
                             <a href="#" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                 Перейти в раздел
                             </a>
                         </div>
                     </div>
                 )}
             </div>
         </div>
      </div>
    </header>
  );
};

export default Header;