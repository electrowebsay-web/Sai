import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SpecialMenu from './components/SpecialMenu';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactFooter from './components/ContactFooter';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-[#FDFBF7] selection:bg-[#D4AF37] selection:text-[#0A3221]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SpecialMenu />
        <Rooms />
        <Gallery />
        <Reviews />
      </main>
      <ContactFooter />

      {/* Floating Sticky Actions (Mobile & Desktop) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Mobile Call Button (Shows only on small screens) */}
        <a 
          href="tel:+919999999999" 
          className="lg:hidden w-14 h-14 bg-[#0A3221] text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-[#D4AF37] hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50"
          aria-label="Call Now"
        >
          <Phone fill="currentColor" size={24} />
        </a>

        {/* WhatsApp Button (Shows on all screens) */}
        <a 
          href="https://wa.me/919999999999" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-green-400/50"
          aria-label="WhatsApp Us"
        >
          <MessageCircle fill="currentColor" size={28} />
        </a>
      </div>
    </div>
  );
}
