'use client';
import React from 'react';
import { FaShippingFast, FaRedoAlt, FaHeadset, FaLock, FaFileInvoice } from 'react-icons/fa';

const features = [
  {
    icon: <FaShippingFast className="text-4xl text-blue-600 mb-3" />,
    title: 'Free Shipping',
    description: 'Enjoy free delivery on all orders above Rs. 3000.',
  },
  {
    icon: <FaRedoAlt className="text-4xl text-blue-600 mb-3" />,
    title: 'Easy Returns',
    description: 'Hassle-free returns within 7 days of purchase.',
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-600 mb-3" />,
    title: '24/7 Support',
    description: 'Our support team is always here to help you.',
  },
  {
    icon: <FaLock className="text-4xl text-blue-600 mb-3" />,
    title: 'Secure Payment',
    description: 'Your transactions are safe with SSL encryption.',
  },
  {
    icon: <FaFileInvoice className="text-4xl text-blue-600 mb-3" />,
    title: 'Warranty Guarantee',
    description: 'Every product comes with a standard warranty.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Choose Us
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

