import React from 'react';
import { Shirt, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <Shirt size={20} />
          </div>
          <span className="text-lg">FreshFold Laundry</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#order" className="hover:text-gray-900">Order</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </a>
          <a href="#order" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <MapPin size={18} />
            Schedule pickup
          </a>
        </div>
      </div>
    </header>
  );
}
