import React from 'react';
import Header from './components/Header';
import CatalogGrid from './components/CatalogGrid';
import Mission from './components/Mission';
import Features from './components/Features';
import Industries from './components/Industries';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#2a2e3a] text-white overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <CatalogGrid />
        <Mission />
        <Features />
        <Industries />
        <Stats />
        <ContactForm />
      </main>

      <footer className="bg-black py-8 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} AVT Industrial Solutions. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;