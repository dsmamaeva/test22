import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="relative inline-block mb-12">
        <span className="absolute -top-10 -left-6 md:-left-12 font-script text-4xl md:text-5xl text-gray-400 rotate-[-15deg]">
          за
        </span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide">
          Мы — развитие промышленности России
        </h2>
      </div>
      
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