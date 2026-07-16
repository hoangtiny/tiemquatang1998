import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import CreateGiftBoxPage from './pages/CreateGiftBoxPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import OrderLookupPage from './pages/OrderLookupPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// ... existing imports
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen font-sans">
          <Header />

          <main className="flex-grow pt-[88px] pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bo-suu-tap" element={<ProductListPage />} />
              <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/tu-lam-hop-qua" element={<CreateGiftBoxPage />} />
              <Route path="/kiem-tra-don-hang" element={<OrderLookupPage />} />
              <Route path="/gioi-thieu" element={<AboutPage />} />
              <Route path="/admin" element={<AdminOrdersPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/gio-hang" element={<CartPage />} />
            </Routes>
          </main>
          
          <Footer />
          <MobileBottomNav />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
