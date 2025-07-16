'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../../assests/logo.svg';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa' 

export default function Navbar() {
    return(
 <nav>
  <div className="">
   <Logo/>
  </div>
 <div className="flex items-center space-x-4">
        <Link href="/cart" className="text-gray-700 hover:text-blue-600 text-lg">
          <FaShoppingCart />
        </Link>
        <Link href="/profile" className="text-gray-700 hover:text-blue-600 text-lg">
          <FaUser />
        </Link>
        <Link href="/auth/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Login
        </Link>
        <Link href="/auth/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Sign Up
        </Link>
      </div>
     <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input type="text" placeholder="Search..." className="px-4 py-2 outline-none w-64"/>
        <button className="px-3 text-gray-600 bg-gray-100 hover:bg-gray-200">
          <FaSearch />
        </button>
      </div>

</nav>
    )
}
