import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Gift, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', route: '/' },
    { name: 'Tự làm hộp quà', route: '/tu-lam-hop-qua' },
    { name: 'Bộ Sưu Tập', route: '/bo-suu-tap' },
    { name: 'Kiểm tra đơn hàng', route: '/kiem-tra-don-hang' },
    { name: 'Giới Thiệu', route: '/gioi-thieu' },
  ];

  const handleMobileNavClick = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5 border-b border-gray-100'
        }`}
      >
      <div className="container-custom flex items-center justify-between">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link 
          to="/"
          className="flex-shrink-0 flex items-center gap-2 cursor-pointer card-hover"
        >
          <Logo className="w-14 h-14 md:w-[68px] md:h-[68px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.route}
              className={`font-semibold text-[15px] transition-colors relative group py-2 ${
                location.pathname === link.route ? 'text-primary' : 'text-dark hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                location.pathname === link.route ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Actions (Search, Cart) */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <button 
            onClick={() => navigate('/bo-suu-tap')}
            className="text-dark hover:text-primary transition-colors"
          >
            <Search size={22} className="stroke-[2.5]" />
          </button>

          <button 
            onClick={() => navigate('/gio-hang')}
            className="text-dark hover:text-primary transition-colors relative group"
          >
            <ShoppingCart size={22} className="stroke-[2.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

    </header>

    {/* Mobile Navigation Drawer - Moved outside <header> for proper stacking context */}
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark/70 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-[20px_0_60px_-15px_rgba(0,0,0,0.3)] p-6 flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-10">
              <Logo className="w-14 h-14" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-gray-light rounded-full text-dark hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 mb-8">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleMobileNavClick(link.route)}
                  className={`text-lg font-bold py-4 px-5 rounded-2xl text-left transition-all ${
                      location.pathname === link.route 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'text-dark hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Mobile Footer Section */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="mt-10 text-center">
                <p className="text-[10px] text-gray-dark uppercase tracking-widest font-bold">
                  © 2026 Tiệm 1998
                </p>
                <p className="text-[10px] text-gray-dark/60 mt-1">
                  Gói trọn chân thành trong từng món quà
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </>
);
};

export default Header;
