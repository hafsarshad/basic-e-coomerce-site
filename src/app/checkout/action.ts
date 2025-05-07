'use server';

import  connectDB  from '@/lib/db';
import Order  from '@/models/Order';

type OrderData = {
  name: string;
  email: string;
  address: string;
  cart: {
    _id: string;
    title: string;
    price: number;
    color: string;
  }[];
};


export const submitOrder = async (data: {
    name: string;
    email: string;
    address: string;
    cart: any[];
  }) => {
    try {
      await connectDB();
  
      console.log('SERVER - received cart:', data.cart);
  
      const newOrder = new Order({
        name: data.name,
        email: data.email,
        address: data.address,
        products: data.cart,
        orderDate: new Date(),
      });
  
      await newOrder.save();
  
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, message: 'Failed to place order' };
    }
  };
  // after cart dashbored isssue
// 'use server';

// import connectDB from '@/lib/db';
// import Order from '@/models/Order';

// type OrderData = {
//   name: string;
//   email: string;
//   address: string;
//   cart: {
//     _id: string;
//     title: string;
//     price: number;
//     color: string;
//   }[];
// };

// export const submitOrder = async (data: {
//   name: string;
//   email: string;
//   address: string;
//   cart: any[];
// }) => {
//   try {
//     await connectDB();
    
//     // Debugging: Check the data received
//     console.log('SERVER - received data:', data);

//     // Prepare order object
//     const newOrder = new Order({
//       name: data.name,
//       email: data.email,
//       address: data.address,
//       products: data.cart.map((item) => ({
//         product: item._id,
//         quantity: 1, // Assuming quantity is 1 for simplicity, adjust as needed
//         color: item.color,
//       })),
//       orderDate: new Date(),
//     });

//     // Save order to database
//     await newOrder.save();

//     // Return success response
//     return { success: true };
//   } catch (err) {
//     console.error('Error placing order:', err);
//     return { success: false, message: 'Failed to place order' };
//   }
// };
