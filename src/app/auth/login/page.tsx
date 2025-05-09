
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginUser } from '../action';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const res = await loginUser(formData);
    console.log("🚦 login response:", res);
  
    if (res?.error) {
      setError(res.error);
    } else if (typeof res?.redirect === "string") {
      router.push(res.redirect);
    } else {
      setError("Unexpected error occurred");
    }
  };
  

  return (
    <form className='w-lg space-y-4 mx-auto' onSubmit={handleSubmit}>
      <h2>only for admin</h2>
      <input className='border py-1   w-full' name="email" placeholder="Email" type="email" required />
      <input className='border  w-full ' name="password" placeholder="Password" type="password" required autoComplete="current-password" />
      <button className='bg-cyan-700 ' type="submit">Login</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
