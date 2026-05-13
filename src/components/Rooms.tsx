import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Snowflake, Tv, Coffee } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'AC Premium Room',
      description: 'Comfortable stay with modern amenities, crisp linens, and air conditioning.',
      price: '1,500',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
      features: ['Air Conditioning', 'Free Wi-Fi', 'Smart TV', 'Room Service']
    },
    {
      id: 2,
      name: 'Non-AC Standard',
      description: 'Cozy and budget-friendly room with essential amenities for a pleasant stay.',
      price: '900',
      image: 'https://images.unsplash.com/photo-1618773928120-2c14fba022b7?auto=format&fit=crop&q=80&w=800',
      features: ['Fan Cooled', 'Free Wi-Fi', 'Attached Bath', '24/7 Water']
    },
    {
      id: 3,
      name: 'Family Suite',
      description: 'Spacious suite perfect for families, featuring a seating area and extra beds.',
      price: '2,500',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      features: ['Spacious Layout', 'Air Conditioning', 'Sofa Seating', 'Free Breakfast']
    }
  ];

  return (
    <section id="rooms" className="py-20 lg:py-32 bg-[#0A3221] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block uppercase tracking-widest text-[#D4AF37] font-bold text-sm mb-4">
            — Comfortable Stay —
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Our Lodging</h2>
          <p className="text-white/70 text-lg">
            Relax and unwind in our clean, comfortable rooms after enjoying a hearty meal.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-white text-[#0A3221] rounded-[2rem] overflow-hidden shadow-2xl group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                  ₹{room.price} <span className="text-xs font-normal opacity-80">/night</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-serif font-bold mb-3">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 text-balance">
                  {room.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.features.map(feat => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                      {feat}
                    </div>
                  ))}
                </div>
                
                <a 
                  href="tel:+919999999999" 
                  className="block w-full py-4 text-center rounded-xl bg-[#0A3221] text-white font-bold uppercase tracking-widest text-sm transition-colors hover:bg-[#D4AF37] hover:text-[#0A3221]"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
