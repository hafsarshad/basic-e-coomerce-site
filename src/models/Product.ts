// import mongoose, { Schema, Document } from 'mongoose';

// // Product model interface
// interface IProduct extends Document {
//   title: string;
//   description: string;
//   price: number;
//   color: string;
// }

// const productSchema = new Schema<IProduct>({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   color: { type: String, required: true },
// });

// const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

// export default Product;
//add to cart 
import mongoose, { Schema, Document } from 'mongoose';

interface Product extends Document {
  title: string;
  description: string;
  price: number;
  color: string;
}

const ProductSchema: Schema<Product> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
});

const Product = mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema);

export default Product;