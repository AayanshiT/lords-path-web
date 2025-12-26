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
      <div className="bg-[#00368C] px-4 py-1 md:py-2 rounded-t-xl relative">
        <div className="max-[85rem] mx-auto flex flex-col items-center justify-between gap-2">
          {/* Left side - Text */}
          <div className="flex  items-center gap-1">
            {/* <Phone className="w-5 h-5 text-white animate-pulse" /> */}
            <h3 className="text-white text-lg md:text-xl font-medium">
              Get a Callback from our Health Advisor
            </h3> 
          </div>

          {/* Right side - Input */}
          <div className="flex items-center gap-2 w-full md:w-auto bg-white rounded-sm">
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="Enter your 10 digit mobile number"
              className="px-5 py-3 w-full md:w-80 text-gray-700 focus:outline-none "
              maxLength={10}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#FF3B3B] hover:bg-[#ee5152]/80 text-white px-6 py-3 rounded-tr-[4px] rounded-br-[4px] rounded-tl-0 rounded-bl-0 font-semibold whitespace-nowrap transition-colors text-[16px]"
            >
              Get a Call Back
            </button>
          </div>
        </div>
      </div>

      {/* Mobile chat button */}
      <button className="md:hidden w-full bg-gray-800 text-white py-2 flex items-center justify-center gap-2">
        <MessageCircle className="w-4 h-4" />
        <span className="text-sm font-medium">Chat With Us</span>
      </button>
    </div>
  );
}