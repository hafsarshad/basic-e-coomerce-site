// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Carousel from '../components/carousel';
// import Pulse from '../components/pulseanimation'
// export default function header(){
//   const carousel1Images = [
//    '/images/personalcare.svg',
//    '/images/mobole.svg',
//    '/images/homeandkitchen.svg'
// ];


//     return(
//      <>
//   <div className='flex  pt-16 h-[500px]  '>
//     <div className=" max-w-[50%] mt-5">
//       <h1 className="mt-3 text-logoblack font-albert text-7xl font-medium">Power Up Your World With The Latest Electronics!</h1>
//       <h1 className="w-4/5 mt-5 text-logoblack font-albert text-3xl font-normal">our one-stop shop for the latest electronics at unbeatable prices.</h1>
//        <div className="flex gap-6 mt-5">
//           <button className="bg-requiredgreen text-white rounded-3xl px-3 py-2 ">Buy less than 5$</button>
//           <button className="bg-requiredgreen text-white  rounded-3xl px-3 py-2">Shop Now</button>
//         </div>
//     </div>
//       <div className="w-[50%] mx-auto">
//           <Carousel images={carousel1Images} />
//       </div>   
//    </div>
  
// </>
//     )
// }
'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/carousel';
import Pulse from '../components/pulseanimation';

export default function Header() {
  const carousel1Images = [
    '/images/personalcare.svg',
    '/images/mobole.svg',
    '/images/homeandkitchen.svg',
  ];

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-16 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 min-h-[500px]">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-5 text-center lg:text-left">
          <h1 className="mt-3 text-logoblack font-albert text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight">
            Power Up Your World With The Latest Electronics!
          </h1>

          <h2 className="w-full md:w-4/5 mt-5 text-logoblack font-albert text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">
            Your one-stop shop for the latest electronics at unbeatable prices.
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <button className="bg-requiredgreen text-white rounded-3xl px-5 py-2 text-sm sm:text-base hover:bg-green-600 transition">
              Buy less than 5$
            </button>
            <button className="bg-requiredgreen text-white rounded-3xl px-5 py-2 text-sm sm:text-base hover:bg-green-600 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Content (Carousel) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-full">
            <Carousel images={carousel1Images} />
          </div>
        </div>
      </div>
    </>
  );
}
