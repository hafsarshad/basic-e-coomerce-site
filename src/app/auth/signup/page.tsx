
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../action';
import Logo from '../../../assests/logo.svg';
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
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      />
      {/* Content */}
      <form
        onSubmit={handleSubmit}
        className="relative z-20 space-y-4 p-6 max-w-sm w-full bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg"
      >
        <Logo className="mx-auto w-24" />
        <h1 className="text-center text-xl font-bold">Sign Up</h1>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}

        <input
          className="border p-2 w-full rounded"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="border p-2 w-full rounded"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="border p-2 w-full rounded"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="p-2 bg-blue-500 text-white w-full rounded hover:bg-blue-600 transition" type="submit">
          Sign Up
        </button>
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
