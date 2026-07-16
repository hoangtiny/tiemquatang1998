import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Star, ChevronDown, ChevronUp, Minus, Plus, Check, ChevronLeft, ChevronRight, Upload, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById } from '../services/productService';

import { products, categories as dataCategories, cardOptions as globalCardOptions, cardMessages } from '../data/products';

const ProductDetailPage = ({ onNavigate }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [activeTab, setActiveTab] = useState('description');
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [driveLink, setDriveLink] = useState('');
  
  const fileInputRef = useRef(null);
  

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Find product by slug locally
        const data = products.find(p => p.slug === slug);
        if (data) {
          setProductData(data);
        } else {
          setProductData(null);
        }
      } catch (error) {
        console.error("Failed to load product", error);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchProduct();
  }, [slug]);

  const handleQuantity = (type) => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'inc' && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const displayData = productData || {
    id: slug || 'pd_default',
    name: 'Sản phẩm không tồn tại',
    price: '0đ',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop'
  };

  const optionGroups = React.useMemo(() => {
    if (!displayData) return [];
    if (displayData.options && displayData.options.length > 0) return displayData.options;
    
    // Backward compatibility with older product format
    const groups = [];
    if (displayData.boxOptions && displayData.boxOptions.length > 0) {
      groups.push({
        name: 'Chọn hộp quà',
        values: displayData.boxOptions.map(box => ({ name: box.name, image: box.image, icon: box.icon }))
      });
    }
    if (displayData.mauOptions && displayData.mauOptions.length > 0) {
      groups.push({
        name: 'Mẫu',
        values: displayData.mauOptions.map(mau => ({ name: mau.name, image: mau.image, icon: mau.icon }))
      });
    }
    if (displayData.cardOptions && displayData.cardOptions.length > 0) {
      groups.push({
        name: 'Thiệp',
        values: displayData.cardOptions.map(card => ({ name: card.name, image: card.image, icon: card.icon }))
      });
    }
    
    return groups;
  }, [displayData]);

  useEffect(() => {
    if (optionGroups.length > 0) {
      const initial = {};
      optionGroups.forEach(group => {
        if (group.values && group.values.length > 0) {
          initial[group.name] = group.values[0].name;
        }
      });
      setSelectedVariants(initial);
    } else {
      setSelectedVariants({});
    }
  }, [optionGroups, displayData.id]);

  if (loading) {
    return <div className="min-h-screen pt-[120px] pb-20 text-center font-medium text-gray-500">Đang tải thông tin sản phẩm...</div>;
  }

  const productImages = [
    displayData.image,
    ...(displayData.additionalImages || [])
  ];

  const nextImages = () => {
    if (startIndex + 5 < productImages.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prevImages = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedPhoto(file);
    }
  };

  const compressImage = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const max_size = 1920;
          if (width > height && width > max_size) {
            height *= max_size / width;
            width = max_size;
          } else if (height > max_size) {
            width *= max_size / height;
            height = max_size;
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // Compress to JPEG with 0.7 quality to keep usually under 1MB
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve({ name: file.name.replace(/\.[^/.]+$/, "") + ".jpg", data: dataUrl });
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const getCartItem = async () => {
    const variantIdSuffix = Object.values(selectedVariants).join('_') || 'default';
    const variantString = Object.entries(selectedVariants).map(([k, v]) => `${k}: ${v}`).join(', ');
    
    let uploadedPhotosData = undefined;
    if (uploadedPhotos.length > 0) {
      uploadedPhotosData = await Promise.all(uploadedPhotos.map(file => compressImage(file)));
    }

    return {
      id: `${displayData.id}_${variantIdSuffix}`.replace(/[\s\/]/g, '-'),
      name: displayData.name,
      price: displayData.price,
      image: displayData.image,
      category: displayData.category,
      tabs: displayData.tabs,
      variants: variantString,
      uploadedPhotos: uploadedPhotosData,
      driveLink: parseInt(quantity, 10) > 2 ? driveLink : undefined
    };
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link 
            to="/" 
            className="hover:text-primary transition-colors"
          >
            Trang chủ
          </Link>
          <span>/</span>
          <Link 
            to="/bo-suu-tap"
            className="hover:text-primary transition-colors"
          >
            Món quà
          </Link>
          <span>/</span>
          <span className="text-dark font-medium">{displayData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="aspect-square rounded-[20px] overflow-hidden bg-gray-50 border border-gray-100 relative group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={productImages[activeImage]} 
                  alt="Product Image" 
                  className="w-full h-full object-cover transform lg:group-hover:scale-110 transition-transform duration-500 cursor-zoom-in"
                />
              </AnimatePresence>
              <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full text-sm">
                Bán chạy
              </div>
            </div>
            
            {/* Thumbnails Gallery */}
            <div className="relative group/gallery">
              <div className="grid grid-cols-5 gap-3">
                {productImages.slice(startIndex, startIndex + 5).map((img, index) => {
                  const actualIndex = startIndex + index;
                  return (
                    <div 
                      key={actualIndex}
                      onClick={() => setActiveImage(actualIndex)}
                      className={`aspect-square rounded-sm overflow-hidden cursor-pointer transition-all border-2 ${
                        activeImage === actualIndex ? 'border-[#ee4d2d]' : 'border-transparent hover:border-[#ee4d2d]/50'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${actualIndex}`} className="w-full h-full object-cover" />
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation Arrows */}
              {productImages.length > 5 && startIndex > 0 && (
                <button 
                  onClick={prevImages}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-10 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors shadow-sm opacity-0 group-hover/gallery:opacity-100"
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              {productImages.length > 5 && startIndex + 5 < productImages.length && (
                <button 
                  onClick={nextImages}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-10 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors shadow-sm opacity-0 group-hover/gallery:opacity-100"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            <h1 className="text-[28px] md:text-3xl font-bold text-[#2c3e50] mb-2 uppercase">
              {displayData.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-2 mt-2">
              <span className="text-[32px] font-bold text-[#800000] leading-none">{displayData.price}</span>
              {displayData.originalPrice && (
                <span className="text-gray-400 text-lg line-through font-medium self-end pb-[2px]">{displayData.originalPrice}</span>
              )}
            </div>
            
            {/* Reviews */}
            <div className="flex items-center gap-2 mb-6 text-sm">
               <div className="flex text-[#800000]">
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
               </div>
               <span className="text-[#3b4b5e] font-medium">(100 đánh giá của khách hàng)</span>
            </div>

            {/* Generic Option Selectors */}
            {optionGroups.length > 0 && (
              <div className="space-y-4 mb-8">
                {optionGroups.map((group, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-full text-base font-semibold text-[#1e3a8a]">
                      {group.name}:
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {group.values.map((val, vIdx) => {
                        const isSelected = selectedVariants[group.name] === val.name;
                        return (
                          <button
                            key={vIdx}
                            onClick={() => setSelectedVariants({...selectedVariants, [group.name]: val.name})}
                            className={`relative flex items-center justify-center gap-2 px-3 py-2 border rounded-md transition-all focus:outline-none bg-white overflow-hidden min-w-[3.5rem] min-h-[2.5rem] ${
                              isSelected 
                                ? 'border-[#8c1515] text-[#1e3a8a]' 
                                : 'border-gray-300 text-[#3b4b5e] hover:border-gray-400'
                            }`}
                          >
                            {val.image && <img src={val.image} className="w-6 h-6 object-cover rounded-sm" alt={val.name} />}
                            {val.icon && <span className="text-lg">{val.icon}</span>}
                            <span className="text-sm font-medium pr-1">{val.name}</span>
                            
                            {/* Checkmark Triangle */}
                            {isSelected && (
                              <div className="absolute bottom-0 right-0 w-[16px] h-[16px] overflow-hidden rounded-br-md">
                                <div className="absolute bottom-[-16px] right-[-16px] w-8 h-8 bg-[#8c1515] transform rotate-45 origin-center"></div>
                                <Check size={10} strokeWidth={4} className="text-white absolute bottom-[1px] right-[1px] z-10" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-5 mb-10 w-full lg:w-[480px]">
              <div className="flex items-center gap-4">
                <span className="text-[#757575] text-sm hidden sm:inline-block min-w-[70px]">Số Lượng</span>
                <div className="flex items-center border border-gray-300 rounded-sm bg-white h-8 w-[114px]">
                  <button onClick={() => handleQuantity('dec')} className="w-8 flex justify-center items-center text-gray-500 hover:bg-gray-50 h-full border-r border-gray-200 transition-colors">
                    <Minus size={14} />
                  </button>
                  <input 
                    type="text" 
                    value={quantity} 
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      if (val === '') {
                        setQuantity('');
                      } else {
                        const num = parseInt(val, 10);
                        const max = displayData.capacity || 50;
                        if (num > max) {
                          setQuantity(max);
                        } else if (num > 0) {
                          setQuantity(num);
                        }
                      }
                    }}
                    onBlur={() => {
                      if (quantity === '' || quantity < 1) setQuantity(1);
                    }}
                    className="flex-1 w-full text-center text-sm font-medium text-[#ee4d2d] focus:outline-none"
                  />
                  <button onClick={() => handleQuantity('inc')} className="w-8 flex justify-center items-center text-gray-500 hover:bg-gray-50 h-full border-l border-gray-200 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
                <span className="text-[#757575] text-sm ml-2">
                  {displayData.capacity || 50} sản phẩm có sẵn
                </span>
              </div>

              {/* Free Photo Upload Section */}
              {displayData?.freePhoto && (
                <div className="flex flex-col gap-2 mt-2 mb-2">
                  <span className="text-sm font-semibold text-[#1e3a8a]">In ảnh miễn phí:</span>
                  
                  {parseInt(quantity, 10) > 2 ? (
                    <div className="flex flex-col gap-3">
                      <p className="text-sm text-gray-600">Với đơn hàng trên 2 sản phẩm, vui lòng gửi link Google Drive chứa ảnh của bạn.</p>
                      <input 
                        type="url" 
                        placeholder="Dán link Google Drive tại đây..."
                        value={driveLink}
                        onChange={(e) => setDriveLink(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                      />
                      <a 
                        href="https://zalo.me/0339267766" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors text-sm font-medium w-fit shadow-sm"
                      >
                        Liên hệ Zalo Tiệm 1998
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          disabled={uploadedPhotos.length >= Math.min(quantity, 2)}
                          className={`flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary rounded-md transition-colors text-sm font-medium ${uploadedPhotos.length >= Math.min(quantity, 2) ? 'opacity-50 cursor-not-allowed hidden' : ''}`}
                        >
                          <Upload size={16} />
                          Tải ảnh lên ({uploadedPhotos.length}/{Math.min(quantity, 2)})
                        </button>
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            const files = Array.from(e.target.files);
                             setUploadedPhotos(prev => {
                               const newPhotos = [...prev, ...files];
                               // Chỉ giữ lại số lượng ảnh tối đa bằng số lượng sản phẩm nhưng không quá 2
                               return newPhotos.slice(0, Math.min(quantity, 2));
                             });
                            // Reset input value to allow selecting the same file again
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                        />
                      </div>
                      
                      {uploadedPhotos.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {uploadedPhotos.map((photo, index) => (
                            <div key={index} className="flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1.5 rounded-md border border-blue-100">
                              <ImageIcon size={14} className="text-blue-600 flex-shrink-0" />
                              <span className="text-xs font-medium max-w-[100px] truncate">{photo.name}</span>
                              <button 
                                onClick={() => {
                                  setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
                                }}
                                className="text-blue-400 hover:text-red-500 transition-colors ml-1 flex-shrink-0"
                                title="Xóa ảnh"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                       <p className="text-xs text-gray-500 italic">Áp dụng in miễn phí tối đa 2 ảnh cho mỗi đơn hàng (1 ảnh/sản phẩm, tối đa 2 ảnh).</p>
                    </>
                  )}
                </div>
              )}

              {/* Requirement Warning */}
               {displayData?.freePhoto && (
                 parseInt(quantity, 10) <= 2 ? (
                   uploadedPhotos.length < parseInt(quantity, 10) && (
                     <p className="text-sm font-medium text-red-500 mb-1">
                       Vui lòng tải lên đủ {quantity} ảnh để tiếp tục!
                     </p>
                   )
                 ) : (
                   driveLink.trim() === '' && (
                     <p className="text-sm font-medium text-red-500 mb-1">
                       Vui lòng cung cấp link Google Drive để tiếp tục!
                     </p>
                   )
                 )
               )}

              <div className="flex flex-row gap-3 w-full">
                {/* Add to Cart Outline button */}
                <button 
                  onClick={async () => {
                    const item = await getCartItem();
                    addToCart(item, quantity);
                    alert("Thêm vào giỏ hàng thành công!");
                  }}
                   disabled={displayData?.freePhoto && (
                     parseInt(quantity, 10) <= 2 
                       ? uploadedPhotos.length < parseInt(quantity, 10)
                       : driveLink.trim() === ''
                   )}
                   className={`flex-1 sm:flex-none h-11 px-2 sm:px-6 bg-[#ffeee8] border border-[#ee4d2d] text-[#ee4d2d] font-semibold text-xs sm:text-[15px] whitespace-nowrap rounded-sm flex items-center justify-center gap-1 sm:gap-1.5 ${
                     displayData?.freePhoto && (
                       parseInt(quantity, 10) <= 2 
                         ? uploadedPhotos.length < parseInt(quantity, 10)
                         : driveLink.trim() === ''
                     )
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-[#fff5f1] transition-colors'
                  }`}
                >
                  <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden min-[380px]:inline">Thêm vào giỏ</span>
                  <span className="inline min-[380px]:hidden">Thêm</span>
                </button>

                {/* Buy Now Solid button */}
                <button 
                  onClick={async () => {
                    const item = await getCartItem();
                    addToCart(item, quantity);
                    navigate('/checkout');
                  }}
                   disabled={displayData?.freePhoto && (
                     parseInt(quantity, 10) <= 2 
                       ? uploadedPhotos.length < parseInt(quantity, 10)
                       : driveLink.trim() === ''
                   )}
                   className={`flex-1 sm:flex-none h-11 px-3 sm:px-10 border border-[#ee4d2d] bg-[#ee4d2d] text-white font-semibold text-[13px] sm:text-[15px] whitespace-nowrap shadow-sm rounded-sm ${
                     displayData?.freePhoto && (
                       parseInt(quantity, 10) <= 2 
                         ? uploadedPhotos.length < parseInt(quantity, 10)
                         : driveLink.trim() === ''
                     )
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:opacity-90 transition-colors'
                  }`}
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="mt-16 sm:mt-24 w-full">
          <div className="flex bg-[#2c3e50] text-gray-300 text-sm overflow-x-auto hide-scrollbar rounded-t-lg">
            <button 
              onClick={() => setActiveTab('description')}
              className={`py-4 px-6 whitespace-nowrap font-medium transition-colors relative border-r border-[#3b4b5e] ${activeTab === 'description' ? 'text-white bg-[#3b4b5e]' : 'hover:text-white'}`}
            >
              Mô tả sản phẩm
            </button>
            {displayData.category === 'Set quà' && (
              <button 
                onClick={() => setActiveTab('includes')}
                className={`py-4 px-6 whitespace-nowrap font-medium transition-colors relative border-r border-[#3b4b5e] ${activeTab === 'includes' ? 'text-white bg-[#3b4b5e]' : 'hover:text-white'}`}
              >
                Set quà bao gồm
              </button>
            )}
            <button 
              onClick={() => setActiveTab('delivery')}
              className={`py-4 px-6 whitespace-nowrap font-medium transition-colors relative border-r border-[#3b4b5e] ${activeTab === 'delivery' ? 'text-white bg-[#3b4b5e]' : 'hover:text-white'}`}
            >
              Đóng gói và vận chuyển
            </button>
            <button 
              onClick={() => setActiveTab('video')}
              className={`py-4 px-6 whitespace-nowrap font-medium transition-colors relative ${activeTab === 'video' ? 'text-white bg-[#3b4b5e]' : 'hover:text-white'}`}
            >
              Video
            </button>
          </div>

          <div className="p-6 md:p-8 bg-[#f8f9fa] border-b border-x border-gray-200 rounded-b-lg text-[15px] text-[#3b4b5e]">
            {activeTab === 'description' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="whitespace-pre-wrap leading-relaxed">{displayData.tabs?.description || displayData.description || 'Chưa có mô tả cho sản phẩm này.'}</div>
              </motion.div>
            )}

            {activeTab === 'includes' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
                <h3 className="text-[26px] font-bold text-gray-800 mb-8 pl-4">Hộp quà bao gồm</h3>
                {(displayData.tabs?.includes || []).length > 0 ? (
                  <div className="relative border-l-2 border-gray-300 ml-8 space-y-10 pb-4">
                    {displayData.tabs.includes.map((item, idx) => (
                      <div key={idx} className="relative flex items-center justify-between pl-8 pr-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3b4b5e] rounded-full"></div>
                        
                        {/* Item Content */}
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-semibold text-[#3b4b5e] text-lg">{item.name}</span>
                        </div>
                        
                        {/* Quantity */}
                        <div className="text-gray-500 font-medium whitespace-nowrap">
                          SL: x{item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="pl-4">Thông tin đang được cập nhật...</p>
                )}
              </motion.div>
            )}
            
            {activeTab === 'delivery' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h4 className="font-bold text-dark mb-2">Thời gian giao hàng:</h4>
                <p className="mb-4">- Nội thành HN & HCM: Giao hỏa tốc 2H hoặc trong ngày.</p>
                <p className="mb-6">- Các tỉnh thành khác: Từ 2-4 ngày làm việc tuỳ khu vực.</p>
                <h4 className="font-bold text-dark mb-2">Quy cách đóng gói:</h4>
                <p>Mỗi set quà được lót giấy rơm chống sốc, chèn xốp bong bóng cẩn thận và đặt trong hộp carton cứng bảo vệ bên ngoài, đảm bảo không móp méo khi vận chuyển xa.</p>
              </motion.div>
            )}

            {activeTab === 'video' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center">
                 {displayData.tabs?.video ? (
                   <video 
                     controls 
                     src={displayData.tabs.video} 
                     className="w-full max-w-2xl aspect-video rounded-xl shadow-sm bg-black"
                   >
                     Trình duyệt của bạn không hỗ trợ thẻ video.
                   </video>
                 ) : (
                   <div className="bg-gray-200 w-full max-w-2xl aspect-video rounded-xl flex items-center justify-center text-gray-500">
                     Chưa có video cho sản phẩm này
                   </div>
                 )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
