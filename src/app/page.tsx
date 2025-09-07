// app/page.tsx

import { redirect } from 'next/navigation';
  // app/page.tsx or app/carousel/page.tsx
import Carousel from '../app/components/carousel';
export default function RootPage() {
  <Carousel />

  redirect('/home');
  
}
