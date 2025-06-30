import './globals.css';
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
      <body className="bg-lightgray  ">
      <nav className=''>
        <div className="flex items-center justify-between p-4 ">
          <h1 className="text-3xl font-instrument  ">electro</h1>
          
        </div>
        <div className="">
          <h1>search</h1>
          <h1>sign in</h1>
          <h1>view cart</h1>
          <h1>profile</h1>
        </div>
      </nav>
      <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
