import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-abt-dark py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-abt-dark via-abt-dark to-black/50 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <div className="md:w-1/2 text-left mb-12 md:mb-0">
          <div className="font-heading uppercase text-white leading-none">
            <span className="block text-2xl md:text-3xl font-light mb-2">РЕАЛИЗОВАЛИ</span>
            <div className="flex items-baseline gap-4">
               <span className="block text-xl md:text-2xl font-bold text-white/80">БОЛЕЕ</span>
               <span className="block text-8xl md:text-9xl font-bold text-white tracking-tighter">10</span>
            </div>
            <span className="block text-3xl md:text-5xl font-bold mt-2 text-white">ИНДИВИДУАЛЬНЫХ</span>
            <span className="block text-3xl md:text-5xl font-bold mt-2 text-white">ПРОЕКТОВ</span>
          </div>
        </div>

        {/* Right Graphic - Abstract Triangle/Mountain */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
           <div className="relative w-64 h-64 md:w-96 md:h-96 opacity-80">
              {/* Using SVG to recreate the metallic triangle graphic style */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="metal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4B5563" />
                    <stop offset="50%" stopColor="#9CA3AF" />
                    <stop offset="100%" stopColor="#4B5563" />
                  </linearGradient>
                </defs>
                {/* Right triangle part */}
                <path d="M50 0 L100 100 L70 100 L35 30 Z" fill="url(#metal-grad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                {/* Middle triangle part */}
                <path d="M25 50 L60 100 L30 100 L10 60 Z" fill="url(#metal-grad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                 {/* Left triangle part */}
                <path d="M5 70 L25 100 L0 100 Z" fill="url(#metal-grad)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              </svg>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;