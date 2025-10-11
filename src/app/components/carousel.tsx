
'use client';
import React, { useEffect, useState } from 'react';
import './carousel.css';

interface carouselProps {
  images: string[];
}
export default function carousel({ images }: carouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="carousel-wrapper relative w-full h-svh overflow-hidden rounded-xl">
        <div className="carousel w-full overflow-hidden relative">
          <ul
            className="flex transition-transform duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <li key={index} className=" h-full ">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full  object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}







