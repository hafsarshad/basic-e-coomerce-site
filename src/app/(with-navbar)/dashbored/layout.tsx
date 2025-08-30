   //src/dashbored/layout.tsx
   
   import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-100 p-4">
        <ul className="space-y-4">
        <li>
            <Link href="/home">
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">home page</button>
            </Link>
          </li>
          <li>
            <Link href="/dashbored/add-product">
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add Product</button>
            </Link>
          </li>
          <li>
            <Link href="/dashbored/view-product">
              <button className="bg-green-600 text-white px-4 py-2 rounded w-full">View Products</button>
            </Link>
          </li>
          <li>
          <Link href="/dashbored/view-orders">
            <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">View Orders</button>
          </Link>
         </li>
        </ul>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}