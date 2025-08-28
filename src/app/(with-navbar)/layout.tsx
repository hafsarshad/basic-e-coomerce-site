// app/(with-navbar)/layout.tsx
import Navbar from '../components/Navbar';
import { CartProvider } from './context/CartContext';

export default function WithNavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <CartProvider>{children}</CartProvider>
    </>
  );
}
