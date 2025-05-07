// // src/app/checkout/page.tsx
// 'use client';
// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Product } from '@/types';

// export default function CheckoutPage() {
//   const { cart, clearCart } = useCart();

//   const handlePlaceOrder = () => {
//     // In real app, send cart to backend to process the order
//     console.log('Order placed:', cart);
//     alert('Order placed successfully!');
//     clearCart();
//   };

//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-4 mb-4">
//             {cart.map((item, index) => (
//               <li key={index} className="border p-4 rounded">
//                 <h3>{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//               </li>
//             ))}
//           </ul>
//           <p className="font-bold">Total: ${total.toFixed(2)}</p>
//           <button
//             onClick={handlePlaceOrder}
//             className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
//           >
//             Place Order
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// after save on db below is cart
// 'use client';

// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { submitOrder } from './action';

// export default function CheckoutPage() {
//   const { cart, clearCart } = useCart();
//   const [formData, setFormData] = useState({ name: '', email: '', address: '' });

//   const handlePlaceOrder = async () => {
//     if (!formData.name || !formData.email || !formData.address) {
//       alert('Please fill out all fields');
//       return;
//     }

//     const result = await submitOrder({ ...formData, cart });

//     if (result.success) {
//       alert('Order placed!');
//       clearCart();
//     } else {
//       alert(result.message || 'Something went wrong');
//     }
//     console.log('Cart:', cart);
//     console.log('Form Data:', formData);
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         className="border p-2 block mb-2 w-full"
//         value={formData.name}
//         onChange={e => setFormData({ ...formData, name: e.target.value })}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 block mb-2 w-full"
//         value={formData.email}
//         onChange={e => setFormData({ ...formData, email: e.target.value })}
//       />
//       <textarea
//         placeholder="Address"
//         className="border p-2 block mb-4 w-full"
//         value={formData.address}
//         onChange={e => setFormData({ ...formData, address: e.target.value })}
//       />

//       <button
//         onClick={handlePlaceOrder}
//         className="bg-blue-600 text-white px-4 py-2 rounded w-full"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// }
// // product card show on checkout page
// 'use client';
// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import submitOrder from './action';

// export default function CheckoutPage() {
//   const { cart, clearCart } = useCart();
//   const [formData, setFormData] = useState({ name: '', email: '', address: '' });

//   const handlePlaceOrder = async () => {
//     const result = await submitOrder({ ...formData, cart });

//     if (result.success) {
//       alert('Order placed!');
//       clearCart();
//     } else {
//       alert(result.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Checkout</h2>

//       {/* 🛒 Product Cards */}
//       {cart.length === 0 ? (
//         <p className="text-gray-500 mb-4">No items in cart.</p>
//       ) : (
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
//           {cart.map((item, index) => (
//             <div key={index} className="border rounded shadow p-4">
//               <h3 className="font-semibold text-lg">{item.title}</h3>
//               <p className="text-gray-600">Price: ${item.price}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 🧾 Checkout Form */}
//       <div className="space-y-2">
//         <input
//           type="text"
//           placeholder="Name"
//           className="border p-2 w-full"
//           value={formData.name}
//           onChange={e => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 w-full"
//           value={formData.email}
//           onChange={e => setFormData({ ...formData, email: e.target.value })}
//         />
//         <textarea
//           placeholder="Address"
//           className="border p-2 w-full"
//           value={formData.address}
//           onChange={e => setFormData({ ...formData, address: e.target.value })}
//         />
//         <button
//           onClick={handlePlaceOrder}
//           className="bg-blue-600 text-white px-4 py-2 rounded w-full"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import{ submitOrder}  from './action'; // Ensure the path is correct

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  
  const [cart, setCart] = useState([
    { _id: '1', title: 'Product 1', price: 20, color: 'red' },
    { _id: '2', title: 'Product 2', price: 30, color: 'blue' },
  ]);
  
  const handlePlaceOrder = async () => {
    try {
      // Check the values before calling submitOrder
      console.log('Form Data:', formData);
      console.log('Cart:', cart);

      // Submit the order data
      const result = await submitOrder({
        name: formData.name,
        email: formData.email,
        address: formData.address,
        cart: cart,
      });

      // Log the result for debugging
      console.log('Order Submission Result:', result);

      if (result.success) {
        alert('Order placed!');
      } else {
        alert('Failed to place order: ' + result.message);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      
      {/* Form for collecting user information */}
      <form className='w-lg'>
        <input className='border p-2 mb-2 w-full'
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input className='border p-2 mb-2 w-full'
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea className='border p-2 mb-2 w-full'
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </form>

      {/* Button to place order */}
      <button className='bg-emerald-600' onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
