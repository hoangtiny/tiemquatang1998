import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Gift, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const MobileBottomNav = () => {
  const { cartCount } = useCart();

  const navItems = [
    { to: '/', icon: Home, label: 'Trang chủ' },
    { to: '/bo-suu-tap', icon: Search, label: 'Tìm kiếm' },
    { to: '/tu-lam-hop-qua', icon: Gift, label: 'Tạo hộp quà' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#800000] text-white z-50 flex justify-around items-center h-16 px-4 pb-safe border-t border-[#600000] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center w-full h-full transition-all ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
            }
          >
            <Icon size={24} strokeWidth={isActive => isActive ? 2.5 : 2} className="mb-0.5" />
          </NavLink>
        );
      })}
      
      {/* Cart Item acts as a NavLink to Cart Page */}
      <NavLink
        to="/gio-hang"
        className={({ isActive }) => 
          `flex flex-col items-center justify-center w-full h-full transition-all relative ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
        }
      >
        <div className="relative">
          <ShoppingBag size={24} strokeWidth={2} className="mb-0.5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#800000]">
              {cartCount}
            </span>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default MobileBottomNav;
