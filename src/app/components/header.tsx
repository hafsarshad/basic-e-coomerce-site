'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/carousel';
export default function header(){
    return(
  <div className='bg-pink-200  flex  pt-16'>
    <div className="bg-blue-100 max-w-screen-md">
      <h1 className="mt-3 text-logoblack font-albert text-7xl font-medium">Power Up Your World with the Latest Electronics!</h1>
      <h1 className="w-4/5 mt-3 text-logoblack font-albert text-3xl font-normal">our one-stop shop for the latest electronics at unbeatable prices.</h1>
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