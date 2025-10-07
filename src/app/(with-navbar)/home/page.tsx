//app>(with navbar)>home>page.tsx
// after cart  
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';
import Header from '../../components/header'
import Categories from '../../components/categories'
import AboutUs from '../../components/AboutUs'
import Pulse from '../../components/pulseanimation'
export default function HomePage() {

  return (

    <div  className='w-[98%] mx-auto'>
        <Header/>
        <Pulse/>
        <Categories/>
        <AboutUs/>

    </div> 
  );
}
