import React from 'react';
import { PRODUCTS } from '../constants';

const HeroGrid: React.FC = () => {
  // Split products for the specific layout: 2 top items, 3 bottom items
  const topProducts = PRODUCTS.slice(0, 2);
  const bottomProducts = PRODUCTS.slice(2, 5);

  return (
    <section className="bg-abt-dark pattern-bg pt-10 pb-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          
          {/* Top Row - 2 Large Items */}
          {topProducts.map((product) => (
            <div 
              key={product.id} 
              className="relative group md:col-span-3 h-[400px] overflow-hidden bg-abt-card rounded-sm cursor-pointer border border-white/5 shadow-2xl"
            >
               {/* Background Image */}
               <img 
                 src={product.image} 
                 alt={product.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-90"
               />
               
               {/* Gradient Overlay: Heavy dark on left for text contrast */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#2A2E3A] via-[#2A2E3A]/70 to-transparent z-10"></div>
               
               {/* Content: Left aligned */}
               <div className="absolute inset-0 z-20 flex items-center p-8 lg:p-12">
                 <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase leading-[0.95] text-white max-w-[65%] border-l-4 border-abt-blue pl-6 tracking-wide drop-shadow-xl">
                   {product.title}
                 </h2>
               </div>
            </div>
          ))}

          {/* Bottom Row - 3 Medium Items */}
          {bottomProducts.map((product) => (
             <div 
               key={product.id} 
               className="relative group md:col-span-2 h-[300px] overflow-hidden bg-abt-card rounded-sm cursor-pointer border border-white/5 shadow-xl"
             >
               {/* Background Image */}
               <img 
                 src={product.image} 
                 alt={product.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-90"
               />

               {/* Gradient Overlay: Dark on top */}
               <div className="absolute inset-0 bg-gradient-to-b from-[#2A2E3A] via-[#2A2E3A]/40 to-transparent z-10"></div>

               {/* Content: Top Center aligned */}
               <div className="absolute top-0 left-0 right-0 z-20 p-8 text-center">
                 <h2 className="font-heading text-xl lg:text-2xl font-bold uppercase text-white tracking-wider drop-shadow-lg group-hover:text-abt-blue transition-colors duration-300">
                   {product.title}
                 </h2>
               </div>
             </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HeroGrid;