'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const deals = [
  {
    id: 1,
    title: 'Smart Microwave Oven',
    image: '/images/microwave.png',
    discount: '30% Off',
    price: 'Rs. 28,999',
  },
  {
    id: 2,
    title: 'Wireless Vacuum Cleaner',
    image: '/images/vacuum.png',
    discount: '40% Off',
    price: 'Rs. 19,499',
  },
  {
    id: 3,
    title: 'Smart Coffee Maker',
    image: '/images/coffeemaker.png',
    discount: '25% Off',
    price: 'Rs. 14,999',
  },
];

export default function SpecialOffers() {
  const calculateTimeLeft = () => {
    const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          ⚡ Mega Sale — Up to 50% Off!
        </h2>
        <p className="text-gray-600 mb-6">
          Hurry up! Grab your favorite deals before the time runs out.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-12">
          {['Hours', 'Minutes', 'Seconds'].map((label, i) => {
            const value =
              i === 0 ? timeLeft.hours : i === 1 ? timeLeft.minutes : timeLeft.seconds;
            return (
              <div key={label} className="bg-white shadow-md rounded-lg px-4 py-2 w-20">
                <p className="text-2xl font-bold text-blue-600">{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            );
          })}
        </div>

        {/* Deals Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 relative"
            >
              {/* Discount Badge */}
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                {deal.discount}
              </span>

              {/* Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {deal.title}
              </h3>
              <p className="text-blue-600 font-bold">{deal.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
