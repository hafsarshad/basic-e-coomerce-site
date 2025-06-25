import './globals.css';
import { type Metadata } from 'next';
import { ReactNode } from 'react';
import { CartProvider } from './context/CartContext';
import { Geist, Geist_Mono } from 'next/font/google';

// // Font setup
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// Metadata
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
      </nav>
      <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
