// // lib/db.ts
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;

// export async function connectDB() {
//   if (mongoose.connections[0].readyState) return;

//   await mongoose.connect(MONGODB_URI, {
//     dbName: 'next-auth-db',
//   });
//   console.log('Connected to MongoDB');
// }
// lib/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGO_URI!);
};

export default connectDB;
