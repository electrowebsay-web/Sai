import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Utensils, CalendarDays } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0A3221]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[80%] h-full bg-[#124A32] transform -skew-x-12 translate-x-20"></div>
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div> {/* Overlay for mobile readability */}
        
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 mb-6">
              <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wider uppercase">Premium Quality & Taste</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-white leading-tight mb-4">
              Pure Veg Family <br/>
              <span className="text-[#D4AF37]">Restaurant</span> & <br/>
              <span className="text-[#D4AF37]">Lodging</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 font-medium tracking-wide mb-8">
              सुखसागर इन - 100% शुद्ध शाकाहारी
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="tel:+919999999999" className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0A3221] font-bold text-sm sm:text-base uppercase tracking-wide rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1">
                <Phone size={18} />
                Call Now
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="px-6 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm sm:text-base uppercase tracking-wide rounded-full transition-all flex items-center gap-2 hover:-translate-y-1">
                <MessageCircle size={18} fill="currentColor" />
                WhatsApp
              </a>
              <a href="#menu" className="px-6 py-3.5 border-2 border-white text-white hover:bg-white hover:text-[#0A3221] font-bold text-sm sm:text-base uppercase tracking-wide rounded-full transition-colors flex items-center gap-2">
                <Utensils size={18} />
                View Menu
              </a>
            </div>
          </motion.div>
          
          {/* Right Image/Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
              
              {/* Main Food Image */}
              <img 
                src="https://images.unsplash.com/photo-1626779836968-3561332f1465?auto=format&fit=crop&q=80&w=800" 
                alt="Premium Indian Thali" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#D4AF37] shadow-2xl"
              />
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:top-4 sm:-right-8 z-20 bg-white p-4 rounded-full shadow-2xl border-2 border-[#D4AF37] flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32"
              >
                <div className="w-8 h-8 rounded-full border-2 border-green-600 flex items-center justify-center mb-1">
                   <div className="w-4 h-4 rounded-full bg-green-600"></div>
                </div>
                <span className="text-[#0A3221] font-bold text-xs sm:text-sm uppercase text-center leading-tight">100%<br/>Pure Veg</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 -left-4 sm:bottom-12 sm:-left-12 z-20 glass-card p-4 rounded-2xl shadow-xl border border-white/20 flex flex-col gap-1 items-center"
              >
                <div className="flex text-[#D4AF37]">
                  {'★★★★★'.split('').map((star, i) => <span key={i} className="text-lg">{star}</span>)}
                </div>
                <span className="text-white font-bold text-sm tracking-wide">4.9/5 Rating</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Floating Quick Action Cards (Bottom) */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto align-bottom z-20 relative">
           {[
             { icon: MapPin, title: 'Find Us', sub: 'Get Directions', href: '#contact' },
             { icon: CalendarDays, title: 'Book Room', sub: 'Reserve Stay', href: '#rooms' },
             { icon: Utensils, title: 'Order Food', sub: 'View Menu', href: '#menu' },
             { icon: Phone, title: 'Contact', sub: 'Call Now', href: 'tel:+919999999999' },
           ].map((action, idx) => (
             <motion.a 
               key={idx}
               href={action.href}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 + (idx * 0.1) }}
               className="bg-white hover:bg-[#FDFBF7] p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 group transition-all"
             >
               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0A3221]/10 text-[#0A3221] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
                 <action.icon size={20} />
               </div>
               <div>
                 <h3 className="font-bold text-[#0A3221] text-sm sm:text-base">{action.title}</h3>
                 <p className="text-gray-500 text-xs sm:text-sm font-medium">{action.sub}</p>
               </div>
             </motion.a>
           ))}
        </div>
      </div>
    </section>
  );
}
