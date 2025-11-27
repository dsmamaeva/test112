import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="bg-abt-dark py-16 px-4 lg:px-8 border-t border-white/5 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
           <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 flex items-center justify-center gap-4">
             <span className="text-white">МЫ</span>
             <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-abt-gray">
               <path d="M0 10H60" stroke="currentColor" strokeWidth="2"/>
               <path d="M30 0L40 10L30 20" stroke="currentColor" strokeWidth="2" fill="none"/>
             </svg>
             <span className="text-white">РАЗВИТИЕ ПРОМЫШЛЕННОСТИ РОССИИ</span>
           </h2>
           <p className="text-abt-gray text-lg font-light tracking-wide">Почему выбирают нас</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Horizontal Line separating header from content (Visual only) */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-abt-gray/30 to-transparent -mt-8 hidden md:block"></div>

          {FEATURES.map((feature, index) => (
            <div key={feature.id} className="flex flex-col items-center text-center p-6 group">
              <div className="w-16 h-16 rounded-full bg-abt-slate/20 flex items-center justify-center mb-6 group-hover:bg-abt-blue/20 transition-colors duration-300">
                <feature.icon className="text-abt-blue w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-bold uppercase mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-abt-gray font-light leading-relaxed max-w-sm">
                {feature.description}
              </p>
              
              {/* Vertical separators for desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-white/10" style={{ right: `${(2 - index) * (100 / 3) - (100 / 6)}%` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;