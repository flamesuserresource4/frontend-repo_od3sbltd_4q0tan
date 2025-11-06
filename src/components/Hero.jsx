import React from 'react';
import { Clock, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Sparkles size={14} /> Your clothes, exceptionally clean
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              On-demand laundry pickup and delivery
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a pickup in seconds. We wash, dry, fold, and deliver back within 24 hours with eco-friendly detergents and care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#order" className="inline-flex justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Schedule your first pickup
              </a>
              <a href="#pricing" className="inline-flex justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50">
                See pricing
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="text-indigo-600" size={18} /> Free pickup & delivery
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-indigo-600" size={18} /> 24h turnaround
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=1600&auto=format&fit=crop"
                alt="Laundry service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
