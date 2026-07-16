import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ onCheckout, onNavigate }) => {
  const navigate = useNavigate();
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, formatPrice, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm"
            onClick={toggleCart}
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[210] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold flex items-center gap-2 text-dark">
                <ShoppingBag size={24} className="text-primary" />
                Giỏ hàng của bạn
              </h2>
              <button 
                onClick={toggleCart}
                className="text-gray-400 hover:text-dark transition-colors p-2 hover:bg-gray-50 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <div className="w-24 h-24 bg-primary-light/30 rounded-full flex items-center justify-center">
                    <ShoppingBag size={48} className="text-primary-light" />
                  </div>
                  <p className="text-lg">Giỏ hàng đang trống</p>
                  <button 
                    onClick={() => {
                      toggleCart();
                      navigate('/bo-suu-tap');
                    }}
                    className="btn-outline mt-4"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => {
                    const isPersonalized = (item.uploadedPhotos && item.uploadedPhotos.length > 0) || item.driveLink;
                    return (
                      <div key={item.cartId} className="flex gap-4 group">
                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-semibold text-dark text-sm line-clamp-2 pr-4">{item.name}</h3>
                              <button 
                                onClick={() => removeFromCart(item.cartId)}
                                className="text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 p-1 rounded-full shrink-0"
                              >
                                <X size={14} />
                              </button>
                            </div>
                            
                            {/* Formatting Price */}
                            <p className="text-primary font-bold mt-1 text-sm">{typeof item.price === 'number' ? formatPrice(item.price) : item.price}</p>
                            
                            {/* Sub-items for Custom Box */}
                            {item.isCustomBox && (
                              <div className="mt-2 space-y-1">
                                {item.box && <p className="text-xs text-gray-500">• {item.box.name}</p>}
                                {item.items && item.items.length > 0 && <p className="text-xs text-gray-500">• {item.items.length} phần quà con</p>}
                                {item.card && <p className="text-xs text-gray-500">• Thiệp: {item.card.name}</p>}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className={`flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5 ${isPersonalized ? 'opacity-60' : ''}`}>
                              <button 
                                onClick={() => !isPersonalized && updateQuantity(item.cartId, item.quantity - 1)}
                                disabled={isPersonalized}
                                className={`w-7 h-7 flex items-center justify-center transition-colors rounded ${isPersonalized ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-primary hover:bg-white'}`}
                                title={isPersonalized ? "Số lượng cố định cho sản phẩm in ảnh" : "Giảm số lượng"}
                              >
                                <Minus size={14} />
                              </button>
                              <span className={`w-8 text-center text-sm font-medium ${isPersonalized ? 'text-gray-400' : ''}`}>{item.quantity}</span>
                              <button 
                                onClick={() => !isPersonalized && updateQuantity(item.cartId, item.quantity + 1)}
                                disabled={isPersonalized}
                                className={`w-7 h-7 flex items-center justify-center transition-colors rounded ${isPersonalized ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-primary hover:bg-white'}`}
                                title={isPersonalized ? "Số lượng cố định cho sản phẩm in ảnh" : "Thêm số lượng"}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Tổng cộng:</span>
                  <span className="text-2xl font-bold text-primary">{formatPrice(cartTotal)}</span>
                </div>
                <button 
                  onClick={() => {
                    toggleCart();
                    navigate('/checkout');
                  }}
                  className="w-full btn-primary text-lg h-14 flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  Tiến hành thanh toán
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
