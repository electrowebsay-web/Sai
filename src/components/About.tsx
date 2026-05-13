import React from 'react';
import { motion } from 'motion/react';
import { Users, UtensilsCrossed, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: UtensilsCrossed, num: '100+', label: 'Delicious Food Items' },
    { icon: Users, num: '5000+', label: 'Happy Customers' },
    { icon: ShieldCheck, num: '10+', label: 'Years of Trust' },
    { icon: Heart, num: '100%', label: 'Pure Veg' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content & Logo */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block uppercase tracking-widest text-[#D4AF37] font-bold text-sm">
              — Welcome to
            </div>
            
            {/* Logo Here (if fails, shows text) */}
            <div className="relative h-16 sm:h-20 max-w-[250px] flex items-center">
                <img 
                  src="https://lh3.googleusercontent.com/d/1aLlzFJQ-xH9LpCuTsAaehtTPKrZBZh_s" 
                  alt="Sukhsagar Inn Logo" 
                  className="max-h-full w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    document.getElementById('logo-fallback-about')!.style.display = 'block';
                  }}
                />
                <span id="logo-fallback-about" className="hidden text-[#0A3221] font-serif text-3xl font-bold tracking-wider">
                  SUKHSAGAR<span className="text-[#D4AF37]"> INN</span>
                </span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed pt-4">
              Sukhsagar Inn is a premium pure veg family restaurant with comfortable lodging facilities. We serve hygienic, tasty, and quality food in a warm & friendly atmosphere. Whether you are looking for a quick bite, a family dinner, or a comfortable stay, we have you covered.
            </p>

            <a href="#menu" className="inline-block px-8 py-4 bg-[#0A3221] hover:bg-[#124A32] text-white font-semibold uppercase tracking-widest text-sm rounded-full transition-colors shadow-lg shadow-[#0A3221]/20">
              Know More
            </a>
          </div>

          {/* Center: Stats Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-[#FDFBF7] border border-[#0A3221]/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 shadow-sm"
              >
                <stat.icon className="text-[#D4AF37] w-8 h-8" />
                <div className="font-serif font-bold text-2xl sm:text-3xl text-[#0A3221]">{stat.num}</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Right: Interior Image */}
          <div className="lg:col-span-4 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
              alt="Restaurant Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border-2 border-white/40 rounded-2xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
