import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  productId: String,
  title: String,
  price: Number,
  color: String,
  quantity: Number,
});

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  products: [ProductSchema],
  orderDate: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
// // after dashbored
// // src/models/Order.ts
// import mongoose, { Schema, Document } from 'mongoose';

// interface OrderProduct {
//   product: mongoose.Types.ObjectId;
//   quantity: number;
//   color: string;
// }

// interface Order extends Document {
//   name: string;
//   email: string;
//   address: string;
//   orderDate: Date;
//   products: OrderProduct[];
// }

// const orderSchema = new Schema<Order>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   address: { type: String, required: true },
//   orderDate: { type: Date, default: Date.now },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//       quantity: { type: Number, required: true },
//       color: { type: String, required: true }
//     }
//   ]
// });

// // Create or get the model
// const Order = mongoose.models.Order || mongoose.model<Order>('Order', orderSchema);
// export default Order;
