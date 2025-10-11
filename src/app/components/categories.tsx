'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';

const categories = [
  { name: 'Mobile & Computing Devices' },
  { name: 'Personal Care' },
  { name: 'Home Appliance' },
  { name: 'Kitchen Appliance' },
];

const CategoriesSection = () => {
  // Animation variants for cards
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-10 bg-gray-100 overflow-hidden">
      <div>
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Shop by Category
        </motion.h2>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer group"
              variants={cardVariants}
              initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
              whileInView="visible"
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                {/* You can re-enable image later */}
                {/* <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <span className="text-gray-400 text-sm">Image Here</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
