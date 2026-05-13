import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f3?auto=format&fit=crop&q=80&w=600', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1626779836968-3561332f1465?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-block uppercase tracking-widest text-[#D4AF37] font-bold text-sm mb-4">
              — Inside Sukhsagar —
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A3221]">Our Gallery</h2>
          </div>
          <button className="px-6 py-2 border-b-2 border-[#D4AF37] text-[#0A3221] font-bold uppercase tracking-widest text-sm hover:text-[#D4AF37] transition-colors">
            View All Photos
          </button>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-2 sm:gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                 <span className="text-white border border-white px-4 py-2 rounded-full uppercase tracking-widest text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View</span>
              </div>
              <img 
                src={img.src} 
                alt={`Gallery photo ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
