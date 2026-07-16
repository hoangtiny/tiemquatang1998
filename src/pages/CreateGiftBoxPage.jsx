import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowLeft, 
  ChevronDown, 
  ShoppingCart, 
  Heart, 
  Info, 
  X, 
  Star, 
  Sparkles, 
  Filter, 
  Trash2,
  ChevronRight,
  Plus,
  Minus,
  Search
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, categories } from '../data/products';

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price.toLocaleString('vi-VN') + 'đ';
  }
  return price;
};

const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
};

const giftBoxes = [
  { 
    id: 'box1', 
    name: 'Hộp Gỗ Thông Mỹ', 
    price: '150.000đ', 
    desc: 'Hộp gỗ thông tự nhiên, sang trọng và bền bỉ.', 
    image: '/anhdep/hop-qua.webp',
    capacity: 12,
    size_label: 'Lớn (25x25x10cm)'
  },
  { 
    id: 'box2', 
    name: 'Hộp Giấy Nghệ Thuật', 
    price: '85.000đ', 
    desc: 'Hộp giấy cao cấp với họa tiết tinh tế.', 
    image: '/anhdep/GRADUATE-BOX-1.webp',
    capacity: 8,
    size_label: 'Vừa (20x20x8cm)'
  },
  { 
    id: 'box3', 
    name: 'Hộp Quà Cao Cấp', 
    price: '120.000đ', 
    desc: 'Thiết kế hiện đại, phù hợp cho mọi dịp.', 
    image: '/anhdep/FALL-IN-LUV-BOX-1.webp',
    capacity: 10,
    size_label: 'Vừa (22x22x9cm)'
  }
];

const CreateGiftBoxPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [hasFreePhoto, setHasFreePhoto] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Step 3 state
  const [selectedCard, setSelectedCard] = useState(null);
  const [giftMessage, setGiftMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');

  // UI state
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    let results = products.filter(p => p.category === 'Sản phẩm lẻ'); // Only individual products

    if (searchQuery) {
      results = results.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedOccasions.length > 0) {
      results = results.filter(p => 
        p.tags && p.tags.some(tag => selectedOccasions.includes(tag))
      );
    }

    if (selectedPriceRanges.length > 0) {
      results = results.filter(p => {
        const price = parsePrice(p.price);
        return selectedPriceRanges.some(range => {
          if (range === 'Dưới 100.000đ') return price < 100000;
          if (range === '100.000đ - 300.000đ') return price >= 100000 && price <= 300000;
          if (range === 'Trên 300.000đ') return price > 300000;
          return true;
        });
      });
    }

    if (hasFreePhoto) {
      results = results.filter(p => p.freePhoto === true || (p.features && p.features.includes('In ảnh miễn phí')));
    }

    if (sortBy === 'price-asc') {
      results.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-desc') {
      results.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return results;
  }, [searchQuery, sortBy, selectedOccasions, selectedPriceRanges, hasFreePhoto]);

  const calculateUsedCapacity = () => {
    return selectedProducts.reduce((acc, p) => acc + (p.size || 2) * (p.quantity || 1), 0);
  };

  const calculateTotal = () => {
    const boxPrice = selectedBox ? parsePrice(selectedBox.price) : 0;
    const productsPrice = selectedProducts.reduce((acc, p) => acc + parsePrice(p.price) * (p.quantity || 1), 0);
    return boxPrice + productsPrice;
  };

  const handleBoxSelect = (box) => {
    setSelectedBox(box);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddProduct = (product, qty = 1) => {
    const used = calculateUsedCapacity();
    const productSize = product.size || 2;
    
    if (used + (productSize * qty) <= (selectedBox?.capacity || 10)) {
      const existing = selectedProducts.find(p => p.id === product.id);
      if (existing) {
        setSelectedProducts(selectedProducts.map(p => 
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + qty } : p
        ));
      } else {
        setSelectedProducts([...selectedProducts, { ...product, quantity: qty }]);
      }
    } else {
      alert('Hộp quà đã đầy! Vui lòng xóa bớt sản phẩm hoặc chọn hộp lớn hơn.');
    }
  };

  const handleRemoveProduct = (productId) => {
    const existing = selectedProducts.find(p => p.id === productId);
    if (!existing) return;
    if ((existing.quantity || 1) > 1) {
      setSelectedProducts(selectedProducts.map(p => 
        p.id === productId ? { ...p, quantity: existing.quantity - 1 } : p
      ));
    } else {
      setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
    }
  };

  const removeItem = (id) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== id));
  };

  const handleOccasionToggle = (occ) => {
    if (selectedOccasions.includes(occ)) {
      setSelectedOccasions(selectedOccasions.filter(o => o !== occ));
    } else {
      setSelectedOccasions([...selectedOccasions, occ]);
    }
  };

  const handlePriceRangeToggle = (range) => {
    if (selectedPriceRanges.includes(range)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(r => r !== range));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  const openProductDetail = (product) => {
    setActiveProduct(product);
    setModalQuantity(1);
    setIsProductDetailOpen(true);
  };

  const handleFinish = () => {
    const giftBoxItem = {
      id: `custom_box_${Date.now()}`,
      name: `[TỰ LÀM HỘP QUÀ] ${selectedBox.name}`,
      price: calculateTotal(),
      image: selectedBox.image,
      quantity: 1,
      isCustomBox: true,
      box: selectedBox,
      items: selectedProducts,
      card: selectedCard ? { id: selectedCard, name: `Thiệp mẫu ${selectedCard}` } : null,
      message: giftMessage,
      sender: senderName,
      recipient: recipientName
    };
    
    addToCart(giftBoxItem);
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper Component: Capacity Bar
  const CapacityBar = ({ used, total }) => {
    const percentage = Math.min((used / total) * 100, 100);
    const color = percentage > 90 ? 'bg-red-500' : percentage > 70 ? 'bg-orange-400' : 'bg-[#8b1a1a]';
    
    return (
      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-[10px] text-gray-400">Dung lượng hộp</span>
          <span className="text-sm text-[#2c3e50]">{used}/{total}</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            className={`h-full ${color} transition-colors duration-500`}
          />
        </div>
        <p className="text-[10px] text-gray-400 italic">Mỗi sản phẩm có kích thước khác nhau (trung bình 2 đơn vị/món)</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-24 pb-20 font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto relative px-4">
            {/* Step Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-[#8b1a1a] -translate-y-1/2 z-0 transition-all duration-700 ease-in-out"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
            
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-3">
                <div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm transition-all duration-500 border-4 ${
                    currentStep >= step 
                    ? 'bg-[#8b1a1a] border-[#fff] text-white shadow-xl scale-110' 
                    : 'bg-white border-gray-100 text-gray-300'
                  }`}
                >
                  {currentStep > step ? <Check size={18} strokeWidth={4} /> : step}
                </div>
                <span className={`text-[9px] sm:text-[10px] ${currentStep >= step ? 'text-[#8b1a1a]' : 'text-gray-300'} hidden xs:block`}>
                  {step === 1 ? 'Chọn Hộp' : step === 2 ? 'Chọn Quà' : step === 3 ? 'Lời Nhắn' : 'Hoàn Tất'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Chọn Hộp */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl sm:text-5xl text-[#2c3e50]er">Bắt đầu hành trình <span className="text-[#8b1a1a]">quà tặng</span></h1>
                <p className="text-gray-400 font-medium max-w-xl mx-auto">Chọn một chiếc hộp phù hợp với phong cách và số lượng món quà bạn dự định tặng.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {giftBoxes.map((box) => (
                  <div 
                    key={box.id}
                    onClick={() => handleBoxSelect(box)}
                    className="group bg-white rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
                      <img src={box.image} alt={box.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-6 right-6">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                          <span className="text-[#8b1a1a] text-sm">{box.price}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-10">
                        <span className="bg-white text-[#2c3e50] px-8 py-3 rounded-full text-[10px] shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Chọn chiếc hộp này</span>
                      </div>
                    </div>
                    <div className="p-8 text-center flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl text-[#2c3e50]">{box.name}</h3>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed">{box.desc}</p>
                      </div>
                      <div className="pt-4 flex items-center justify-center gap-6">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-300">Sức chứa</span>
                          <span className="text-lg text-[#8b1a1a]">{box.capacity} món</span>
                        </div>
                        <div className="w-[1px] h-8 bg-gray-100" />
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-300">Kích thước</span>
                          <span className="text-lg text-[#2c3e50]">{box.size_label || 'Vừa'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Chọn Quà */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-4"
            >
              <div className="flex flex-col lg:flex-row gap-8 pb-32">
                
                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-72 flex-shrink-0 space-y-8">
                  <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm sticky top-28 space-y-6 text-[#1e3a5f]">
                    <div className="space-y-4">
                      <h2 className="text-[22px] font-bold text-[#1e3a5f]">Bộ lọc</h2>
                      <input 
                        type="text" 
                        placeholder="Tìm kiếm theo tên sản phẩm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-gray-200 text-[#1e3a5f] rounded-xl py-3 px-4 text-[13px] focus:outline-none focus:border-[#1e3a5f] transition-all"
                      />
                    </div>
                    
                    <div className="h-px bg-gray-200" />
                    
                    <div className="space-y-4">
                      <h3 className="text-[18px] font-bold text-[#1e3a5f]">Dịp tặng quà</h3>
                      <div className="space-y-3">
                        {['Sinh nhật', 'Kỷ niệm', 'Đám cưới', 'Tân gia', 'Valentine', '8/3', 'Ngày của mẹ', 'Cảm ơn'].map((occ, idx) => {
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

                    <div className="pt-2">
                      <button 
                        onClick={() => {
                          setSelectedOccasions([]);
                          setSelectedPriceRanges([]);
                          setSearchQuery('');
                          setHasFreePhoto(false);
                          setSortBy('default');
                        }}
                        className="text-[#800000] text-sm font-bold hover:underline"
                      >
                        Xóa tất cả bộ lọc
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                  {/* Mobile Stats & Filter Toggle */}
                  <div className="lg:hidden bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm mb-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                            <span className="text-[#8b1a1a]">{currentStep}</span>
                         </div>
                         <div>
                            <h3 className="font-black text-sm text-[#2c3e50]">Lựa chọn quà tặng</h3>
                            <p className="text-[10px] font-medium text-gray-400 italic">Dung lượng: {calculateUsedCapacity()}/{selectedBox?.capacity || 10}</p>
                         </div>
                      </div>
                      <button 
                        onClick={() => setSelectedBox(null) || setCurrentStep(1)}
                        className="text-[10px] text-[#8b1a1a] underline underline-offset-4"
                      >
                        Đổi hộp
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative col-span-2">
                        <input 
                          type="text" 
                          placeholder="Tìm sản phẩm..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-gray-50 border-0 rounded-2xl py-3 px-4 text-xs focus:ring-2 focus:ring-[#8b1a1a]/10 outline-none"
                        />
                      </div>
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-50 border-0 rounded-xl py-3 px-4 text-[11px] text-[#2c3e50] outline-none"
                      >
                        <option value="default">Sắp xếp</option>
                        <option value="price-asc">Giá: Thấp - Cao</option>
                        <option value="price-desc">Giá: Cao - Thấp</option>
                      </select>
                      <button onClick={() => setIsFilterOpen(true)} className="bg-gray-50 rounded-xl py-3 px-4 text-[11px] text-[#2c3e50] flex items-center justify-center gap-2">
                        <Filter size={14} /> Lọc thêm
                      </button>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {filteredProducts.map((product) => {
                      const isSelected = selectedProducts.some(p => p.id === product.id);
                      const used = calculateUsedCapacity();
                      const isFull = (used + (product.size || 2)) > (selectedBox?.capacity || 10);
                      
                      return (
                        <motion.div 
                          layout
                          key={product.id}
                          className="group"
                        >
                          <div 
                            className={`aspect-square relative overflow-hidden rounded-[20px] bg-white transition-all duration-500 cursor-pointer ${isSelected ? 'ring-2 ring-transparent' : ''}`}
                            onClick={() => openProductDetail(product)}
                          >
                            <img src={product.image} alt={product.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isSelected ? 'opacity-90' : ''}`} />
                            
                            {/* Overlay info */}
                            <div className="absolute top-4 left-4 z-10">
                               <div className={`w-5 h-5 rounded-[4px] flex items-center justify-center transition-all ${isSelected ? 'bg-[#8b1a1a] text-white shadow-lg' : 'bg-white shadow-sm'}`}>
                                  {isSelected && <Check size={14} strokeWidth={4} />}
                               </div>
                            </div>

                            {(product.freePhoto || (product.features && product.features.includes('In ảnh miễn phí'))) && (
                              <div className="absolute top-4 right-4 z-10">
                                <div className="bg-white px-3 py-1.5 rounded-[10px] shadow-sm">
                                  <span className="text-[10px] text-[#1e3a5f] font-black uppercase tracking-widest">Free Photo</span>
                                </div>
                              </div>
                            )}

                            <div className="absolute bottom-4 left-0 w-full flex justify-center px-4 z-10 transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                               {isSelected ? (
                                 <div className="bg-white rounded-full px-1 sm:px-2 py-1.5 sm:py-2 flex items-center justify-between w-[90%] sm:w-[85%] max-w-[180px] shadow-xl border border-gray-100 flex-nowrap whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                   <button onClick={() => handleRemoveProduct(product.id)} className="text-[#1e3a5f] p-1 sm:p-1.5"><Minus size={12} className="sm:w-[14px] sm:h-[14px]" strokeWidth={4} /></button>
                                   <span className="text-[#1e3a5f] text-[10px] sm:text-[13px] font-bold w-full text-center truncate">{(selectedProducts.find(p => p.id === product.id)?.quantity || 1) < 10 ? `0${selectedProducts.find(p => p.id === product.id)?.quantity || 1}` : selectedProducts.find(p => p.id === product.id)?.quantity || 1} sản phẩm</span>
                                   <button onClick={() => handleAddProduct(product)} className={`text-[#1e3a5f] p-1 sm:p-1.5 ${(used + (product.size || 2)) > (selectedBox?.capacity || 10) ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={(used + (product.size || 2)) > (selectedBox?.capacity || 10)}><Plus size={12} className="sm:w-[14px] sm:h-[14px]" strokeWidth={4} /></button>
                                 </div>
                               ) : (
                                 <button 
                                   onClick={(e) => {
                                     e.stopPropagation();
                                     handleAddProduct(product);
                                   }}
                                   disabled={isFull}
                                   className={`w-[85%] max-w-[180px] py-3 rounded-[30px] flex items-center justify-center shadow-lg transition-all text-sm font-bold ${
                                     isFull 
                                       ? 'bg-gray-300 text-white cursor-not-allowed'
                                       : 'bg-[#8b1a1a] text-white hover:bg-[#701414]'
                                   }`}
                                 >
                                   Thêm vào hộp
                                 </button>
                               )}
                            </div>
                          </div>
                          <div className="mt-5 space-y-2">
                            <h4 className="text-[15px] font-bold text-[#8b1a1a] line-clamp-1">{product.name}</h4>
                            <div className="flex items-center justify-between">
                              <span className="text-base font-black text-[#8b1a1a]">{formatPrice(product.price)}</span>
                              <span className="text-[10px] text-gray-300 font-medium italic hidden">Size: {product.size || 2}</span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Empty State */}
                  {filteredProducts.length === 0 && (
                    <div className="py-20 text-center space-y-6 bg-white rounded-[2.5rem] border border-dashed border-gray-200">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                        <Search size={32} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl text-[#2c3e50]">Không tìm thấy món quà nào</h3>
                        <p className="text-sm text-gray-400 font-medium">Hãy thử điều chỉnh lại từ khóa hoặc bộ lọc của bạn.</p>
                      </div>
                      <button 
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedOccasions([]);
                          setSelectedPriceRanges([]);
                        }}
                        className="px-8 py-3 bg-[#8b1a1a] text-white rounded-full text-[10px] shadow-xl shadow-[#8b1a1a]/20"
                      >
                        Tất cả sản phẩm
                      </button>
                    </div>
                  )}

                  {/* Tip Message */}
                  <div className="mt-20 flex justify-center mb-10">
                     <div className="bg-white border border-gray-100 text-gray-400 px-8 py-4 rounded-full flex items-center gap-4 text-[10px] shadow-sm">
                        <span className="w-5 h-5 rounded-full bg-[#8b1a1a] text-white flex items-center justify-center text-[10px] shadow-lg">!</span>
                        Gợi ý: Thêm 3-5 món quà để hộp quà trông đẹp nhất
                     </div>
                  </div>
                </div>
              </div>

               {/* Floating Summary Bar */}
               <div className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-4xl z-[100]">
                 <div className="bg-white/95 backdrop-blur-md rounded-[1.5rem] sm:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-2 sm:p-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                   {/* Left: Selected Thumbnails */}
                   <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide py-1 px-4 min-w-0 flex-1">
                     {selectedBox && (
                       <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-[#8b1a1a]/10 p-1">
                         <img src={selectedBox.image} alt={selectedBox.name} className="w-full h-full object-cover rounded-lg" />
                       </div>
                     )}
                     
                     {selectedProducts.map(p => (
                       <div 
                         key={p.id} 
                         onClick={() => removeItem(p.id)}
                         className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md"
                       >
                         <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                         
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                           <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                              <span className="text-white text-base leading-none">×</span>
                           </div>
                         </div>
                         {(p.quantity || 1) > 1 && (
                           <div className="absolute top-0 right-0 bg-[#8b1a1a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-bl-lg">
                             x{p.quantity}
                           </div>
                         )}
                       </div>
                     ))}
                     
                     <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-dashed border-gray-100 flex items-center justify-center text-gray-300 hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-all flex-shrink-0">
                       <span className="text-xl font-light">+</span>
                     </button>
                   </div>
  
                   {/* Right: Price & Button */}
                   <div className="flex flex-row items-center justify-between sm:justify-end gap-5 sm:gap-8 w-full sm:w-auto px-6 sm:px-2">
                     <div className="flex flex-col items-start sm:items-end">
                       <span className="text-[9px] text-gray-400 leading-none mb-1">Tổng tiền:</span>
                       <span className="text-base sm:text-lg text-[#8b1a1a] tabular-nums leading-none">{formatPrice(calculateTotal())}</span>
                     </div>
                     <button 
                       onClick={() => setCurrentStep(3)}
                       disabled={selectedProducts.length === 0}
                       className={`h-11 sm:h-13 px-6 sm:px-10 rounded-xl sm:rounded-full text-[10px] sm:text-[11px] shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center whitespace-nowrap ${
                         selectedProducts.length > 0
                         ? 'bg-[#8b1a1a] text-white hover:bg-[#701414] shadow-[#8b1a1a]/20'
                         : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                       }`}
                     >
                       Hoàn thành hộp quà
                     </button>
                   </div>
                 </div>
               </div>
            </motion.div>
          )}

          {/* STEP 3: Lời Nhắn */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between mb-12 px-4">
                <button 
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#8b1a1a] transition-all text-xs bg-white border border-gray-100 px-6 py-3 rounded-2xl shadow-sm"
                >
                  <ArrowLeft size={16} strokeWidth={3} /> Quay lại
                </button>
                <h2 className="text-2xl text-[#2c3e50] hidden md:block">3. Chọn thiệp & Lời nhắn</h2>
                <div className="w-32"></div>
              </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20 px-4">
                <div className="lg:col-span-1 bg-white rounded-[2.5rem] p-10 h-fit shadow-sm lg:sticky lg:top-48 border border-gray-100 order-2 lg:order-1">
                  <h3 className="font-black text-[#2c3e50] text-xl mb-8 border-b border-gray-50 pb-6">Hộp quà của bạn</h3>
                  
                  {selectedBox && (
                    <div className="flex items-center gap-5 mb-8">
                       <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                          <img src={selectedBox.image} alt={selectedBox.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <span className="text-[10px] text-[#8b1a1a]">Hộp đựng</span>
                          <h4 className="text-lg text-[#2c3e50]">{selectedBox.name}</h4>
                          <span className="text-sm text-gray-300">{formatPrice(selectedBox.price)}</span>
                       </div>
                    </div>
                  )}

                  <div className="space-y-4 mb-10 overflow-y-auto max-h-[40vh] pr-4 scrollbar-hide">
                    {selectedProducts.map((p) => (
                      <div key={p.id} className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white">
                           <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                         <div className="flex-1 min-w-0">
                            <h5 className="text-[11px] text-[#2c3e50] truncate">{p.name}</h5>
                            <div className="flex items-center justify-between">
                               <span className="text-[11px] text-[#8b1a1a]">{formatPrice(p.price)}</span>
                               <span className="text-[11px] font-bold text-[#1e3a5f]">x{p.quantity || 1}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t-4 border-double border-gray-50">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] text-gray-300">Toàn bộ hộp quà:</span>
                      <span className="text-2xl text-[#8b1a1a] tabular-nums">{formatPrice(calculateTotal())}</span>
                    </div>
                    <button 
                      onClick={handleFinish}
                      className="w-full bg-[#8b1a1a] text-white py-5 rounded-2xl text-[11px] shadow-2xl shadow-[#8b1a1a]/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 animate-pulse"
                    >
                      Xác nhận thông tin <ChevronRight size={18} strokeWidth={3} />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-10 order-1 lg:order-2">
                   {/* Personalization Form Removed */}                   {/* Card Options */}
                   <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-8">
                         <h3 className="text-xl text-[#2c3e50]">Chọn thiệp đính kèm</h3>
                         <div className="px-5 py-2 bg-gray-50 rounded-full">
                            <span className="text-[10px] text-[#8b1a1a]">Miễn phí</span>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((id) => (
                           <div 
                             key={id}
                             onClick={() => setSelectedCard(id)}
                             className={`group relative aspect-[3/4] rounded-3xl overflow-hidden border-4 transition-all cursor-pointer ${selectedCard === id ? 'border-[#8b1a1a] shadow-2xl scale-105' : 'border-gray-50 hover:border-gray-200'}`}
                           >
                              <img src={`https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300&auto=format&fit=crop&sig=${id}`} alt="Card" className="w-full h-full object-cover" />
                              <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all ${selectedCard === id ? 'bg-[#8b1a1a] text-white' : 'bg-white/80 opacity-0 group-hover:opacity-100'}`}>
                                 <Check size={14} strokeWidth={4} />
                              </div>
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Hoàn Thành */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto py-20"
            >
              <div className="bg-white rounded-[3rem] p-12 sm:p-20 border border-gray-100 shadow-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                   <Sparkles size={200} className="text-[#8b1a1a]" />
                </div>
                
                <div className="relative z-10 space-y-10">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#8b1a1a]/5 rounded-full flex items-center justify-center mx-auto text-[#8b1a1a] mb-12">
                     <Check size={48} sm:size={64} strokeWidth={4} className="animate-bounce" />
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-4xl text-[#2c3e50]er">Tuyệt vời!</h2>
                    <p className="text-gray-400 font-medium leading-relaxed px-4">
                       Hộp quà tâm giao độc bản của bạn đã được đưa vào giỏ hàng thành công. Hãy tiến hành thanh toán để chúng mình chuẩn bị sớm nhất nhé!
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                    <button 
                      onClick={() => navigate('/gio-hang')}
                      className="w-full sm:w-auto px-12 py-5 bg-[#8b1a1a] text-white rounded-2xl text-[15px] shadow-2xl shadow-[#8b1a1a]/30 transition-all transform hover:-translate-y-1 active:scale-95"
                    >
                      Đi tới giỏ hàng
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentStep(1);
                        setSelectedProducts([]);
                        setSelectedCard(null);
                        setGiftMessage('');
                      }}
                      className="w-full sm:w-auto px-12 py-5 bg-white text-[#2c3e50] border border-gray-100 rounded-2xl text-[15px] shadow-sm hover:bg-gray-50 transition-all"
                    >
                      Tạo thêm hộp quà
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isProductDetailOpen && activeProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-10 backdrop-blur-2xl bg-black/60"
            onClick={() => setIsProductDetailOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button at top right of modal */}
              <button 
                onClick={() => setIsProductDetailOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#8b1a1a] text-white hover:bg-[#701414] transition-all"
              >
                <X size={16} strokeWidth={4} />
              </button>

              <div className="md:w-[45%] p-4 sm:p-8 flex flex-col gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50">
                  <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-full object-cover" />
                </div>
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#8b1a1a]">
                  <img src={activeProduct.image} alt="thumbnail" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="md:w-[55%] p-8 sm:p-12 overflow-y-auto flex flex-col justify-start">
                <div className="space-y-6">
                   <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-[#1e3a5f] leading-tight">{activeProduct.name}</h3>
                      <div className="flex items-center gap-2 text-[#8b1a1a] text-sm font-medium">
                        <div className="flex items-center gap-0.5">
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                          <Star size={12} fill="currentColor" />
                        </div>
                        <span className="text-gray-500">(2 đánh giá của khách hàng)</span>
                      </div>
                   </div>
                   
                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-8">
                      <div className="border border-gray-200 rounded-full px-4 py-3 flex items-center justify-between w-32">
                        <button 
                          onClick={() => setModalQuantity(prev => Math.max(1, prev - 1))}
                          className="text-gray-400 hover:text-[#1e3a5f] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-[#1e3a5f] font-bold text-sm w-8 text-center">
                          {modalQuantity.toString().padStart(2, '0')}
                        </span>
                        <button 
                          onClick={() => setModalQuantity(prev => prev + 1)}
                          className="text-gray-400 hover:text-[#1e3a5f] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => {
                          if (selectedProducts.some(p => p.id === activeProduct.id)) {
                            handleRemoveProduct(activeProduct.id);
                          } else {
                            handleAddProduct(activeProduct, modalQuantity);
                          }
                          setIsProductDetailOpen(false);
                        }}
                        disabled={!selectedProducts.some(p => p.id === activeProduct.id) && calculateUsedCapacity() + ((activeProduct.size || 2) * modalQuantity) > (selectedBox?.capacity || 10)}
                        className={`flex-1 py-3.5 rounded-full text-sm font-bold shadow-lg transition-all ${
                          selectedProducts.some(p => p.id === activeProduct.id)
                          ? 'bg-gray-100 text-[#1e3a5f] shadow-none border border-gray-200'
                          : calculateUsedCapacity() + ((activeProduct.size || 2) * modalQuantity) > (selectedBox?.capacity || 10)
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-[#8b1a1a] text-white hover:bg-[#701414]'
                        }`}
                      >
                        {selectedProducts.some(p => p.id === activeProduct.id) ? (
                          'Bỏ khỏi hộp quà'
                        ) : (
                          'Thêm vào hộp quà'
                        )}
                      </button>
                    </div>

                   <div className="space-y-4 pt-8 border-t border-gray-100">
                      <h4 className="font-black text-[#1e3a5f] text-base uppercase">MÔ TẢ:</h4>
                      <p className="text-sm text-gray-500 italic">Thông tin đang được cập nhật...</p>
                   </div>

                   {/* Suggested Products */}
                   <div className="space-y-4 pt-8 mt-2 border-t border-gray-100">
                      <h4 className="font-black text-[#1e3a5f] text-xs uppercase px-1">Gợi ý sản phẩm có thể thêm:</h4>
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 px-1 pb-4">
                        {filteredProducts.filter(p => p.id !== activeProduct.id).slice(0, 3).map(suggested => (
                          <div 
                            key={suggested.id} 
                            onClick={(e) => {
                              e.stopPropagation();
                              openProductDetail(suggested);
                            }}
                            className="group rounded-2xl cursor-pointer transition-all"
                          >
                            <div className="aspect-square rounded-xl overflow-hidden mb-2 bg-gray-50 border border-gray-100 group-hover:border-[#8b1a1a]/30 transition-colors relative">
                              <img src={suggested.image} alt={suggested.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h5 className="text-[10px] sm:text-xs font-bold text-[#1e3a5f] line-clamp-1 group-hover:text-[#8b1a1a] transition-colors">{suggested.name}</h5>
                            <span className="text-[10px] sm:text-xs text-[#8b1a1a] font-black">{formatPrice(suggested.price)}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/60 flex flex-col justify-end lg:hidden"
          >
            <div className="absolute inset-0" onClick={() => setIsFilterOpen(false)} />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="bg-white w-full rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto relative z-10"
            >
              <div className="sticky top-0 bg-white pb-4 mb-4 border-b border-gray-100 flex justify-between items-center z-20">
                <h2 className="text-[20px] font-bold text-[#1e3a5f]">Lọc sản phẩm</h2>
                <button onClick={() => setIsFilterOpen(false)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500"><X size={18} /></button>
              </div>
              
              <div className="space-y-6 text-[#1e3a5f]">
                  <div className="space-y-4">
                    <h3 className="text-[16px] font-bold text-[#1e3a5f]">Dịp tặng quà</h3>
                    <div className="space-y-3">
                      {['Sinh nhật', 'Kỷ niệm', 'Đám cưới', 'Tân gia', 'Valentine', '8/3', 'Ngày của mẹ', 'Cảm ơn'].map((occ, idx) => {
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
                    <h3 className="text-[16px] font-bold text-[#1e3a5f]">Khoảng giá</h3>
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
                      <span className="text-[16px] font-bold text-[#1e3a5f]">In ảnh miễn phí</span>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={hasFreePhoto}
                        onChange={() => setHasFreePhoto(!hasFreePhoto)} 
                      />
                    </label>
                  </div>

                  <div className="pt-4 sticky bottom-0 bg-white">
                     <button onClick={() => setIsFilterOpen(false)} className="w-full bg-[#8b1a1a] text-white py-3.5 rounded-xl font-bold text-[14px] shadow-lg shadow-[#8b1a1a]/20">Áp dụng bộ lọc</button>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default CreateGiftBoxPage;
