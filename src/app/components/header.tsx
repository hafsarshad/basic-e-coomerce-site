'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/carousel';
export default function header(){
    return(
  <div className='bg-pink-200 flex  pt-16'>
    <div className="bg-blue-100">
      <h1 className="text-logoblack font-albert text-4xl">Power Up Your World with the Latest Electronics!</h1>
    </div>
<div className="w-[40%] mx-auto flex flex-wrap justify-center items-start gap-2 bg-slate-500">
  {/* First Row */}
  <div className="flex justify-center">
    <Carousel />
  </div>
  <div className="flex justify-center">
    <Carousel />
  </div>

  {/* Second Row - Centered */}
  <div className="w-full flex justify-center">
    <div className="">
      <Carousel />
    </div>
  </div>
</div>
</div>

    )
}