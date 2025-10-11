'use client';
import React from 'react';
import { FaBolt, FaShippingFast, FaHeadset } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16  md:px-12 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to <span className="text-yellow-400 font-semibold">ElectroStore</span> – your one-stop shop for the latest and greatest in electronics. 
          From everyday gadgets to cutting-edge technology, we bring quality and convenience to your fingertips.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-yellow-400 text-4xl mb-4">
              <FaBolt />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Products</h3>
            <p className="text-gray-600">
              We offer top-rated, original electronics from brands you know and trust.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-yellow-400 text-4xl mb-4">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600">
              Lightning-fast delivery across the country so you can enjoy your gadgets sooner.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-yellow-400 text-4xl mb-4">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Support</h3>
            <p className="text-gray-600">
              Our team is available 24/7 to help you with orders, returns, and inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
