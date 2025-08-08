
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../action';
import Logo from '../../../assests/logoPng.png';
import backgroundImage from '../../../assests/bgYellow.png'

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await registerUser(form);
    if (res.status === 'error') {
      setMessage(res.error);
    } else {
      setMessage(res.message);

      // ✅ Save userId and email to sessionStorage
      sessionStorage.setItem('userId', res.user._id);
      sessionStorage.setItem('userEmail', res.user.email); // optional

      // Navigate to home after short delay
      setTimeout(() => {
        router.push(res.redirect);
      }, 1000);
    }
  };

  return (
<div className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
    <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage.src})`,}} />
      {/* Content */}
  <form onSubmit={handleSubmit} className="relative z-20 space-y-4 p-6 max-w-sm w-full rounded-lg shadow-lg bg-[#f3f4f6]/20 backdrop-blur-md border border-white/30">
    {/* Logo */}
    <div className=" w-36 mx-auto relative bg-slate-200"><Image src={Logo} alt="Logo" className="object-contain" /></div>
     {/* heading */}
     <h1 className="text-center text-xl font-bold text-blue-800">Sign Up</h1>
      {message && <p className="text-center text-sm text-red-400">{message}</p>}

     <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full p-2 rounded border border-white/30 bg-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
     <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full p-2 rounded border border-white/30 bg-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
     <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required className="w-full p-2 rounded border border-white/30 bg-white/20 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />

     <button type="submit" className="w-full p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">Sign Up</button>
  </form>
</div>
  );
}






// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { registerUser } from '../action';

// export default function SignupPage() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await registerUser(form);
  
//     if (res.status === 'error') {
//       setMessage(res.error);
//     } else {
//       setMessage(res.message);
//       setTimeout(() => {
//         router.push(res.redirect);
//       }, 1500);
//     }
//   };
  

//   return (
//     <form className="space-y-4 p-6 max-w-sm mx-auto" onSubmit={handleSubmit}>
//       {message && <p className="text-center text-sm text-red-500">{message}</p>}
//       <input
//         className="border p-2 w-full"
//         type="text"
//         placeholder="Name"
//         onChange={e => setForm({ ...form, name: e.target.value })}
//         required
//       />
//       <input
//         className="border p-2 w-full"
//         type="email"
//         placeholder="Email"
//         onChange={e => setForm({ ...form, email: e.target.value })}
//         required
//       />
//       <input
//         className="border p-2 w-full"
//         type="password"
//         placeholder="Password"
//         onChange={e => setForm({ ...form, password: e.target.value })}
//         required
//       />
//       <button className="border p-2 bg-blue-200 w-full" type="submit">
//         Sign Up
//       </button>
//     </form>
//   );
// }  below is after cart and session storage 
// src/app/auth/signup/page.tsx
