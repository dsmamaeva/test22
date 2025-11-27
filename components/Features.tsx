import React from 'react';
import { Factory, Sliders, Star } from 'lucide-react';

const features = [
  {
    icon: <Factory size={48} className="text-gray-300" />,
    title: "Собственное производство",
    desc: "Полный цикл от проектирования до пуско-наладки. Контроль качества на каждом этапе."
  },
  {
    icon: <Sliders size={48} className="text-gray-300" />,
    title: "Индивидуальные решения",
    desc: "Адаптация под ваши техпроцессы. Спецпроекты любой сложности."
  },
  {
    icon: <Star size={48} className="text-gray-300" />,
    title: "Экспертность",
    desc: "Работаем с ведущими предприятиями отрасли. Более 300 успешных проектов."
  }
];

const Features: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="mb-6 p-4 rounded-full bg-gray-800/50 border border-gray-700">
              {feature.icon}
            </div>
            <h4 className="font-display text-2xl md:text-3xl mb-4 uppercase tracking-wide">
              {feature.title}
            </h4>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-20"></div>
    </section>
  );
};

export default Features;