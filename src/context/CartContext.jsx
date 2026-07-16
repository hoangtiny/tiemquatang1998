import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('teamo_cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        console.error('Error loading cart', e);
        return [];
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('teamo_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      // Products with personalization (photos or driveLink) should NEVER be merged
      const hasPersonalization = (product.uploadedPhotos && product.uploadedPhotos.length > 0) || product.driveLink;

      if (!hasPersonalization) {
        const existing = prev.find(item => item.id === product.id && !item.uploadedPhotos && !item.driveLink);
        if (existing) {
          return prev.map(item =>
            item === existing ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
      }

      // Add as new item with unique cartId
      return [...prev, { ...product, quantity, cartId: Date.now() + Math.random().toString(36).substr(2, 9) }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item =>
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const parsePrice = (priceVal) => {
    if (!priceVal) return 0;
    if (typeof priceVal === 'number') return priceVal;
    return parseInt(priceVal.toString().replace(/\D/g, ''));
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + (parsePrice(item.price) * item.quantity);
  }, 0);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart,
      cartTotal,
      cartCount,
      formatPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
