'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../../assests/logo.svg'; 

export default function Navbar() {
    return(
         <nav>
      <div className="">
           <Logo/>
      </div>
  <div className="text-right mb-4">
  
        <Link href="/auth/login" className="bg-blue-500  py-2 px-4 rounded mx-2">Login</Link>
        <Link href="/auth/signup" className="bg-blue-500  py-2 px-4 rounded">Sign Up</Link>
      </div>

     </nav>
    )
}
