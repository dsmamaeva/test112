import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 px-4 lg:px-8 pattern-bg bg-black">
      {/* Overlay to darken pattern */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            ОСТАЛИСЬ ВОПРОСЫ?
          </h2>
          <p className="text-abt-gray max-w-2xl mx-auto">
            Вы можете быстро получить консультацию. Для этого напишите на почту 
            <span className="text-white font-medium ml-1">info@abt-furnace.ru</span> или свяжитесь через форму обратной связи.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm p-8 md:p-12 border border-white/10 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white tracking-wider" htmlFor="name">
                  ИМЯ *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1F232B] border border-white/10 text-white p-3 focus:outline-none focus:border-abt-blue transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white tracking-wider" htmlFor="phone">
                  НОМЕР ТЕЛЕФОНА *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1F232B] border border-white/10 text-white p-3 focus:outline-none focus:border-abt-blue transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-white tracking-wider" htmlFor="message">
                ВАШ ВОПРОС*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1F232B] border border-white/10 text-white p-3 focus:outline-none focus:border-abt-blue transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#353A48] hover:bg-abt-blue text-white font-heading font-bold uppercase tracking-wider py-4 transition-all duration-300 border border-white/10 hover:border-transparent"
            >
              ЗАДАТЬ ВОПРОС
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer minimal */}
      <div className="container mx-auto relative z-10 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-abt-gray text-sm">
        <p>© {new Date().getFullYear()} ABT. Все права защищены.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Политика конфиденциальности</a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;