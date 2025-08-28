'use client';

import { useCart } from '@/app/(with-navbar)/context/CartContext';
import { useState } from 'react';
import { submitOrder } from './action'; // create this next
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ address: '', phone: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userId = sessionStorage.getItem('userId');
    if (!userId) return alert('User not found');

    const res = await submitOrder({
      userId,
      address: form.address,
      phone: form.phone,
      items: cart,
    });

    if (res.status === 'success') {
      setMessage('Order placed successfully!');
      clearCart();
      setTimeout(() => router.push('/home'), 2000);
    } else {
      setMessage('Order failed. Try again.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map(item => (
            <li key={item._id} className="border p-2 rounded">
              <p><strong>{item.title}</strong> × {item.quantity}</p>
              <p>${item.price} each</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          className="border p-2 w-full"
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          className="border p-2 w-full"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Place Order
        </button>
      </form>

      {message && <p className="text-center text-sm text-green-600">{message}</p>}
    </div>
  );
}
