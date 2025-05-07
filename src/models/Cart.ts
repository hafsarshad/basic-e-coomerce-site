import mongoose, { Schema, Document } from 'mongoose';

interface ICartProduct {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

interface ICart extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  products: ICartProduct[];
}

const CartSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
  }],
});

const Cart = mongoose.models.Cart || mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
