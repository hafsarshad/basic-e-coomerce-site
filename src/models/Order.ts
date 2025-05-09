// working good on checkout save data on db
//  import mongoose from 'mongoose';
// const OrderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   userName: { type: String },
//   userEmail: { type: String },
//   address: { type: String, required: true },
//   phone: { type: String, required: true },
//   items: { type: Array, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
// added when dashbored 
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: String,
  description: String,
  price: Number,
  color: String,
  createdAt: String,
  updatedAt: String,
  quantity: Number,
  userId: String,
}, { _id: false }); // Prevent auto _id inside array

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String },
  userEmail: { type: String },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  items: { type: [ItemSchema], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
