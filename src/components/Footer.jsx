import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} FreshFold Laundry. All rights reserved.</p>
            <p className="text-sm text-gray-500">123 Clean St, Wash City • support@freshfold.com</p>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <a aria-label="Instagram" href="#" className="hover:text-gray-900"><Instagram size={18} /></a>
            <a aria-label="Facebook" href="#" className="hover:text-gray-900"><Facebook size={18} /></a>
            <a aria-label="Twitter" href="#" className="hover:text-gray-900"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
