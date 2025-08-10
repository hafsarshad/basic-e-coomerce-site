// src/app/dashbored/view-product/page.tsx
import Link from 'next/link';

type Product = {
  _id: string;
  title: string;
  description: string;
  color?: string;
  price?: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  return res.json();
  
}

export default async function ViewProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product._id} className="border p-4 ">
            <h3 className="font-semibold">{product.title}</h3>
            <p>{product.description}</p>
            {product.color && <p><strong>Color:</strong> {product.color}</p>}
            {product.price && <p><strong>Price:</strong> ${product.price}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
