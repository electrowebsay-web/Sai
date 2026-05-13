export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  spicy?: boolean;
  bestseller?: boolean;
};

// Fallback data in case the Excel file is not uploaded yet.
export const menuData: MenuItem[] = [
  // Punjabi
  { id: 'p1', name: 'Paneer Butter Masala', description: 'Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.', price: 280, category: 'Punjabi', bestseller: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800' },
  { id: 'p2', name: 'Kadai Paneer', description: 'Paneer cooked in a spicy gravy made of onions, tomatoes, capsicum and traditional Indian spices.', price: 260, category: 'Punjabi', spicy: true },
  { id: 'p3', name: 'Dal Makhani', description: 'Classic North Indian dish made with whole urad dal, rajma, butter and spices.', price: 220, category: 'Punjabi' },
  { id: 'p4', name: 'Veg Kadai', description: 'Mixed vegetables cooked in a spicy gravy.', price: 240, category: 'Punjabi' },
  { id: 'p5', name: 'Butter Naan', description: 'Soft and fluffy Indian bread cooked in tandoor and brushed with butter.', price: 50, category: 'Punjabi' },
  { id: 'p6', name: 'Garlic Naan', description: 'Tandoori naan topped with garlic and coriander.', price: 65, category: 'Punjabi' },

  // South Indian
  { id: 's1', name: 'Masala Dosa', description: 'Crispy rice and lentil crepe stuffed with spiced potato filling.', price: 120, category: 'South Indian', bestseller: true, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800' },
  { id: 's2', name: 'Idli Sambar', description: 'Steamed rice cakes served with lentil-based vegetable stew.', price: 80, category: 'South Indian' },
  { id: 's3', name: 'Mendu Vada', description: 'Crispy fried lentil donuts served with sambar and chutney.', price: 90, category: 'South Indian' },
  { id: 's4', name: 'Uttapam', description: 'Thick pancake made from rice and lentil batter topped with vegetables.', price: 130, category: 'South Indian' },

  // Chinese
  { id: 'c1', name: 'Veg Hakka Noodles', description: 'Wok tossed noodles with fresh vegetables and soy sauce.', price: 180, category: 'Chinese', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800' },
  { id: 'c2', name: 'Veg Manchurian', description: 'Crispy vegetable balls tossed in a dark, spicy soy sauce.', price: 190, category: 'Chinese', spicy: true },
  { id: 'c3', name: 'Paneer Chilli', description: 'Crispy paneer cubes tossed in a spicy, sweet and sour sauce.', price: 220, category: 'Chinese', spicy: true, bestseller: true },
  { id: 'c4', name: 'Veg Fried Rice', description: 'Aromatic basmati rice wok-tossed with fresh vegetables.', price: 170, category: 'Chinese' },

  // Thali
  { id: 't1', name: 'Special Sukhsagar Thali', description: 'Premium thali with Paneer Sabzi, Veg Sabzi, Dal, Rice, 3 Roti, Sweet, Papad, and Chaas.', price: 350, category: 'Thali', bestseller: true, image: 'https://images.unsplash.com/photo-1626779836968-3561332f1465?auto=format&fit=crop&q=80&w=800' },
  { id: 't2', name: 'Mini Maharashtrian Thali', description: 'Pithla, Bhakri, Thecha, Rice, and Dal.', price: 200, category: 'Thali' },
];

export const getCategories = () => {
  const categories = new Set(menuData.map(item => item.category));
  return Array.from(categories);
}
