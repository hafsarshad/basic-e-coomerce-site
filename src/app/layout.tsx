

import './globals.css';
import  Navbar from './components/Navbar'; // ✅ correct
import { type Metadata } from 'next';
import { ReactNode } from 'react';
import { CartProvider } from './(with-navbar)/context/CartContext';
import { Geist, Geist_Mono } from 'next/font/google';
//import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'With TypeScript, Tailwind, Dynamic Routes, and DB',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  //const pathname = usePathname();
  const hideNavbarRoutes = ['/auth/login', '/auth/signup'];
  //const showNavbar = !hideNavbarRoutes.includes(pathname);
  return (
    <html lang="en" >
      <body className=" ">
     
    
          {children}
     
      </body>
    </html>
  );
}
