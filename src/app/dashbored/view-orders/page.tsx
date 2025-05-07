import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Order from '@/models/Order'; // Import Order model
import Product from '@/models/Product'; // Import Product model

// Define types for products and orders
interface ProductType {
  _id: string;
  title: string;
  price: number;
  color: string;
}

interface OrderProduct {
  product: string; // product is the product ID
 // quantity: number;
  color: string;
}

interface OrderType {
  _id: string;
  name: string;
  email: string;
  address: string;
  orderDate: string;
  products: OrderProduct[]; // Array of products in the order
}

export default async function ViewOrdersPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return <p>Unauthorized</p>;

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string; role: string };

  if (decoded.role !== 'admin') {
    return <p>Access denied</p>;
  }

  await mongoose.connect(process.env.MONGO_URI!);

  // Fetch all orders from the database and explicitly tell TypeScript the type
  const orders: OrderType[] = await Order.find().lean<OrderType[]>();

  // Get all product IDs from orders
  const productIds = orders.flatMap((order) => order.products.map((item) => item.product));

  // Fetch products based on the product IDs and explicitly tell TypeScript the type
  const products: ProductType[] = await Product.find({ _id: { $in: productIds } }).lean<ProductType[]>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order: OrderType) => (
          <div key={order._id} className="border p-4 mb-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Customer: {order.name}</h3>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}</p>
            <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
            <h4 className="font-medium mt-2">Products:</h4>
            <ul className="list-disc pl-5">
              {order.products.map((item, i) => {
                // Find the corresponding product for each item in the order
                const product = products.find((p) => p._id.toString() === item.product.toString());
                return (
                  <li key={i}>
                    <strong>{product?.title || 'Product Not Found'}</strong> - 
                    Price: ${product?.price?.toFixed(2) || '0.00'}, 
                    Color: {item.color || 'N/A'}
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
