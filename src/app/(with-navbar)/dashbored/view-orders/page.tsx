import mongoose from 'mongoose';
import Order from '@/models/Order'; // adjust the path
import { Order as OrderType } from '@/types'; // adjust the path
import React from 'react';

async function getOrders(): Promise<OrderType[]> {
  await mongoose.connect(process.env.MONGO_URI as string);

  const orders = await Order.find().lean();
  return orders as unknown as OrderType[];
}

const ViewOrdersPage = async () => {
  const orders = await getOrders();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>

      {orders.map((order) => (
        <div key={order._id} className="border p-4 mb-6 rounded shadow">
          <h2 className="text-lg font-semibold">Order by {order.userName}</h2>
          <p>Email: {order.userEmail}</p>
          <p>Address: {order.address}</p>
          <p>Phone: {order.phone}</p>
          <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>

          <div className="mt-4">
            <h3 className="font-semibold">Items:</h3>
            {order.items.map((item) => (
              <div key={item._id} className="pl-4">
                <p>Title: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewOrdersPage;
