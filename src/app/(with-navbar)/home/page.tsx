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
import WhyChooseUs from '../../components/WhyChooseUs'
// import SpecialOffers from '../../components/SpecialOffers'


export default function HomePage() {

  return (

    <div  className='w-[99%] mx-auto'>
        <Header/>
        <Categories/>
        <WhyChooseUs/>
        {/* <SpecialOffers/> */}
        <AboutUs/>
        {/* <Footer/> */}
    </div> 
  );
}
