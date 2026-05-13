import React from 'react';
import { Phone, Mail, MapPin, Search, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#0A3221] text-white pt-20 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="relative h-16 max-w-[220px] flex items-center bg-white/5 p-2 rounded-xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1aLlzFJQ-xH9LpCuTsAaehtTPKrZBZh_s" 
                  alt="Sukhsagar Inn Logo" 
                  className="max-h-full w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    document.getElementById('logo-fallback-footer')!.style.display = 'block';
                  }}
                />
                <span id="logo-fallback-footer" className="hidden text-white font-serif text-2xl font-bold tracking-wider">
                  SUKHSAGAR<span className="text-[#D4AF37]"> INN</span>
                </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience the perfect blend of authentic Indian flavors and premium hospitality. 
              Pure veg restaurant & comfortable lodging at your service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A3221] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A3221] transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Special Menu', 'Rooms', 'Gallery', 'Reviews'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2">
                    <ArrowRight size={14} className="text-[#D4AF37]" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Highway Road, Near City Center,<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:info@sukhsagarinn.com" className="hover:text-white">info@sukhsagarinn.com</a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <h5 className="font-bold text-sm mb-2">Opening Hours</h5>
              <div className="text-sm text-white/70 flex justify-between">
                 <span>Everyday</span>
                 <span>7:00 AM - 11:30 PM</span>
              </div>
            </div>
          </div>

          {/* Menu QR & Inquiry */}
          <div>
             <h4 className="font-serif font-bold text-xl mb-6 text-[#D4AF37]">Scan For Menu</h4>
             <div className="bg-white p-2 rounded-xl w-32 h-32 mb-6 shadow-xl">
               {/* Decorative QR code placeholder */}
               <div className="w-full h-full border-4 border-dashed border-[#0A3221] flex items-center justify-center bg-gray-50">
                 <Search className="text-gray-300 w-8 h-8" />
               </div>
             </div>
             <p className="text-xs text-white/50 mb-2">Scan from your phone to view our menu quickly.</p>
          </div>
        </div>

      </div>

      {/* Map (Placeholder) */}
      <div className="w-full h-64 bg-gray-800 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41730219616!2d79.00213968252277!3d21.16106590215712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-0"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-[#0A3221]/20 mix-blend-multiply"></div>
      </div>

      <div className="bg-[#051F14] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Sukhsagar Inn. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
