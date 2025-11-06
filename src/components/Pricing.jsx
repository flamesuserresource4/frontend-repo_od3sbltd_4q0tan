import React from 'react';

const tiers = [
  {
    name: 'Per Pound',
    price: '$1.99',
    period: '/lb',
    features: ['Wash, dry, fold', '24h turnaround', 'Stain treatment', 'Free pickup & delivery'],
    cta: 'Order now',
    highlight: true,
  },
  {
    name: 'Essentials Bag',
    price: '$25',
    period: '/bag',
    features: ['Up to 15 lbs', 'Wash & fold', '48h turnaround', 'Free pickup'],
    cta: 'Choose plan',
  },
  {
    name: 'Family Plan',
    price: '$79',
    period: '/month',
    features: ['Up to 45 lbs/mo', 'Priority delivery', 'Dedicated support', 'Roll-over credits'],
    cta: 'Get started',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple, honest pricing</h2>
          <p className="mt-2 text-gray-600">Only pay for what you need. No hidden fees.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlight ? 'border-indigo-300 ring-2 ring-indigo-200' : 'border-gray-200'} bg-white p-6 shadow-sm flex flex-col`}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500">{tier.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#order" className={`mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-50'}`}>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
