// import { Product } from '@/types';
// import Link from 'next/link';

// async function getProducts(): Promise<Product[]> {
//   const res = await fetch('http://localhost:3000/api/products', {
//     cache: 'no-store',
//   });
//   return res.json();
// }

// export default async function HomePage() {
//   const products = await getProducts();

//   return (
//     <div className="p-4">
//     {/* add login or sign in button here */}
//     <div className="text-right mb-4 ">
//         <Link href="/auth/login" className="bg-blue-500 text-white py-2  mx-4 px-4 rounded">
//           Login
//         </Link>
//         <Link href="/auth/signup" className="bg-blue-500 text-white py-2 px-4 rounded">
//          signIn
//         </Link>
//       </div>
//       <h2 className="text-xl font-bold mb-4">Products</h2>
//       <ul className="space-y-4">
//         {products.map(product => (
//           <li key={product._id} className="border p-4 rounded">
//             <h3 className="font-semibold">{product.title}</h3>
//             <p>{product.description}</p>
//             <p><strong>Price:</strong> ${product.price}</p>
//             <p><strong>Color:</strong> {product.color}</p>
//             <Link href={`/products/${product._id}`} className="text-blue-500">View Details</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
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
    addToCart(product);
    router.push('/checkout');
  };

  return (
    <div className="p-4">
      <div className="text-right mb-4">
        <Link href="/auth/login" className="bg-blue-500 text-white py-2 px-4 rounded mx-2">Login</Link>
        <Link href="/auth/signup" className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</Link>
      </div>

      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product._id} className="border p-4 rounded">
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
