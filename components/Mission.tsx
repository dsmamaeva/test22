import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 mb-12 font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide">
        <span>МЫ</span>
        <span className="relative w-16 md:w-24 h-[2px] md:h-[4px] bg-white rounded-sm self-center mt-2">
            <span className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 font-script text-3xl md:text-5xl text-white">
                за
            </span>
        </span>
        <span>РАЗВИТИЕ ПРОМЫШЛЕННОСТИ РОССИИ</span>
      </h2>
      
      <div className="relative mt-12 mb-16">
        <h3 className="text-xl md:text-2xl text-gray-300 font-light mb-8">
          Почему выбирают нас
        </h3>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Mission;