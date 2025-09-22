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

  // function to check session storage
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
    // run on first load
    checkAuth();

    // listen for sessionStorage changes (signup/login/logout)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Logout
  const handleLogout = () => {
    sessionStorage.clear();
    checkAuth();
  };

  return (
    <nav className="w-full h-16 bg-slate-400 fixed z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              {/* Logo */}
        <div className="bg-slate-200 ">
          <Logo className="" />
        </div>
        {/* Search Bar */}
    <div className="flex items-center border rounded-2xl border-lightyellow overflow-hidden w-full max-w-md bg-white">
  <input
    type="text"
    placeholder="Search..."
    className="flex-1 px-4  text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent"
  />
  <button className="p-2  hover:bg-gray-200 text-gray-600">
    <FaSearch/>
  </button>
</div>


        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-gray-700 hover:text-blue-600 text-xl">
            <FaShoppingCart />
          </Link>

          {!isLoggedIn ? (
            // Not logged in → show Login / Sign Up
            <div className="flex space-x-3">
              <Link href="/auth/login" className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-green-500 text-white py-1.5 px-4 rounded hover:bg-green-600">
                Sign Up
              </Link>
            </div>
          ) : (
            // Logged in → show Profile dropdown
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 text-xl flex items-center space-x-1">
                <FaUser />
                <span className="text-sm">{}</span>
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
      </div>
    </nav>
  );
}



// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import Logo from '../../assests/logo.png'; // adjust path as needed

// export default function Navbar() {
//   return (
//     <nav className="w-full px-4 py-3 shadow-md bg-transparent fixed z-10">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
        
//         {/* Logo */}
//       <div className="h-12 flex items-center">
//        <Image src={Logo} alt='' />
//       </div>

//         {/* Search Bar */}
//         <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 outline-none w-full"
//           />
//           <button className="px-3 text-gray-600 bg-gray-100 hover:bg-gray-200">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Icons & Links */}
//         <div className="flex items-center space-x-4">
//           <Link href="/cart" className="text-gray-700 hover:text-blue-600 text-xl">
//             <FaShoppingCart />
//           </Link>
//   {/* Dropdown div */}
//         <div className="relative group">
//            <Link href="/profile" className="text-gray-700 hover:text-blue-600 text-xl flex items-center space-x-1">
//              <FaUser />
//             </Link>
//         {/* Dropdown menu */}
//           <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
//             <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
//               My Profile
//             </Link>
//             <Link href="/settings"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-10">
//               Settings
//             </Link>
//              <Link href="/auth/signup" className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">
//               Sign Up
//              </Link>
//              <Link href="/auth/login" className="bg-blue-500 text-white py-1.5 px-4 rounded hover:bg-blue-600">
//               Login
//             </Link>
//             <Link href="/auth/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
//               Logout
//             </Link>
//           </div>

//          </div>
//         </div>
//       </div>
//     </nav>
//   );
// }