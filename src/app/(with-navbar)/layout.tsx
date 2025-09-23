// app/(with-navbar)/layout.tsx
import Navbar from '../components/Navbar';
import { CartProvider } from './context/CartContext';


export default function WithNavbarLayout({ children }: { children: React.ReactNode }) {
  return (
  <>
      <div className="bg-green-200 ">  
          <Navbar /> 
      </div>
      <CartProvider>
        <div className=" mx-auto px-5">{children}</div>
      </CartProvider>
    </>
  );
}
