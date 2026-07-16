import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, Sparkles, Heart } from 'lucide-react';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, formatPrice } = useCart();
  
  // By default, select all items
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems(cartItems.map(item => item.cartId));
  }, [cartItems.length]); // Re-sync when items are added/removed

  const toggleSelect = (cartId) => {
    setSelectedItems(prev => 
      prev.includes(cartId) ? prev.filter(id => id !== cartId) : [...prev, cartId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.cartId));
    }
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;
    navigate('/checkout', { state: { selectedItems } });
  };

  const calculateTotal = () => {
    return cartItems
      .filter(item => selectedItems.includes(item.cartId))
      .reduce((total, item) => {
        const price = typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, '')) : item.price;
        return total + (price * item.quantity);
      }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <Trash2 size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-[#1e3a5f]">Giỏ hàng của bạn đang trống</h2>
        <button onClick={() => navigate('/bo-suu-tap')} className="bg-[#8b1a1a] text-white px-8 py-3 rounded-full font-bold hover:bg-[#701414] transition-colors shadow-lg">
          Tiếp tục mua sắm
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom max-w-6xl">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-8">Giỏ hàng</h1>
        
        <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-5 bg-[#f8fafc] border-b border-gray-100 text-[13px] font-bold text-[#475569]">
            <div className="col-span-5 flex items-center gap-4">
               <input 
                 type="checkbox" 
                 checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                 onChange={toggleSelectAll}
                 className="w-4 h-4 rounded text-[#8b1a1a] focus:ring-[#8b1a1a] border-gray-300 cursor-pointer" 
               />
               <span>Thông tin sản phẩm</span>
            </div>
            <div className="col-span-2 text-center">Đơn giá</div>
            <div className="col-span-2 text-center">Số lượng</div>
            <div className="col-span-2 text-center">Thành tiền</div>
            <div className="col-span-1 text-center">Thao tác</div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => {
              const itemPrice = typeof item.price === 'string' ? parseInt(item.price.replace(/\D/g, '')) : item.price;
              const isSelected = selectedItems.includes(item.cartId);

              return (
                <div key={item.cartId} className="p-5 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="w-full md:col-span-5 flex items-start gap-4">
                    <input 
                      type="checkbox" 
                      checked={isSelected}
                      onChange={() => toggleSelect(item.cartId)}
                      className="w-4 h-4 rounded text-[#8b1a1a] focus:ring-[#8b1a1a] border-gray-300 mt-5 cursor-pointer" 
                    />
                    
                    <div className="w-24 h-24 rounded-[14px] overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0 py-1">
                      <h3 className="font-bold text-[#1e3a5f] text-sm uppercase mb-1">{item.name}</h3>
                      
                      {item.isCustomBox && (
                        <div className="space-y-3 mt-3 px-1">
                          <p className="text-[12px] font-bold text-[#2c3e50] flex items-center gap-1.5">
                            <Sparkles size={12} className="text-[#8b1a1a]" />
                            CHI TIẾT HỘP QUÀ:
                          </p>
                          <div className="relative border-l border-gray-100 ml-1.5 pl-4 space-y-3">
                            {item.card && (
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-md bg-[#fff5f1] flex items-center justify-center shrink-0 border border-[#ee4d2d]/10">
                                  <Heart size={14} className="text-[#ee4d2d]" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-[11px] font-semibold text-[#334155] leading-none uppercase">Thiệp {item.card.name}</p>
                                  {item.message && <p className="text-[10px] text-[#8b1a1a] italic mt-0.5 truncate max-w-[150px]">"{item.message}"</p>}
                                </div>
                              </div>
                            )}
                            {item.items.map((sub, idx) => (
                              <div key={idx} className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-md bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                                  <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-[11px] font-medium text-[#475569] leading-tight truncate max-w-[160px]">{sub.name}</p>
                                  <p className="text-[10px] font-bold text-[#8b1a1a]">SL: x{sub.quantity || 1}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {!item.isCustomBox && item.category === 'Set quà' && item.tabs?.includes && (
                        <div className="space-y-3 mt-3 px-1">
                          <p className="text-[12px] font-bold text-[#2c3e50] flex items-center gap-1.5 uppercase">
                            <Sparkles size={12} className="text-[#8b1a1a]" />
                            Set quà bao gồm:
                          </p>
                          <div className="relative border-l border-gray-100 ml-1.5 pl-4 space-y-3">
                            {item.tabs.includes.map((sub, idx) => (
                              <div key={idx} className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-md bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
                                  <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-[11px] font-medium text-[#475569] leading-tight truncate max-w-[160px]">{sub.name}</p>
                                  <p className="text-[10px] font-bold text-[#8b1a1a]">SL: x{sub.quantity || 1}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.driveLink && (
                        <p className="text-[12px] text-blue-600 mt-2 bg-blue-50 px-2 py-1 rounded inline-block">
                          Link ảnh: <a href={item.driveLink} target="_blank" rel="noreferrer" className="underline truncate max-w-[150px] inline-block align-bottom">{item.driveLink}</a>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-xs text-gray-500">Đơn giá:</span>
                    <span className="font-bold text-[#1e3a5f] text-[13px]">{formatPrice(itemPrice)}</span>
                  </div>

                  <div className="w-full md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="md:hidden text-xs text-gray-500">Số lượng:</span>
                    <div className="flex items-center border border-gray-200 rounded-full px-3 py-1.5 bg-white">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="text-gray-400 hover:text-[#1e3a5f] px-1"
                      >
                        <Minus size={14} strokeWidth={3} />
                      </button>
                      <span className="text-[13px] font-bold text-[#1e3a5f] w-8 text-center">{item.quantity < 10 ? `0${item.quantity}` : item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="text-gray-400 hover:text-[#1e3a5f] px-1"
                      >
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>

                  <div className="w-full md:col-span-2 flex justify-between md:justify-center items-center border-t border-gray-50 md:border-0 pt-3 md:pt-0 mt-3 md:mt-0">
                    <span className="md:hidden text-xs text-gray-500">Thành tiền:</span>
                    <span className="font-black text-[#8b1a1a] text-sm">{formatPrice(itemPrice * item.quantity)}</span>
                  </div>

                  <div className="w-full md:col-span-1 flex justify-end md:justify-center items-center">
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-gray-400 hover:text-[#8b1a1a] text-xs transition-colors flex items-center justify-center"
                    >
                      <span className="md:hidden mr-1 text-[#8b1a1a] font-medium">Xóa</span>
                      <span className="hidden md:inline">Xóa</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Bottom Bar (Desktop & Mobile) */}
        <div className="fixed sm:sticky pb-safe bottom-16 sm:bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 sm:rounded-t-[20px] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] sm:shadow-lg p-4 sm:p-5 flex md:flex-row items-center justify-between gap-4">
           <div className="hidden sm:flex text-sm text-[#475569] font-medium px-2">
              <span>Đã chọn: {selectedItems.length}/{cartItems.length}</span>
           </div>

           <div className="w-full sm:w-auto flex items-center justify-between gap-4 md:gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                 <span className="text-xs sm:text-sm text-[#475569] font-medium leading-none">Tổng tiền:</span>
                 <span className="text-xl md:text-2xl font-black text-[#8b1a1a] tabular-nums leading-none mt-1 sm:mt-0">{formatPrice(calculateTotal())}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={selectedItems.length === 0}
                className={`flex-1 sm:flex-none px-6 py-3.5 rounded-full text-[13px] font-bold shadow-lg transition-transform ${selectedItems.length > 0 ? 'bg-[#8b1a1a] text-white hover:-translate-y-1 shadow-[#8b1a1a]/25' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Thanh toán
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
