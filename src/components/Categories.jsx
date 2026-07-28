import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/products';
import { Link } from 'react-router-dom';
import TypewriterText from './TypewriterText';

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Danh Mục Quà Tặng</h2>
          <TypewriterText 
            text="Lựa chọn món quà hoàn hảo từ các bộ sưu tập được thiết kế riêng của chúng tôi"
            className="text-gray-dark max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link 
              to="/bo-suu-tap" 
              state={{ selectedOccasion: category.title }} 
              key={category.id} 
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">
                    {category.count} Sản phẩm
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-primary-light text-sm font-semibold">
                    <span>Xem tất cả</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
