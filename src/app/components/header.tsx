'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/carousel';
export default function header(){
    return(
        <div className='flex bg-green-500'>
        <div className="w-[50%] bg-slate-100">
            <h1 className="">ljfldjsd</h1>
        </div>
        {/* <div className="relative w-[65%] bg-slate-500 overflow-hidden">
             <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" >
           <ellipse rx="500" ry="500" cx="500" cy="150" fill="#FFD912"/>  
          </svg>
       <div className="relative z-10 flex items-center justify-end h-[400px] pr-10">
    <Carousel />
  </div>
        </div> */}
        
        <div className="relative w-[65%] pb-12 bg-slate-500 overflow-hidden">
  {/* Yellow Ellipse in the top-right corner */}
  <svg
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[-170px] right-[-120px] w-[900px] h-[800px] z-0 pointer-events-none"
  >
    <ellipse rx="400" ry="400" cx="400" cy="400" fill="#FFD912" />
  </svg>

  {/* Carousel content on top */}
  <div className="relative z-10 flex items-center justify-end h-full ">
    <Carousel />
  </div>
</div>

        </div>
        

    )
}