import React from 'react';
import { WashingMachine, Shirt, Sparkles, Recycle } from 'lucide-react';

const services = [
  {
    icon: WashingMachine,
    title: 'Wash & Fold',
    description: 'Everyday laundry washed with premium detergents, dried, and neatly folded.'
  },
  {
    icon: Shirt,
    title: 'Dry Cleaning',
    description: 'Delicate garments professionally cleaned with fabric-safe solvents.'
  },
  {
    icon: Sparkles,
    title: 'Ironing & Pressing',
    description: 'Crisp finishing for shirts, pants, and formal wear so you look your best.'
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'Sustainable detergents and energy-efficient processes to protect the planet.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-2 text-gray-600">Flexible options tailored to your closet. Choose exactly what you need.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-indigo-50 p-3 text-indigo-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
