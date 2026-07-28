import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, ShoppingCart, Heart, X, Check, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { getProducts } from '../services/productService';
import { useCart } from '../context/CartContext';
import TypewriterText from '../components/TypewriterText';

// Removed unused constants

const ProductListPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOccasions, setSelectedOccasions] = useState(() => {
    if (location.state && location.state.selectedOccasion) {
      return [location.state.selectedOccasion];
    }
    return [];
  });
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [hasFreePhoto, setHasFreePhoto] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (location.state && location.state.selectedOccasion) {
      setSelectedOccasions([location.state.selectedOccasion]);
      // Clear location state so refreshing the page or manual filters aren't overridden on subsequent updates
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    let result = products;

    // Always exclude shells from the collection page as they are not for individual sale
    result = result.filter(p => !p.isShell);

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q));
    }

    // Occasion
    if (selectedOccasions.length > 0) {
      result = result.filter(p => {
        // Correctly filter by occasion tag
        return p.tags && p.tags.some(t => selectedOccasions.includes(t));
      });
    }

    // Price Range
    if (selectedPriceRanges.length > 0) {
      result = result.filter(p => {
        const priceValue = parseInt(p.price.replace(/\D/g, ''));
        return selectedPriceRanges.some(range => {
          if (range === 'Dưới 100.000đ') return priceValue < 100000;
          if (range === '100.000đ - 300.000đ') return priceValue >= 100000 && priceValue <= 300000;
          if (range === 'Trên 300.000đ') return priceValue > 300000;
          return false;
        });
      });
    }

    // Free Photo Printing
    if (hasFreePhoto) {
      result = result.filter(p => p.freePhoto === true || (p.features && p.features.includes('In ảnh miễn phí')));
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
    }

    setFilteredProducts(result);
    setVisibleCount(9);
  }, [searchQuery, selectedOccasions, selectedPriceRanges, hasFreePhoto, sortBy, products]);

  const handleOccasionToggle = (occ) => {
    setSelectedOccasions(prev => 
      prev.includes(occ) ? prev.filter(o => o !== occ) : [...prev, occ]
    );
  };

  const handlePriceRangeToggle = (range) => {
    setSelectedPriceRanges(prev => 
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedOccasions([]);
    setSelectedPriceRanges([]);
    setHasFreePhoto(false);
    setSortBy('default');
  };

  const SidebarFilters = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? 'p-6' : ''}`}>
      <div className="space-y-4">
        <h2 className="text-[22px] font-bold text-[#1e3a5f]">Bộ lọc</h2>
        <input 
          type="text" 
          placeholder="Tìm kiếm theo tên sản phẩm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-gray-200 text-[#1e3a5f] rounded-xl py-2.5 px-4 text-[13px] focus:outline-none focus:border-[#1e3a5f] transition-all"
        />
      </div>
      
      <div className="h-px bg-gray-200" />
      
      <div className="space-y-4">
        <h3 className="text-[18px] font-bold text-[#1e3a5f]">Dịp tặng quà</h3>
        <div className="space-y-3">
          {['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật', 'Dịp tốt nghiệp'].map((occ, idx) => {
            const isChecked = selectedOccasions.includes(occ);
            return (
              <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${isChecked ? 'bg-[#800000] border-[#800000]' : 'border-[#800000] bg-white group-hover:bg-gray-50'}`}>
                  {isChecked && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-[#334155] text-sm">{occ}</span>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={isChecked}
                  onChange={() => handleOccasionToggle(occ)} 
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-gray-200" />
      
      <div className="space-y-4">
        <h3 className="text-[18px] font-bold text-[#1e3a5f]">Khoảng giá</h3>
        <div className="space-y-3">
          {['Dưới 100.000đ', '100.000đ - 300.000đ', 'Trên 300.000đ'].map((range, idx) => {
            const isChecked = selectedPriceRanges.includes(range);
            return (
              <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${isChecked ? 'bg-[#800000] border-[#800000]' : 'border-[#800000] bg-white group-hover:bg-gray-50'}`}>
                  {isChecked && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-[#334155] text-sm">{range}</span>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={isChecked}
                  onChange={() => handlePriceRangeToggle(range)} 
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-gray-200" />
      
      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${hasFreePhoto ? 'bg-[#800000] border-[#800000]' : 'border-[#800000] bg-white group-hover:bg-gray-50'}`}>
            {hasFreePhoto && <Check size={14} className="text-white" strokeWidth={3} />}
          </div>
          <span className="text-[18px] font-bold text-[#1e3a5f]">In ảnh miễn phí</span>
          <input 
            type="checkbox" 
            className="hidden" 
            checked={hasFreePhoto}
            onChange={() => setHasFreePhoto(!hasFreePhoto)} 
          />
        </label>
      </div>

      <button 
        onClick={clearFilters}
        className="text-[#800000] text-sm font-bold hover:underline"
      >
        Xóa tất cả bộ lọc
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-dark mb-4">Bộ Sưu Tập</h1>
          <TypewriterText 
            text="Khám phá những set quà tặng ý nghĩa và các sản phẩm lẻ tinh tế dành riêng cho những dịp đặc biệt của bạn."
            className="text-gray-dark max-w-2xl mx-auto"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-28">
              <SidebarFilters />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            
            {/* Mobile/Tablet Top Filters (Hidden on Desktop) */}
            <div className="lg:hidden bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm mb-6 w-full">
              <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                {/* 1. Search */}
                <div className="col-span-2">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm SP..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl py-3 px-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#800000]/10 focus:border-[#800000]/30 transition-all placeholder:text-gray-400 shadow-sm"
                  />
                </div>
                
                {/* 2. Price (SortBy) */}
                <div className="relative col-span-1">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-500 rounded-xl py-3 px-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#800000]/10 focus:border-[#800000]/30 transition-all appearance-none pr-8 shadow-sm cursor-pointer"
                  >
                    <option value="default">Mức giá</option>
                    <option value="price-asc">Thấp - Cao</option>
                    <option value="price-desc">Cao - Thấp</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>

                {/* 3. Occasion */}
                <div className="relative col-span-1">
                  <select 
                    value={selectedOccasions[0] || ""}
                    onChange={(e) => {
                       if (e.target.value) {
                         setSelectedOccasions([e.target.value]);
                       } else {
                         setSelectedOccasions([]);
                       }
                    }}
                     className="w-full bg-white border border-[#d9afaf] text-[#6b7280] rounded-xl py-3 px-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#800000]/10 focus:border-[#800000]/30 transition-all appearance-none pr-8 shadow-sm cursor-pointer"
                  >
                    <option value="">Tất cả (mặc định)</option>
                    {['Dành cho nam', 'Dành cho nữ', 'Dành cho cặp đôi', 'Dịp sinh nhật', 'Dịp tốt nghiệp'].map(occ => (
                      <option key={occ} value={occ}>{occ}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                
                {/* 4. Free Photo */}
                <div className="col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer group bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:border-[#800000]/30 transition-colors">
                    <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${hasFreePhoto ? 'bg-[#800000] border-[#800000]' : 'border-gray-300 bg-white group-hover:bg-gray-50'}`}>
                      {hasFreePhoto && <Check size={14} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className="text-[#334155] text-sm font-medium">Có in ảnh miễn phí</span>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={hasFreePhoto}
                      onChange={() => setHasFreePhoto(!hasFreePhoto)} 
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mb-8 px-4 gap-4 items-center sm:items-start lg:items-center">
              <p className="text-gray-dark font-medium lg:w-auto w-full text-center sm:text-left">
                Hiển thị <span className="text-dark font-bold">{Math.min(visibleCount, filteredProducts.length)}</span> trên <span className="text-dark font-bold">{filteredProducts.length}</span> sản phẩm
              </p>

              {/* Desktop Sort Dropdown */}
              <div className="hidden lg:flex items-center gap-2">
                 <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#203241] text-white text-[10px] sm:text-xs font-bold border-0 rounded-full px-5 py-3 outline-none cursor-pointer shadow-lg uppercase tracking-widest hover:bg-[#2c3e50] transition-all appearance-none pr-10 relative"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.2rem'
                  }}
                 >
                   <option value="default" className="bg-[#203241]">Sắp xếp theo: mặc định</option>
                   <option value="price-asc" className="bg-[#203241]">Giá: Thấp → Cao</option>
                   <option value="price-desc" className="bg-[#203241]">Giá: Cao → Thấp</option>
                 </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-gray-200 h-80 rounded-[2rem]"></div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-[20px] p-20 text-center border border-gray-100 shadow-sm">
                <Search size={48} className="mx-auto text-gray-200 mb-6" />
                <h3 className="text-xl font-bold text-dark mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-dark mb-8">Thử thay đổi bộ lọc hoặc danh mục của bạn.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                >
                  Xem tất cả sản phẩm
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  {filteredProducts.slice(0, visibleCount).map((product) => {
                    const isWooApi = !!product.prices;
                    const hoverImgSrc = isWooApi && product.images?.length > 1 
                      ? product.images[1].src 
                      : (!isWooApi && product.additionalImages?.length > 0) 
                        ? product.additionalImages[0] 
                        : null;

                    return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={product.id}
                      className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-50 flex flex-col h-full"
                    >
                      <Link to={`/san-pham/${product.slug}`} className="relative aspect-square overflow-hidden bg-gray-100 block">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${hoverImgSrc ? 'lg:group-hover:opacity-0' : ''}`}
                        />
                        {hoverImgSrc && (
                          <img 
                            src={hoverImgSrc} 
                            alt={`${product.name} alternate`}
                            className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 opacity-0 lg:group-hover:opacity-100 transition-all duration-700"
                          />
                        )}
                        {product.badge && (
                          <span className="absolute top-4 left-4 bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                            {product.badge}
                          </span>
                        )}
                      </Link>
                      
                      <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <Link to={`/san-pham/${product.slug}`} className="text-sm md:text-lg font-bold text-dark mb-2 md:mb-3 line-clamp-2 hover:text-primary transition-colors flex-grow">
                          {product.name}
                        </Link>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-col md:flex-row items-baseline gap-1 md:gap-2">
                            <span className="text-sm md:text-xl font-black text-primary">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-gray-400 text-[10px] md:text-[13px] line-through font-medium">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <button 
                            onClick={() => addToCart(product)}
                            className="bg-gray-50 p-2 md:p-3 rounded-full text-dark hover:bg-primary hover:text-white transition-all transform active:scale-95"
                          >
                            <ShoppingCart size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )})}
                </div>

                {visibleCount < filteredProducts.length && (
                  <div className="mt-16 text-center">
                    <button 
                      onClick={() => setVisibleCount(prev => prev + 9)}
                      className="bg-white text-dark font-black px-12 py-5 rounded-full shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all uppercase tracking-widest text-sm"
                    >
                      Tải thêm sản phẩm
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
