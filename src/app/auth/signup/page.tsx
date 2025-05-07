// //src/app/auth/signup/page.tsx
// 'use client';

// import { useState } from 'react';
// import { registerUser } from '../action';

// export default function SignupPage() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await registerUser(form);
//     console.log(res);
//   };

//   return (
//     <form className="space-y-4 p-6 max-w-sm mx-auto" onSubmit={handleSubmit}>
//       <input className="border p-2 w-full" type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
//       <input className="border p-2 w-full" type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
//       <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
//       <button className="border p-2 bg-blue-200" type="submit">Sign Up</button>
//     </form>
//   );
// }

// src/app/auth/signup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../action';

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
      setTimeout(() => {
        router.push(res.redirect);
      }, 1500);
    }
  };
  

  return (
    <form className="space-y-4 p-6 max-w-sm mx-auto" onSubmit={handleSubmit}>
      {message && <p className="text-center text-sm text-red-500">{message}</p>}
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="border p-2 w-full"
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button className="border p-2 bg-blue-200 w-full" type="submit">
        Sign Up
      </button>
    </form>
  );
}
