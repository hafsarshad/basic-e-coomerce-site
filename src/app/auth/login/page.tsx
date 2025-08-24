
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginUser } from '../action';
import Image from 'next/image';
import Logo from '../../../assests/logo.png';
import backgroundImage from '../../../assests/login.png'

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
<div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
    <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(${backgroundImage.src})`,}} />
      {/*form*/}
  <form onSubmit={handleSubmit} className="relative z-20 space-y-4 p-4 max-w-xs 2xl:max-w-2xl  w-full rounded-lg shadow-lg bg-[#f3f4f6]/20 backdrop-blur-md border border-white/30">
    {/* Logo */}
    <div className=" w-36 mx-auto relative  -mt-4 "><Image src={Logo} alt="Logo" className="object-contain" /></div>
     {/* heading */}
     <h1 className="text-center text-xl font-bold text-logoblack ">Login</h1>
      <input className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen" name="email" placeholder="Email" type="email" required />
      <input className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen" name="password" placeholder="Password" type="password" required autoComplete="current-password" />
      <button className="w-full p-2 rounded bg-requiredgreen  text-white hover:bg-hovergreen transition" type="submit">Login</button>
      {error && <p className="text-red-500">{error}</p>}
  </form>
</div>










    // <form className='w-lg space-y-4 mx-auto' onSubmit={handleSubmit}>
    //   <h2>only for admin</h2>
    //   <input className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen" name="email" placeholder="Email" type="email" required />
    //   <input className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen" name="password" placeholder="Password" type="password" required autoComplete="current-password" />
    //   <button className="w-full p-2 rounded bg-requiredgreen  text-white hover:bg-hovergreen transition" type="submit">Login</button>
    //   {error && <p className="text-red-500">{error}</p>}
    // </form>
  );
}
