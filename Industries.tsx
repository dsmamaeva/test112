import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section className="bg-abt-dark py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white mb-12 border-l-4 border-white pl-4">
          ИНДУСТРИИ ПРИМЕНЕНИЯ
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="flex flex-col items-center group">
              <div className="w-full aspect-square bg-gradient-to-br from-[#353A48] to-[#2A2E3A] border border-white/5 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-abt-blue/50 group-hover:shadow-[0_0_20px_rgba(122,164,219,0.1)]">
                <industry.icon className="text-white w-12 h-12 stroke-[1.5] group-hover:text-abt-blue transition-colors duration-300" />
              </div>
              <p className="text-sm text-center text-gray-300 font-medium leading-tight max-w-[120px]">
                {industry.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;