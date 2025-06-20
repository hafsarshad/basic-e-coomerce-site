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
// import mongoose from 'mongoose';

// const connectDB = async () => {
//   if (mongoose.connections[0].readyState) return;

//   await mongoose.connect(process.env.MONGO_URI!);
// };

// export default connectDB;


import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('✅ Already connected to MongoDB');
    return;
  }

  if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI is not defined in .env.local');
    throw new Error('MONGO_URI is missing');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'yourDatabaseName', // optional: specify if not in URI
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
};

export default connectDB;
