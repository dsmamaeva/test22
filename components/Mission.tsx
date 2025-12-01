import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="mb-12 font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide">
        Мы – за развитие промышленности России
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