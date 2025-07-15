import './globals.css';
import  Navbar from './components/Navbar'; // ✅ correct
import { type Metadata } from 'next';
import { ReactNode } from 'react';
import { CartProvider } from './context/CartContext';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'With TypeScript, Tailwind, Dynamic Routes, and DB',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body className=" ">
       <Navbar/>
      <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
