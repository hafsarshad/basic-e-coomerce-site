'use server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import connectDB from '@/lib/db';
import {User} from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET!;

// type RegisterResponse =
//   | { status: 'error'; error: string }
//   | { status: 'success'; message: string; token: string; redirect: string };

// export const registerUser = async (
//   formData: { name: string; email: string; password: string }
// ): Promise<RegisterResponse> => {
//   try {
//     await connectDB();

//     const existingUser = await User.findOne({ email: formData.email });
//     if (existingUser) return { status: 'error', error: 'User already exists' };

//     const hashedPassword = await bcrypt.hash(formData.password, 10);
//     const token = jwt.sign({ email: formData.email }, process.env.JWT_SECRET!, {
//       expiresIn: '1d',
//     });

//     const newUser = new User({
//       name: formData.name,
//       email: formData.email,
//       password: hashedPassword,
//       token,
//     });

//     await newUser.save();
    
//     return {
//       status: 'success',
//       message: 'User registered',
//       token,
//       redirect: '/home',
//     };
    
//   } catch (err) {
//     console.error('❌ registerUser error:', err);
//     return { status: 'error', error: 'Server error' };
//   }
// };
// upward is before seesion storade regarding cart 
type RegisterResponse =
  | { status: 'error'; error: string }
  | {
      status: 'success';
      message: string;
      token: string;
      redirect: string;
      user: { _id: string; email: string };
    };

export const registerUser = async (
  formData: { name: string; email: string; password: string }
): Promise<RegisterResponse> => {
  try {
    await connectDB();

    const existingUser = await User.findOne({ email: formData.email });
    if (existingUser) return { status: 'error', error: 'User already exists' };

    const hashedPassword = await bcrypt.hash(formData.password, 10);
    const token = jwt.sign({ email: formData.email }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    const newUser = new User({
      name: formData.name,
      email: formData.email,
      password: hashedPassword,
      token,
    });

    await newUser.save();
    
    return {
      status: 'success',
      message: 'User registered',
      token,
      redirect: '/home',
      user: { _id: newUser._id.toString(), email: newUser.email },
    };
    
  } catch (err) {
    console.error('❌ registerUser error:', err);
    return { status: 'error', error: 'Server error' };
  }
};




// LOGIN
export const loginUser = async (formData: FormData) => {
  try {
    console.log("🔐 loginUser triggered");

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("📨 Credentials:", { email, password });

    await connectDB();
    console.log("✅ Connected to DB");

    const user = await User.findOne({ email });
    console.log("👤 Found user:", user);

    if (!user) {
      console.log("❌ User not found");
      return { error: "Invalid credentials" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("🔑 Password match:", passwordMatch);

    if (!passwordMatch) {
      return { error: "Invalid credentials" };
    }

    const isAdmin = user.email === "aaa@gmail.com" && password === "aaa";
    console.log("🛡 Is admin?", isAdmin);

    const token = jwt.sign(
      { email: user.email, role: isAdmin ? "admin" : "user" },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    console.log("🔒 Token created:", token);

    const cookieStore = await cookies(); // ✅ Await cookies
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/"
    });

    console.log("🍪 Token stored in cookie");

    return {
      message: "Login successful",
      redirect: isAdmin ? "/dashbored" : "/"
    };
  } catch (err) {
    console.error("💥 loginUser error:", err);
    return { error: "Server error" };
  }
};




// export async function loginUser(formData: FormData) {
//   await connectDB();

//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;

//   const user = await User.findOne({ email });

//   if (!user || user.password !== password) {
//     return { error: 'Invalid credentials' };
//   }

//   const isAdmin = user.email === 'aaa@gmail.com' && user.password === 'aaa';

//   const token = jwt.sign({ email: user.email, role: isAdmin ? 'admin' : 'user' }, process.env.JWT_SECRET!, {
//     expiresIn: '1h',
//   });

 
//     // Await the cookies API
//     const cookieStore = await cookies();


//   cookieStore.set('token', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//     path: '/',
//   });
//   console.log('Token set in cookies:', token); // Debugging
//   console.log('User role:', isAdmin ? 'admin' : 'user'); // Debugging

//   return { message: 'Login successful', redirect: isAdmin ? '/dashbored' : '/' };
// }