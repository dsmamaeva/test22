import React from 'react';
import { Beaker, FlaskConical, Hammer, Rocket, Zap, Microscope } from 'lucide-react';

const industries = [
  { icon: <FlaskConical size={40} />, title: "Керамическая промышленность" },
  { icon: <Beaker size={40} />, title: "Химическая промышленность" },
  { icon: <Hammer size={40} />, title: "Металлургия" },
  { icon: <Rocket size={40} />, title: "Авиакосмическая отрасль" },
  { icon: <Zap size={40} />, title: "Электротехника" },
  { icon: <Microscope size={40} />, title: "Лаборатории и НИИ" },
];

const Industries: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-display text-4xl mb-12 pl-4 border-l-4 border-white">
        Индустрии применения
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((item, index) => (
          <div key={index} className="group flex flex-col items-center text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-600">
            <div className="mb-4 text-gray-400 group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;