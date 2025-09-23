
import './globals.css';
import { type Metadata } from 'next';
import { ReactNode } from 'react';
//import { usePathname } from 'next/navigation';
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans&display=swap" rel="stylesheet" />

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
      <body className="font-albert ">
     
    
          {children}
     
      </body>
    </html>
  );
}
