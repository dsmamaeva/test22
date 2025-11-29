import React from 'react';

interface CatalogItemProps {
  title: string;
  className?: string;
  image: string;
  textPosition?: 'left' | 'center';
  href?: string;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ title, className = "", image, textPosition = 'left', href }) => {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      href={href}
      className={`relative group overflow-hidden bg-gray-900 ${className} h-[264px] block`}
    >
      {/* Image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 group-hover:from-black/80 group-hover:to-black/50 transition-colors duration-300" />
      
      {/* Text Content */}
      <div className={`absolute inset-0 p-6 md:p-8 flex flex-col ${
        textPosition === 'center' 
          ? 'items-center text-center pt-8 md:pt-10' 
          : 'justify-center items-start text-left pl-8 md:pl-12'
      }`}>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-[0.9] text-white uppercase tracking-wider drop-shadow-lg">
          {title.split('\n').map((line, i) => (
            <span key={i} className="block mb-1">{line}</span>
          ))}
        </h3>
      </div>
    </Component>
  );
};

const CatalogGrid: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* 
        Grid Layout Logic:
        Desktop (lg): 6 column grid. 
          - Row 1: 2 items spanning 3 cols each (50% width).
          - Row 2: 3 items spanning 2 cols each (33.3% width).
        Tablet (md): 2 column grid.
          - Items flow naturally 2 per row.
        Mobile: 1 column grid.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        
        {/* Row 1: Large Tiles */}
        <CatalogItem 
          title={'Лабораторные\nпечи'}
          className="lg:col-span-3"
          image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/iNtpTKAmN6.png"
          textPosition="left"
          href="lab.html"
        />
        <CatalogItem 
          title={'Сервисное\nобслуживание'}
          className="lg:col-span-3"
          image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/87BNZdmpsg.png"
          textPosition="left"
        />

        {/* Row 2: Medium Tiles */}
        <CatalogItem 
          title="Промышленные печи" 
          className="lg:col-span-2"
          image="Img/imgprom.png"
          textPosition="center"
          href="prom.html"
        />
        <CatalogItem 
          title="Туннельные печи" 
          className="lg:col-span-2"
          image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/aZNxtrQAOf.png"
          textPosition="center"
        />
        <CatalogItem 
          title="Высокотемпературные печи" 
          className="lg:col-span-2"
          image="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-11-27/CpBzd9A9Sv.png"
          textPosition="center"
        />

      </div>
    </section>
  );
};

export default CatalogGrid;