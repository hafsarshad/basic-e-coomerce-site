'use client';
import React from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../../assests/logo.svg'; // adjust path as needed

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
        
        {/* Logo */}
      <div className="h-12 flex items-center">
  <Logo className="h-full w-auto" />
</div>


        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 outline-none w-full"
          />
          <button className="px-3 text-gray-600 bg-gray-100 hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>

        {/* Icons & Links */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-blue-600 text-xl">
            <FaShoppingCart />
          </Link>
  {/* Dropdown div */}
        <div className="relative group">
           <Link href="/profile" className="text-gray-700 hover:text-blue-600 text-xl flex items-center space-x-1">
             <FaUser />
            </Link>
        {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
              My Profile
            </Link>
            <Link href="/settings"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-10">
              Settings
            </Link>
             <Link href="/auth/signup" className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">
              Sign Up
             </Link>
             <Link href="/auth/login" className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">
              Login
            </Link>
            <Link href="/auth/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
              Logout
            </Link>
          </div>

         </div>
        </div>
      </div>
    </nav>
  );
}
