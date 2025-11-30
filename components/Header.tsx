import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'ind' | 'lab' | 'tun' | 'high' | null>(null);
  const [activeSolution, setActiveSolution] = useState<'combo' | 'bitumen' | null>(null);

  const toggleCatalog = () => {
    if (isSolutionsOpen) setIsSolutionsOpen(false);
    setIsCatalogOpen(!isCatalogOpen);
    if (!isCatalogOpen) {
      setActiveCategory(null); // Reset selection when opening
    }
  };

  const toggleSolutions = () => {
    if (isCatalogOpen) setIsCatalogOpen(false);
    setIsSolutionsOpen(!isSolutionsOpen);
    if (!isSolutionsOpen) {
        setActiveSolution(null);
    }
  };

  return (
    <header className="relative w-full bg-[#000000] text-white z-50 h-[83px] flex items-center justify-center">
      {/* Logo */}
      <a href="index.html" className="absolute left-[40px] md:left-[98px] top-[10px]">
        <img src="Img/logo_lvt.png" alt="ЛВТ Логотип" className="h-12 w-auto object-contain" />
      </a>

      {/* Navigation */}
      <nav className="flex items-center gap-[35px]">
        <button 
          onClick={toggleCatalog}
          className={`font-display text-[20px] leading-[28px] uppercase transition-colors px-3 py-2 flex items-center gap-1 ${isCatalogOpen ? 'text-[#6B809B]' : 'text-white hover:text-gray-300'}`}
        >
          Каталог
        </button>
        <button 
          onClick={toggleSolutions}
          className={`font-display text-[20px] leading-[28px] uppercase transition-colors px-3 py-2 flex items-center gap-1 ${isSolutionsOpen ? 'text-[#6B809B]' : 'text-white hover:text-gray-300'}`}
        >
          Решения
        </button>
        <a href="servis.html" className="hidden md:block font-display text-[20px] leading-[28px] uppercase text-white hover:text-gray-300 transition-colors">Сервис</a>
        <a href="about.html" className="hidden md:block font-display text-[20px] leading-[28px] uppercase text-white hover:text-gray-300 transition-colors">О нас</a>
        <a href="contacts.html" className="hidden md:block font-display text-[20px] leading-[28px] uppercase text-white hover:text-gray-300 transition-colors">Контакты</a>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden absolute right-[40px] text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Catalog Dropdown */}
      {isCatalogOpen && (
        <div className="absolute top-full left-0 w-full bg-black z-40 border-t border-gray-800">
           <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 min-h-[400px]">
              
              {/* Left Sidebar */}
              <div className="flex flex-col items-start gap-4 w-full lg:w-1/3 border-r border-gray-800 pr-8">
                  {/* Lab Ovens Button */}
                  <button 
                    onClick={() => setActiveCategory('lab')}
                    className={`group w-full md:w-[300px] h-[80px] hover:bg-[#3b4050] flex items-center justify-between px-6 transition-all duration-300 text-left ${activeCategory === 'lab' ? 'bg-[#3b4050]' : 'bg-[#2a2e3a]'}`}
                  >
                      <span className="font-display text-2xl text-white tracking-wide">Лабораторные печи</span>
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                          <ChevronRight size={24} />
                      </div>
                  </button>

                  {/* Industrial Ovens Button */}
                  <button 
                    onClick={() => setActiveCategory('ind')}
                    className={`group w-full md:w-[300px] h-[80px] hover:bg-[#3b4050] flex items-center justify-between px-6 transition-all duration-300 text-left ${activeCategory === 'ind' ? 'bg-[#3b4050]' : 'bg-[#2a2e3a]'}`}
                  >
                      <span className="font-display text-2xl text-white tracking-wide">Промышленные печи</span>
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                          <ChevronRight size={24} />
                      </div>
                  </button>
                  
                  {/* Tunnel Ovens Button */}
                  <button 
                    onClick={() => setActiveCategory('tun')}
                    className={`group w-full md:w-[300px] h-[80px] hover:bg-[#3b4050] flex items-center justify-between px-6 transition-all duration-300 text-left ${activeCategory === 'tun' ? 'bg-[#3b4050]' : 'bg-[#2a2e3a]'}`}
                  >
                      <span className="font-display text-2xl text-white tracking-wide">Туннельные печи</span>
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                          <ChevronRight size={24} />
                      </div>
                  </button>

                  {/* High Temp Ovens Button */}
                  <button 
                    onClick={() => setActiveCategory('high')}
                    className={`group w-full md:w-[300px] h-[80px] hover:bg-[#3b4050] flex items-center justify-between px-6 transition-all duration-300 text-left ${activeCategory === 'high' ? 'bg-[#3b4050]' : 'bg-[#2a2e3a]'}`}
                  >
                      <span className="font-display text-2xl text-white tracking-wide">Высокотемпературные печи</span>
                      <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                          <ChevronRight size={24} />
                      </div>
                  </button>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-2/3 relative min-h-[300px]">
                 {!activeCategory && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-display text-2xl uppercase tracking-widest">
                        Выберите категорию
                    </div>
                 )}

                 {activeCategory === 'lab' && (
                     <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                         <div className="w-full lg:w-1/2 flex justify-center">
                             <img src="Img/imglab.png" alt="Лабораторные печи" className="max-w-full h-auto max-h-[300px] object-contain" />
                         </div>
                         <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                             <p className="text-gray-300 text-lg leading-relaxed">
                                Линейка настольных печей с объемом рабочего пространства от 3 до 100 литров. Широкий набор опций позволяет использовать печь для процессов с удалением летучих веществ, купелирования, закалки, отжига и нормализации.
                             </p>
                             <a href="lab.html" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                 Перейти в раздел
                             </a>
                         </div>
                     </div>
                 )}

                 {activeCategory === 'ind' && (
                     <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                         <div className="w-full lg:w-1/2 flex justify-center">
                             <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/fFKOob8vHA.png" alt="Промышленные печи" className="max-w-full h-auto max-h-[300px] object-contain" />
                         </div>
                         <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                             <p className="text-gray-300 text-lg leading-relaxed">
                                Предназначены для использования в различных отраслях промышленности, включая крупное серийное производство, лаборатории и гончарные мастерские.
                             </p>
                             <a href="prom.html" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                 Перейти в раздел
                             </a>
                         </div>
                     </div>
                 )}

                 {activeCategory === 'tun' && (
                     <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                         <div className="w-full lg:w-1/2 flex justify-center">
                             <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/aZNxtrQAOf.png" alt="Туннельные печи" className="max-w-full h-auto max-h-[300px] object-contain" />
                         </div>
                         <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                             <p className="text-gray-300 text-lg leading-relaxed">
                                Многозонные проходные печи с электрическим обогревом применяются в производственных линиях, где требуется непрерывность процесса обжига в течении длительного времени.
                             </p>
                             <a href="tunn.html" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                 Перейти в раздел
                             </a>
                         </div>
                     </div>
                 )}

                 {activeCategory === 'high' && (
                     <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                         <div className="w-full lg:w-1/2 flex justify-center">
                             <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/CpBzd9A9Sv.png" alt="Высокотемпературные печи" className="max-w-full h-auto max-h-[300px] object-contain" />
                         </div>
                         <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                             <p className="text-gray-300 text-lg leading-relaxed">
                                Серия напольных высокотемпературных печей с рабочим объемом камеры от 16 до 276 литров и температурами до 1800°C.
                             </p>
                             <a href="vtemp.html" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                 Перейти в раздел
                             </a>
                         </div>
                     </div>
                 )}
              </div>

           </div>
        </div>
      )}

      {/* Solutions Dropdown */}
      {isSolutionsOpen && (
        <div className="absolute top-full left-0 w-full bg-black z-40 border-t border-gray-800">
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 min-h-[400px]">
                {/* Left Sidebar */}
                <div className="flex flex-col items-start gap-4 w-full lg:w-1/3 border-r border-gray-800 pr-8">
                    <button 
                        onClick={() => setActiveSolution('combo')}
                        className={`group w-full md:w-[400px] h-[80px] border border-gray-700 hover:border-gray-500 flex items-center justify-between px-6 rounded hover:bg-[#3b4050] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${activeSolution === 'combo' ? 'bg-[#3b4050]' : 'bg-[#2a2e3a]'}`}
                    >
                        <span className="font-display text-lg md:text-xl text-white tracking-wide uppercase text-left">Комбинированные камерные печи</span>
                        <div className={`transition-colors duration-300 ${activeSolution === 'combo' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            <ChevronRight size={24} />
                        </div>
                    </button>
                    <button 
                        onClick={() => setActiveSolution('bitumen')}
                        className={`group w-full md:w-[400px] h-[80px] border border-gray-700 hover:border-gray-500 flex items-center justify-between px-6 rounded hover:bg-[#3b4050] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${activeSolution === 'bitumen' ? 'bg-[#3b4050]' : 'bg-[#2a2e3a]'}`}
                    >
                        <span className="font-display text-lg md:text-xl text-white tracking-wide uppercase text-left">Печи выжигания битума</span>
                        <div className={`transition-colors duration-300 ${activeSolution === 'bitumen' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            <ChevronRight size={24} />
                        </div>
                    </button>
                </div>
                
                {/* Right Content */}
                <div className="w-full lg:w-2/3 relative min-h-[300px]">
                     {!activeSolution && (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-display text-2xl uppercase tracking-widest">
                            Выберите решение
                        </div>
                     )}
                     
                     {activeSolution === 'combo' && (
                        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <img src="Img/imglab.png" alt="Комбинированные камерные печи" className="max-w-full h-auto max-h-[300px] object-contain" />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                   Специальное исполнение камерной печи для совмещения процессов сушки и обжига за один цикл.
                                </p>
                                <a href="komb.html" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                   Перейти в раздел
                                </a>
                            </div>
                        </div>
                     )}

                     {activeSolution === 'bitumen' && (
                        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <img src="Img/imglab.png" alt="Печи выжигания битума" className="max-w-full h-auto max-h-[300px] object-contain" />
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                   Печь предназначена для определения содержания битума в асфальтобетоне методом выжигания. Оснащена термостойким корпусом, нагревательной камерой с системой удаления продуктов горения, встроенными весами и сенсорным контроллером для автоматического контроля температуры и массы.
                                </p>
                                <a href="bit.html" className="inline-block text-center bg-[#6B809B] hover:bg-[#5a6e87] text-white font-display text-xl uppercase tracking-wider py-4 px-8 rounded transition-colors w-full lg:w-auto shadow-lg">
                                   Перейти в раздел
                                </a>
                            </div>
                        </div>
                     )}
                </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;