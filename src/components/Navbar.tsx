import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarDays, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A3221] shadow-lg py-2' : 'bg-[#0A3221]/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             <a href="#home" className="flex items-center gap-3">
               {/* Using Google Drive Logo. Using proxy to display. If it fails, fallback to styled text */}
               <div className="relative h-12 sm:h-16 flex items-center">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1aLlzFJQ-xH9LpCuTsAaehtTPKrZBZh_s" 
                    alt="Sukhsagar Inn Logo" 
                    className="max-h-full w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      document.getElementById('logo-fallback')!.style.display = 'block';
                    }}
                  />
                  <span id="logo-fallback" className="hidden text-brand-cream font-serif text-2xl font-bold tracking-wider">
                    SUKHSAGAR<span className="text-[#D4AF37]"> INN</span>
                  </span>
               </div>
             </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-6 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#D4AF37] font-medium text-sm tracking-wide transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Switch */}
              <div className="flex items-center text-xs font-semibold text-white/80 uppercase tracking-widest border-r border-white/20 pr-4">
                <span className="cursor-pointer hover:text-white transition-colors">Marathi</span>
                <span className="mx-2">|</span>
                <span className="text-[#D4AF37] cursor-pointer">EN</span>
              </div>
              
              <a href="tel:+919999999999" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors font-medium">
                <Phone size={16} />
                <span className="text-sm">Call Now</span>
              </a>
              <a href="#rooms" className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0A3221] font-bold text-sm uppercase tracking-wide rounded-full transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <CalendarDays size={16} />
                Book Room
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex items-center text-[10px] font-semibold text-white/80 uppercase border-r border-white/20 pr-3">
               <span>MR</span><span className="mx-1">|</span><span className="text-[#D4AF37]">EN</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 w-full bg-[#0A3221] border-t border-white/10 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-white hover:text-[#D4AF37] hover:bg-white/5 rounded-md text-base font-medium uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:+919999999999" className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded-full">
                <Phone size={18} />
                Call Now
              </a>
              <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#D4AF37] text-[#0A3221] font-bold rounded-full shadow-lg">
                <CalendarDays size={18} />
                Book Room
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
