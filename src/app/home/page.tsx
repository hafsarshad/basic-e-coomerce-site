//home>page.tsx
// after cart  
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      alert('You must sign up first.');
      router.push('/auth/signup'); // 👈 redirect to signup instead
      return;
    }
  
    addToCart(product);
    router.push('/checkout'); // only if signed in
  };
  return (
    <div className="p-4 ">
      <div className="text-right mb-4">
  
        <Link href="/auth/login" className="bg-blue-500 text-white py-2 px-4 rounded mx-2">Login</Link>
        <Link href="/auth/signup" className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</Link>
      </div>

    <div className="bg-lightgray text-black font-instrument p-6 text-xl">
      Tailwind v4 is fully working!
    </div>

      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul className="w-full  flex ">
        {products.map(product => (
          <li key={product._id} className="border p-4 mx-2 w-1/3 rounded">
            <h3 className="font-semibold">{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-green-500 text-white py-1 px-3 rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
