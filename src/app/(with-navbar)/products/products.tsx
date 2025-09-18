'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';
//import Carousel from '../../components/carousel';

export default function ProductsPage() {
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
    <div className="p-6 md:p-20">

      
      <h2 className="text-xl font-bold mb-4">Products</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <li key={product._id} className="border p-4 rounded shadow bg-white">
              {product.image ? (
              <div className="w-full h-40 mb-2 rounded overflow-hidden flex items-center justify-center bg-gray-100">
               <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
              </div>
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-2 rounded">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              <h3 className="font-semibold">{product.title}</h3>
              <p>{product.description}</p>
              {product.color && <p><strong>Color:</strong> {product.color}</p>}
              {product.price !== undefined && <p><strong>Price:</strong> ${product.price}</p>}

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
