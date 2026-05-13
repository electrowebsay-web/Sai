import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    text: "The Paneer Butter Masala was absolutely incredible. Authentic taste and very rich. The lodging was also exceptionally clean. Highly recommend for families traveling through the area.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Patil",
    text: "Loved the pure veg South Indian spread for breakfast. Very hygienic environment and prompt service. The rooms are budget-friendly yet comfortable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kulkarni",
    text: "Awesome experience. The Maharashtrian Thali felt like homemade food. The staff is very polite. Will definitely visit again when we pass by.",
    rating: 4,
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none whitespace-nowrap">
        <span className="font-serif text-[20vw] leading-none text-[#0A3221]">REVIEWS</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block uppercase tracking-widest text-[#D4AF37] font-bold text-sm mb-4">
            — Guest Testimonials —
          </div>
        </div>

        <div className="relative bg-white rounded-[3rem] p-8 sm:p-16 shadow-xl border border-gray-100">
          <Quote className="absolute top-8 left-8 sm:top-12 sm:left-12 text-[#D4AF37]/20 w-16 h-16 sm:w-24 sm:h-24" />
          
          <div className="relative z-10 min-h-[200px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto"
              >
                <div className="flex justify-center text-[#D4AF37] mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-2xl">
                      {i < reviews[currentIndex].rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8 italic">
                  "{reviews[currentIndex].text}"
                </p>
                
                <h4 className="font-bold uppercase tracking-widest text-sm text-[#0A3221]">
                  — {reviews[currentIndex].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] flex justify-between pointer-events-none">
            <button 
              onClick={prevReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#0A3221] hover:bg-[#0A3221] hover:text-white transition-colors pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#0A3221] hover:bg-[#0A3221] hover:text-white transition-colors pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
