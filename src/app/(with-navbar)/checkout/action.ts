'use server';

import connectDB from '@/lib/db';
import Order from '@/models/Order';
import {User} from '@/models/User';
import { CartItem } from '@/types';

interface OrderData {
  userId: string;
  address: string;
  phone: string;
  items: CartItem[];
}

export async function submitOrder(data: OrderData) {
  try {
    await connectDB();

    const user = await User.findById(data.userId);
    if (!user) throw new Error('User not found');

    await Order.create({
      userId: data.userId,
      userName: user.name,
      userEmail: user.email,
      address: data.address,
      phone: data.phone,
      items: data.items,
      createdAt: new Date(),
    });

    return { status: 'success' };
  } catch (error) {
    console.log('User found:', User);

    console.error('Order error:', error);
    return { status: 'error' };
  }
}

