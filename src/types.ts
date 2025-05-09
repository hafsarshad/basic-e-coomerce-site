export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  color: string;
  createdAt: string;
  updatedAt: string;
}

// Extend Product with quantity and userId for cart items
export interface CartItem extends Product {
  quantity: number;
  userId: string;
}

  
// Final Order type added when view-order on dashbored happening
export interface Order {
  _id: string;
  userId: string;
  userName: string;
  userEmail: string;
  address: string;
  phone: string;
  items: CartItem[];
  createdAt: string;
}
