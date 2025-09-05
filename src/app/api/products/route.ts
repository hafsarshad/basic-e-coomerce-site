import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const color = formData.get('color') as string;
    const price = formData.get('price') as string;
    const image = formData.get('image') as File;

    if (!image || typeof image === 'string') {
      return NextResponse.json({ error: 'Invalid image file' }, { status: 400 });
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadRes = await cloudinary.uploader.upload(
      `data:${image.type};base64,${buffer.toString('base64')}`
    );

    const newProduct = await Product.create({
      title,
      description,
      color,
      price,
      image: uploadRes.secure_url,
    });

    return NextResponse.json({ message: 'Product saved', product: newProduct });
  } catch (error) {
    console.error('Product creation error:', error);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

//before file image upload code
// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/db';
// import Product from '@/models/Product';

// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const { title, description,color,price } = await req.json();
//     await Product.create({ title, description,color,price });
//     return NextResponse.json({ message: 'Product saved' });
//   } catch (error) {
//     console.error('Product creation error:', error);
//     return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
//   }
// }

// // API route to get all products
// export async function GET() {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Fetch all products from the database
//     const products = await Product.find(); 

//     // Return the products as a JSON response
//     return NextResponse.json(products);
//   } catch (error) {
//     // If there's an error, return a 500 status with the error message
//     return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
//   }
// }