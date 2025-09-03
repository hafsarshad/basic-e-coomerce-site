//app>api>products>route.ts

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import cloudinary from '@/lib/cloudinary';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import { promisify } from 'util';

// Enable parsing of form-data with files
export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = promisify(fs.readFile);

export async function POST(req: Request) {
  try {
    // Parse form data
    const form = new IncomingForm({ keepExtensions: true });

    const data = await new Promise((resolve, reject) => {
      form.parse(req as any, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const { fields, files } = data as any;

    // Connect to DB
    await connectDB();

    // Read and upload image to Cloudinary
    const file = files.image[0];
    const imageData = await readFile(file.filepath);
    const base64Image = Buffer.from(imageData).toString('base64');
    const uploadRes = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${base64Image}`
    );

    // Save product with image URL
    await Product.create({
      title: fields.title[0],
      description: fields.description[0],
      color: fields.color[0],
      price: fields.price[0],
      image: uploadRes.secure_url, // store image URL
    });

    return NextResponse.json({ message: 'Product saved' });
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