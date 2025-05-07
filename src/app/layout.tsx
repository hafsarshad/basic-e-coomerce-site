import './globals.css';
import { type Metadata } from 'next';
import { ReactNode } from 'react';
import { CartProvider } from './context/CartContext';
import { Geist, Geist_Mono } from 'next/font/google';

// Font setup
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata
export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'With TypeScript, Tailwind, Dynamic Routes, and DB',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-100 text-gray-900 antialiased">
      <nav>
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <h1 className="text-xl font-bold">Basic e-commerce site</h1>
          
        </div>
      </nav>
      <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
