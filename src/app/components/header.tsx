'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/carousel';
import Pulse from '../components/pulseanimation'
export default function header(){
  const carousel1Images = [
   '/images/personalcare1.svg',
   '/images/mobole.svg',
   '/images/homeandkitchen.svg'
];


    return(
     <>
  <div className='flex  pt-16 h-[500px]  '>
    <div className=" max-w-[50%] mt-5">
      <h1 className="mt-3 text-logoblack font-albert text-7xl font-medium">Power Up Your World With The Latest Electronics!</h1>
      <h1 className="w-4/5 mt-5 text-logoblack font-albert text-3xl font-normal">our one-stop shop for the latest electronics at unbeatable prices.</h1>
       <div className="flex gap-6 mt-5">
          <button className="bg-requiredgreen text-white rounded-3xl px-3 py-2 ">Buy less than 5$</button>
          <button className="bg-requiredgreen text-white  rounded-3xl px-3 py-2">Shop Now</button>
        </div>
    </div>
      <div className="w-[50%] mx-auto">
          <Carousel images={carousel1Images} />
      </div>   
   </div>
  
</>
    )
}