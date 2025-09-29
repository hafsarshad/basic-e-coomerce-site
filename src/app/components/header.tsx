'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/carousel';
export default function header(){
  const carousel1Images = [
  '/images/airpodswhite.png',
'/images/laptop.png',
   '/images/smartwatch.png',
  //  '/images/bluetoothspeaker.png',
  //  '/images/gamingconsole.png',
];

const carousel2Images = [
  '/images/home.png',
  '/images/electrickettle.png',
   '/images/drillmachine.png',
  // '/images/bigbeater.png',
  //  '/images/blender.png',

];

const carousel3Images = [
  '/images/curler.png',
  '/images/hairdryer.png',
  '/images/lednaillamp.png',
  // '/images/electrictrimmer.png',
];

    return(
  <div className='  flex  pt-16'>
    <div className=" max-w-screen-md">
      <h1 className="mt-3 text-logoblack font-albert text-7xl font-medium">Power Up Your World With The Latest Electronics!</h1>
      <h1 className="w-4/5 mt-3 text-logoblack font-albert text-3xl font-normal">our one-stop shop for the latest electronics at unbeatable prices.</h1>
    </div>
<div className="w-[40%] mx-auto flex flex-wrap justify-center items-start gap-x-2">
  {/* First Row */}
  <div className="flex justify-center">
    <Carousel images={carousel1Images} />
  </div>
  <div className="flex justify-center">
    <Carousel images={carousel2Images} />
  </div>
  {/* Second Row - Centered */}
  <div className="w-full flex justify-center -mt-2">
      <Carousel images={carousel3Images}/>
  </div>
</div>
</div>

    )
}