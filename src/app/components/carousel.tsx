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

  // Convert images into frames of 2 images each
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

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] overflow-hidden rounded-lg shadow-lg bg-white">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          backgroundColor: `blue`,
          width: `${frames.length * 100}%`,
          transform: `translateX(-${(100 / frames.length) * currentIndex}%)`,
        }}
      >
        {frames.map((frame, frameIdx) => (
          <div key={frameIdx} className="flex w-[600px] h-full">
            {frame.map((src, idx) => (
              <div key={idx} className="w-1/2 h-full">
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  className="w-full h-72 object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
