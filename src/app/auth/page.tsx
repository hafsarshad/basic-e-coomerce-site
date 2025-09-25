'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../assests/logo.png';
import backgroundImage from '../../assests/login.png';
import { loginUser, registerUser } from './action';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await loginUser(formData);

    if (res?.error) {
      setError(res.error);
    } else if (typeof res?.redirect === 'string') {
      router.push(res.redirect);
    } else {
      setError('Unexpected error occurred');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await registerUser(form);

    if (res.status === 'error') {
      setMessage(res.error);
    } else {
      setMessage(res.message);

      sessionStorage.setItem('userId', res.user._id);
      sessionStorage.setItem('userEmail', res.user.email);

      setTimeout(() => {
        router.push(res.redirect);
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      />

      <form
        onSubmit={isLogin ? handleLogin : handleSignup}
        className="relative z-20 space-y-4 p-4 max-w-xs 2xl:max-w-2xl w-full rounded-lg shadow-lg bg-[#f3f4f6]/20 backdrop-blur-md border border-white/30"
      >
        {/* Logo */}
        <div className="w-36 mx-auto relative -mt-4">
          <Image src={Logo} alt="Logo" className="object-contain" />
        </div>

        {/* Heading */}
        <h1 className="text-center text-xl font-bold text-logoblack">
          {isLogin ? 'Login (Admin)' : 'Signup (User)'}
        </h1>

        {/* Toggle Button */}
        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
              setMessage('');
            }}
            className="text-blue-600 underline"
          >
            {isLogin ? 'Signup here' : 'Login here'}
          </button>
        </p>

        {/* Error or Success Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {message && <p className="text-green-600 text-sm text-center">{message}</p>}

        {/* Signup Extra Field */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen"
          />
        )}

        {/* Email Field */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={(e) =>
            isLogin
              ? setForm((f) => ({ ...f, email: e.target.value }))
              : setForm({ ...form, email: e.target.value })
          }
          required
          className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={(e) =>
            isLogin
              ? setForm((f) => ({ ...f, password: e.target.value }))
              : setForm({ ...form, password: e.target.value })
          }
          required
          className="w-full p-2 rounded border border-white/30 bg-[rgb(255,217,18)]/5 text-gray-500 placeholder-gray-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-requiredgreen"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 rounded bg-requiredgreen text-white hover:bg-hovergreen transition"
        >
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
    </div>
  );
}
