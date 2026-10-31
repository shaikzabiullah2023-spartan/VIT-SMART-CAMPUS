import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'verdant_cart_items';
const FREE_SHIPPING_THRESHOLD = 2000;
const STANDARD_SHIPPING_FEE = 150;
const CARBON_OFFSET_FEE = 49;

export const CartProvider = ({ children }) => {
  const { showToast } = useToast();

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [includeCarbonOffset, setIncludeCarbonOffset] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            quantity: quantity,
            impact: product.impact
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to your eco-cart!`, 'success');
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    const item = cart.find((i) => i.id === productId);
    setCart((prev) => prev.filter((item) => item.id !== productId));
    if (item) {
      showToast(`Removed "${item.name}" from cart.`, 'info');
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: Math.min(newQuantity, 10) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const isFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0;
  const shippingFee = isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const carbonOffset = includeCarbonOffset && cart.length > 0 ? CARBON_OFFSET_FEE : 0;
  const cartTotal = cartSubtotal + shippingFee + carbonOffset;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isFreeShipping,
        shippingFee,
        includeCarbonOffset,
        setIncludeCarbonOffset,
        carbonOffset,
        cartTotal,
        progressToFreeShipping,
        amountNeededForFreeShipping,
        FREE_SHIPPING_THRESHOLD
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

