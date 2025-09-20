'use client';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const images = [
  '/images/airpodswhite.png',
  '/images/laptop.png',
  '/images/straightner.png',
  '/images/electrickettle.png',
  '/images/mixer.png',
  '/images/blender.png',
];

// Split images into pairs (2 per frame)
const getFrames = (images: string[]) => {
  const frames = [];
  for (let i = 0; i < images.length; i += 2) {
    frames.push(images.slice(i, i + 2));
  }
  return frames;
};

// Background colors for each frame
// const bgColors = [
//   'bg-gradient-to-br from-yellow-100 via-white to-yellow-200',
//   'bg-gradient-to-br from-pink-100 via-white to-pink-200',
//   'bg-gradient-to-br from-blue-100 via-white to-blue-200',
//   'bg-gradient-to-br from-green-100 via-white to-green-200',
// ];

const Carousel = () => {
  const frames = getFrames(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalFrames = frames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalFrames);
    }, 3500);

    return () => clearInterval(interval);
  }, [totalFrames]);

  const currentFrame = frames[currentIndex];
 // const bgColor = bgColors[currentIndex % bgColors.length];

  // Custom per-image styling
  const getImageStyles = (image: string, position: 'left' | 'right') => {
    switch (true) {
      case image.includes('airpodswhite'):
        return `${position === 'left' ? 'top-6 left-6' : 'bottom-8 right-6'} w-[30%] `;
      case image.includes('laptop'):
        return `${position === 'left' ? 'top-4 left-4' : 'bottom-4 right-4'} w-[60%] `;
      case image.includes('straightner'):
        return `${position === 'left' ? 'top-10 left-12' : 'bottom-8 right-10'} w-[30%] `;
      case image.includes('electrickettle'):
        return `${position === 'left' ? 'top-8 left-8' : 'bottom-6 right-6'} w-[60%] `;
      case image.includes('mixer'):
        return `${position === 'left' ? 'top-12 left-10' : 'bottom-8 right-12'} w-[30%] `;
      case image.includes('blender'):
        return `${position === 'left' ? 'top-10 left-10' : 'bottom-6 right-8'} w-[60%] `;
      default:
        return `${position === 'left' ? 'top-4 left-4' : 'bottom-4 right-4'} w-[30%]`;
    }
  };

  return (
    <div className="relative top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] overflow-hidden rounded-xl border border-gray-300 shadow-2xl">
      <div
        key={currentIndex}
        className={classNames(
          'absolute w-full h-full transition-all duration-[1000ms] ease-in-out',
         // bgColor
        )}
      >
        {/* First Image */}
        {currentFrame[0] && (
          <img
            src={currentFrame[0]}
            alt="Image 1"
            className={classNames(
              'absolute h-auto object-contain rounded-lg shadow-xl transition-transform duration-700 ease-in-out',
              getImageStyles(currentFrame[0], 'left')
            )}
          />
        )}

        {/* Second Image */}
        {currentFrame[1] && (
          <img
            src={currentFrame[1]}
            alt="Image 2"
            className={classNames(
              'absolute h-auto object-contain rounded-lg shadow-xl transition-transform duration-700 ease-in-out',
              getImageStyles(currentFrame[1], 'right')
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
