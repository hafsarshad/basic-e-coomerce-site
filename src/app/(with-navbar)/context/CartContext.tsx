// src/context/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '@/types';

type CartItem = Product & {
  quantity: number;
  userId: string;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from sessionStorage on first render
  useEffect(() => {
    const stored = sessionStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      alert('You must sign up first.');
      return;
    }

    setCart(prev => {
      const existing = prev.find(item => item._id === product._id && item.userId === userId);
      if (existing) {
        return prev.map(item =>
          item._id === product._id && item.userId === userId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, userId }];
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
