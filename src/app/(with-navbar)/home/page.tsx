//app>(with navbar)>home>page.tsx
// after cart  
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';
import Header from '../../components/header'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      alert('You must sign up first.');
      router.push('/auth/signup');
      return;
    }

    addToCart(product);
    router.push('/checkout');
  };

  return (

    <div >
        <Header/>
     
    </div> 
  );
}
