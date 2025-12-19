'use client';

import { useState } from 'react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    // Add your subscription logic here
    setEmail('');
  };

  return (
    <div className="bg-[#1a9ca6] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Subscribe For Healthy Updates
        </h2>
        
        {/* Decorative underline */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-16 bg-gray-300"></div>
            <div className="h-0.5 w-16 bg-[#f27d27]"></div>
            <div className="h-0.5 w-16 bg-gray-300"></div>
          </div>
        </div>

        {/* Subscription form */}
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email ID"
              className="flex-1 px-8 py-4 text-gray-600 placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#f27d27] text-white font-semibold px-12 py-4 rounded-full transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}