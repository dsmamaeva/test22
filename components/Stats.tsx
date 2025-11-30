import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 py-24 overflow-hidden mt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        <div className="flex flex-col items-start mb-12 lg:mb-0 lg:w-1/2">
           <div className="flex items-end gap-4">
              <div className="flex flex-col items-end">
                 <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-500 mb-1 md:mb-2 text-right w-full">Реализовали</span>
                 <span className="font-display text-5xl md:text-6xl uppercase text-right leading-none">Более</span>
              </div>
              <span className="font-display text-[120px] md:text-[180px] leading-[0.75] font-bold text-gray-900">
                10
              </span>
           </div>
           <div className="mt-4 pl-4 border-l-8 border-gray-900 w-full text-left">
              <span className="block font-display text-5xl md:text-7xl uppercase text-gray-800">индивидуальных</span>
              <span className="block font-display text-5xl md:text-7xl uppercase text-gray-800">проектов</span>
           </div>
        </div>

        {/* Decorative graphic resembling the triangle in original */}
        <div className="hidden lg:block lg:w-1/2 relative h-64 md:h-96 w-full">
           <div className="absolute right-0 bottom-0 w-0 h-0 
             border-l-[100px] border-l-transparent
             border-b-[300px] border-b-gray-200
             border-r-[100px] border-r-transparent
             opacity-50 blur-sm transform rotate-12">
           </div>
           <div className="absolute right-20 bottom-10 w-0 h-0 
             border-l-[150px] border-l-transparent
             border-b-[400px] border-b-gray-900
             border-r-[150px] border-r-transparent
             opacity-10">
           </div>
           {/* Abstract lines */}
           <div className="absolute top-1/2 right-10 w-64 h-1 bg-gray-900 transform -rotate-45"></div>
           <div className="absolute top-1/2 right-24 w-64 h-1 bg-gray-400 transform -rotate-45"></div>
        </div>

      </div>
    </section>
  );
};

export default Stats;