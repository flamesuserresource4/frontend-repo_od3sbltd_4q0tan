import React, { useState } from 'react';
import { Calendar, MapPin, Shirt, MessageSquare } from 'lucide-react';

export default function OrderForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'wash_fold',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! Your pickup request has been received. We'll text you to confirm.`);
    setForm({ name: '', phone: '', address: '', service: 'wash_fold', date: '', notes: '' });
  };

  return (
    <section id="order" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Schedule a pickup</h2>
            <p className="mt-2 text-gray-600">Tell us where and when – we’ll take care of the rest.</p>
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Jane Doe" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="(123) 456-7890" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pickup date</label>
                    <div className="relative">
                      <input type="date" name="date" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                      <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pickup address</label>
                  <input name="address" value={form.address} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="123 Main St, City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service</label>
                  <div className="relative">
                    <select name="service" value={form.service} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 appearance-none pr-8">
                      <option value="wash_fold">Wash & Fold</option>
                      <option value="dry_cleaning">Dry Cleaning</option>
                      <option value="ironing">Ironing & Pressing</option>
                    </select>
                    <Shirt size={16} className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Notes (optional)</label>
                  <div className="relative">
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Special instructions, gate code, fabric sensitivities..." />
                    <MessageSquare size={16} className="absolute right-3 top-3 text-gray-400" />
                  </div>
                </div>
                <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Submit pickup request</button>
              </form>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900">How it works</h3>
            <ol className="mt-4 space-y-3 text-sm text-gray-700 list-decimal list-inside">
              <li>Pick a date and tell us where to pick up.</li>
              <li>We collect your laundry in our eco-bags.</li>
              <li>Experts clean, dry, and fold with care.</li>
              <li>We deliver back to your doorstep within 24 hours.</li>
            </ol>
            <div className="mt-6 rounded-lg bg-indigo-50 p-4 text-indigo-800">
              New to FreshFold? Use code FRESH10 for 10% off your first order.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
