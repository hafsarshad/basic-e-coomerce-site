import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { title, description,color,price } = await req.json();
    await Product.create({ title, description,color,price });
    return NextResponse.json({ message: 'Product saved' });
  } catch (error) {
    console.error('Product creation error:', error);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}

// export async function GET() {
//   try {
//     await connectDB();
//     const products = await Product.find().sort({ createdAt: -1 });
//     return NextResponse.json(products);
//   } catch (error) {
//     return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
//   }
// }
// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/db'; // Ensure this file exports a function to connect to DB
// import Product from '@/models/Product'; // Ensure this points to the correct Product model

// API route to get all products
export async function GET() {
  try {
    // Connect to the database
    await connectDB();

    // Fetch all products from the database
    const products = await Product.find(); 

    // Return the products as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
