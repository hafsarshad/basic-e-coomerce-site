//app>api>products>route.ts

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