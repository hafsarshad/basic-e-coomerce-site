// src/app/dashbored/page.tsx
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import Link from 'next/link';


export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return <p>Unauthorized</p>;

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string; role: string };

  if (decoded.role !== 'admin') {
    return <p>Access denied</p>;
  }

  
  return(<div className="p-4">
  <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
 
</div>)
}