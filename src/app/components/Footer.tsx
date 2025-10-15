'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">ElectroStore</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for the latest electronics and home appliances.
            Quality and innovation delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/products" className="hover:text-yellow-400">Products</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-yellow-400">FAQ</Link></li>
            <li><Link href="/returns" className="hover:text-yellow-400">Returns</Link></li>
            <li><Link href="/shipping" className="hover:text-yellow-400">Shipping Info</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-yellow-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-yellow-400">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ElectroStore. All rights reserved.
      </div>
    </footer>
  );
}
