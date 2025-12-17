'use client';
import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function HealthAdvisorBar() {
  const [mobile, setMobile] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = () => {
    if (mobile.length === 10) {
      alert(`Callback requested for: ${mobile}`);
      setMobile('');
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed w-6xl m-auto bottom-0 left-0 right-0 z-50 shadow-lg">
      {/* Main bar */}
      <div className="bg-[#00a0a8] px-4 py-4 md:py-3 rounded-t-lg relative">
        <div className="max-w-7xl mx-auto flex flex-col  items-center justify-between gap-4">
          {/* Left side - Text */}
          <div className="flex  items-center gap-2">
            <Phone className="w-5 h-5 text-white animate-pulse" />
            <h3 className="text-white text-lg md:text-xl font-semibold">
              Get a Callback from our Health Advisor
            </h3> 
          </div>

          {/* Right side - Input */}
          <div className="flex items-center gap-2 w-full md:w-auto bg-white rounded-lg px-3 py-2">
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="Enter your 10 digit mobile number"
              className="px-4 py-3 rounded-lg w-full md:w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              maxLength={10}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#ee5152] hover:bg-[#ee5152]/80 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors"
            >
              Get a Call Back
            </button>
          </div>
        </div>
      </div>

      {/* Mobile chat button */}
      <button className="md:hidden w-full bg-gray-800 text-white py-3 flex items-center justify-center gap-2">
        <MessageCircle className="w-4 h-4" />
        <span className="text-sm font-medium">Chat With Us</span>
      </button>
    </div>
  );
}