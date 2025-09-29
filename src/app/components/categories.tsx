'use client';

import React from 'react';
import Image from 'next/image';

const categories = [
  {
    name: 'Mobile & Computing Devices',
    image: '/images/laptop.png',
  },
  {
    name: 'Personal Care',
    image:  '/images/curler.png',
  },
  {
    name: 'Home Appliance',
    image: '/images/home.png',
  },
   {
    name: 'Kitchen Appliance ',
    image:  '/images/curler.png',
  },

];

const CategoriesSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
