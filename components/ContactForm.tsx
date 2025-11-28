import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src="Img/back.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border border-gray-700 p-8 md:p-12 rounded-2xl shadow-2xl">
          
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Остались вопросы?</h2>
            <p className="text-gray-400 md:text-lg max-w-2xl mx-auto">
              Вы можете быстро получить консультацию. Для этого напишите на почту <a href="mailto:stanislavpolyanskikh@yandex.ru" className="text-white underline hover:text-gray-300">stanislavpolyanskikh@yandex.ru</a> или свяжитесь через форму обратной связи.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-display text-xl uppercase text-gray-300">имя *</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white/5 border border-gray-600 rounded p-4 text-white focus:border-white focus:ring-1 focus:ring-white transition outline-none backdrop-blur-md"
                  placeholder="Ваше имя"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-display text-xl uppercase text-gray-300">Номер телефона *</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-white/5 border border-gray-600 rounded p-4 text-white focus:border-white focus:ring-1 focus:ring-white transition outline-none backdrop-blur-md"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block font-display text-xl uppercase text-gray-300">Ваш вопрос*</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-white/5 border border-gray-600 rounded p-4 text-white focus:border-white focus:ring-1 focus:ring-white transition outline-none backdrop-blur-md resize-none"
                placeholder="Опишите вашу задачу..."
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gray-700 hover:bg-gray-600 text-white font-display text-xl uppercase tracking-widest rounded transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Задать вопрос
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;