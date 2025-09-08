// components/Carousel.tsx
'use client';

import React, { useState, useEffect } from 'react';

const images = [
  '/images/headphonesblack.jpg',
  '/images/airdpod.jpg',
  '/images/googlesfront(1).jpg',
  '/images/headphonesblack.jpg',
  '/images/multiplestraightner.jpg',
  '/images/headphonesblack.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split into frames of 2 images each
  const frames = [];
  for (let i = 0; i < images.length; i += 2) {
    frames.push(images.slice(i, i + 2));
  }

  const totalFrames = frames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalFrames);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalFrames]);

  const currentFrame = frames[currentIndex];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="relative w-full h-full transition-all duration-900 ease-in-out bg-slate-300">
        <img
          src={currentFrame[0]}
          alt="Image 1"
          className="absolute top-4 left-4 w-[50%] h-[50%] object-cover rotate-[-10deg] rounded-lg shadow-md"
        />
        {currentFrame[1] && (
          <img
            src={currentFrame[1]}
            alt="Image 2"
            className="absolute bottom-4 right-4 w-[60%] h-[60%] object-cover rotate-[10deg] rounded-lg shadow-md"
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
