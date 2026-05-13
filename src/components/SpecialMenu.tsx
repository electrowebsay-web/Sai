import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData as defaultMenuData, getCategories as getDefaultCategories, MenuItem } from '../data/menuData';
import { parseExcelMenu } from '../utils/excelParser';
import { Upload } from 'lucide-react';

export default function SpecialMenu() {
  const [menuData, setMenuData] = useState<MenuItem[]>(defaultMenuData);
  const [categories, setCategories] = useState<string[]>(getDefaultCategories());
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredMenu = menuData.filter(item => item.category === activeCategory);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const parsedData = await parseExcelMenu(file);
      if (parsedData && parsedData.length > 0) {
        setMenuData(parsedData);
        const newCategories = Array.from(new Set(parsedData.map(item => item.category)));
        setCategories(newCategories);
        setActiveCategory(newCategories[0]);
      } else {
        alert("Could not find valid menu data in the Excel file. Please ensure it has columns like 'Name', 'Description', 'Price', 'Category'.");
      }
    } catch (error) {
      console.error("Error parsing Excel file:", error);
      alert("Failed to parse Excel file. Please ensure it is a valid .xlsx or .xls file.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <section id="menu" className="py-20 lg:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <div className="inline-block uppercase tracking-widest text-[#D4AF37] font-bold text-sm mb-4">
            — Taste the Best —
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#0A3221] mb-6">Our Special Menu</h2>
          <p className="text-gray-600 text-lg mb-8">
            A curated selection of our finest pure vegetarian dishes prepared with authentic spices and fresh ingredients.
          </p>

          {/* Excel Uploader */}
          <div className="inline-flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <input 
              type="file" 
              accept=".xlsx, .xls, .csv" 
              onChange={handleFileUpload}
              className="hidden"
              ref={fileInputRef}
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#f0f9f4] hover:bg-[#e2f1e8] text-[#0A3221] text-sm font-semibold rounded-xl transition-colors border border-[#0A3221]/10"
            >
              <Upload size={16} />
              {isUploading ? 'Parsing Menu...' : 'Upload Excel Menu (.xlsx)'}
            </button>
            <p className="text-[10px] text-gray-400 max-w-xs leading-tight">
              Replaces the menu below dynamically. Requires columns: 'Item Name', 'Price', 'Category', 'Description'
            </p>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-[#0A3221] text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:text-[#0A3221] border border-gray-200 hover:border-[#0A3221]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors group cursor-pointer border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md"
              >
                {/* Image if available, else placeholder */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-[#0A3221]/5 flex items-center justify-center border border-[#0A3221]/10">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#0A3221]/30">
                      <span className="font-serif italic text-sm">Sukhsagar</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A3221] font-serif pr-4 truncate">{item.name}</h3>
                    <span className="text-[#D4AF37] font-bold text-lg">₹{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">{item.description}</p>
                  
                  {/* Badges */}
                  <div className="flex gap-2">
                    {item.bestseller && (
                      <span className="inline-block px-2 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider rounded">Bestseller</span>
                    )}
                    {item.spicy && (
                      <span className="inline-block px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded">Spicy</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View Full Menu Button */}
        <div className="mt-16 text-center">
           <a href="#menu" className="inline-block px-8 py-4 border-2 border-[#D4AF37] text-[#0A3221] hover:bg-[#D4AF37] hover:text-white font-semibold uppercase tracking-widest text-sm rounded-full transition-colors shadow-sm">
              View Full Menu
           </a>
        </div>

      </div>
    </section>
  );
}
