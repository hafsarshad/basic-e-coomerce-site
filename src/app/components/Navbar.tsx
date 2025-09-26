
//src>app>components>Navbar.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../../assests/Group 2.svg';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const checkAuth = () => {
    const userId = sessionStorage.getItem('userId');
    const email = sessionStorage.getItem('userEmail');
    if (userId) {
      setIsLoggedIn(true);
      setUserEmail(email);
    } else {
      setIsLoggedIn(false);
      setUserEmail(null);
    }
  };

  useEffect(() => {
    checkAuth();

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    checkAuth();
  };

  return (
    <nav className="w-full h-16 bg-slate-400 fixed px-4 flex items-center justify-between z-50 shadow">
      
        {/* Logo */}
        <div className="bg-slate-200">
          <Logo className="" />
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-2xl border-yellow-400 overflow-hidden max-w-sm w-full bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button className="p-2 hover:bg-gray-200 text-gray-600">
            <FaSearch />
          </button>
        </div>

        {/* Links */}
        <div className="hidden lg:flex space-x-6 text-sm text-gray-800 font-medium">
          <Link href="/categories" className="hover:text-blue-600">Categories</Link>
          <Link href="/products" className="hover:text-blue-600">All Products</Link>
          <Link href="/help" className="hover:text-blue-600">Help</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link href="/cart" className="text-gray-700 hover:text-blue-600 text-xl">
            <FaShoppingCart />
          </Link>

          {!isLoggedIn ? (
            <div className="flex space-x-2">
              {/* ✅ Updated: Single Auth Page */}
              <Link
                href="/auth"
                className="bg-blue-500 text-white text-sm py-1.5 px-4 rounded hover:bg-blue-600"
              >
                Login / Signup
              </Link>
            </div>
          ) : (
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 text-xl flex items-center space-x-2">
                <FaUser />
              </button>

              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
    </nav>
  );
}
