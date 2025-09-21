//app>(with navbar)>home>page.tsx
// after cart  
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { Product } from '@/types';
import Header from '../../components/header'

export default function HomePage() {

  return (

    <div >
        <Header/>
     
    </div> 
  );
}
