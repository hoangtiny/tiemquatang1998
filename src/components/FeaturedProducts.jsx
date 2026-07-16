import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { products as localProducts } from '../data/products';
import { Link } from 'react-router-dom';
import TypewriterText from './TypewriterText';

const FeaturedProducts = ({ products = [] }) => {
  const displayProducts = (products.length > 0 ? products : localProducts).slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">Sản Phẩm Nổi Bật</h2>
            <TypewriterText text="Những món quà được yêu thích nhất thời gian qua" className="text-gray-dark" />
          </div>
          <Link to="/collection" className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
            Xem tất cả
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map((product, index) => {
            // Support both mock structure and WooCommerce REST API structure
            const isWooApi = !!product.prices;
            const imgSrc = isWooApi && product.images?.length > 0 ? product.images[0].src : product.image;
            const hoverImgSrc = isWooApi && product.images?.length > 1 
              ? product.images[1].src 
              : (!isWooApi && product.additionalImages?.length > 0) 
                ? product.additionalImages[0] 
                : null;
            const title = product.name;
            const currentPrice = isWooApi ? product.prices.price + 'đ' : product.price;
            const regularPrice = isWooApi && product.prices.regular_price !== product.prices.sale_price ? product.prices.regular_price + 'đ' : product.originalPrice;
            
            // Simple badge logic based on on_sale status or predefined
            let badgeText = product.badge;
            if (isWooApi && product.on_sale) badgeText = 'Giảm giá';

            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-[20px] p-2 md:p-4 group cursor-pointer border border-transparent hover:border-gray-200 transition-colors shadow-sm card-hover"
              >
              {/* Product Image */}
               <Link 
                 to={`/san-pham/${product.slug}`}
                 className="aspect-square relative overflow-hidden bg-gray-100 cursor-pointer rounded-[20px] mb-4 block"
               >
                <img 
                  src={imgSrc || 'https://via.placeholder.com/600'} 
                  alt={title}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${hoverImgSrc ? 'lg:group-hover:opacity-0' : ''}`}
                />
                {hoverImgSrc && (
                  <img 
                    src={hoverImgSrc} 
                    alt={`${title} alternate`}
                    className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 opacity-0 lg:group-hover:opacity-100 transition-all duration-700"
                  />
                )}
                
                {/* Badges */}
                {badgeText && (
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 text-xs font-bold text-white rounded-md shadow-sm ${
                      badgeText === 'Mới' ? 'bg-primary' : 
                      badgeText === 'Bán chạy' ? 'bg-orange-500' : 'bg-red-500'
                    }`}>
                      {badgeText}
                    </span>
                  </div>
                )}

                {/* Quick Actions (Hover) */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-10 h-10 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 shadow-md">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white text-dark rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 shadow-md delay-75">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <Link to={`/san-pham/${product.slug}`} className="mt-3 md:mt-4 text-center cursor-pointer block">
                <h3 className="text-sm md:text-lg font-black text-[#2c3e50] hover:text-primary transition-colors line-clamp-1 uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: title }}>
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 justify-center mt-1 md:mt-2">
                  <span className="text-primary font-black text-sm md:text-lg" dangerouslySetInnerHTML={{ __html: currentPrice }}></span>
                  {regularPrice && (
                    <span className="text-gray-400 text-[10px] md:text-sm line-through font-medium" dangerouslySetInnerHTML={{ __html: regularPrice }}></span>
                  )}
                </div>
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
