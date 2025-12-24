'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HealthiansOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(28);
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Explicitly type inputRefs as an array of HTMLInputElement or null
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const slides = [
    {
      title: 'Cost Effective',
      subtitle: 'Honest Price Guaranteed',
      icon: '💰'
    },
    {
      title: 'Convenient',
      subtitle: 'Free Home Sample Collection',
      icon: '🚑'
    },
    {
      title: 'Reliable',
      subtitle: 'NABL Certified Labs',
      icon: '✓'
    },
    {
      title: 'Fast',
      subtitle: 'Reports in 24-48 Hours',
      icon: '⚡'
    }
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
      setOtp(newOtp);
      const nextEmpty = newOtp.findIndex(val => !val);
      if (nextEmpty !== -1) {
        inputRefs.current[nextEmpty]?.focus();
      } else {
        inputRefs.current[5]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      console.log('Verifying OTP:', otpValue);
      // Add your OTP verification logic here
    } else {
      alert('Please enter complete 6-digit OTP');
    }
  };

  const handleResend = () => {
    setTimer(28);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    console.log('Resending OTP...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Carousel */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-12 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Money Bag Icon */}
            <div className="relative z-10 mb-8">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl relative">
                <div className="text-7xl">💰</div>
                <div className="absolute -top-4 -right-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Content */}
            <div className="text-center text-white z-10 mb-8">
              <h2 className="text-4xl font-bold mb-3">{slides[currentSlide].title}</h2>
              <p className="text-xl text-teal-50">{slides[currentSlide].subtitle}</p>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - OTP Form */}
          <div className="p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Verify OTP</h1>
              
              {/* Phone Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-24 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-500 rounded"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-600 mb-2">
                Please enter verification code (OTP) sent to
              </p>
              <p className="text-center text-gray-900 font-semibold text-lg">
                +91 9116901768
              </p>
            </div>

            {/* OTP Input */}
            <div className="mb-4">
              <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el: any) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                ))}
              </div>
            </div>

            {/* Timer */}
            <div className="text-center mb-6">
              {timer > 0 ? (
                <p className="text-gray-600">
                  Get OTP again in <span className="font-semibold text-teal-600">{timer} seconds</span>
                </p>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-teal-600 font-semibold hover:text-teal-700 underline"
                >
                  Resend OTP
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-6"
            >
              Submit
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* WhatsApp Toggle */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">📱</span>
              </div>
              <span className="text-gray-700">Get alerts on WhatsApp</span>
              <button
                onClick={() => setWhatsappAlerts(!whatsappAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  whatsappAlerts ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    whatsappAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Terms and Conditions */}
            <p className="text-center text-xs text-gray-500">
              By proceeding, you agree with our{' '}
              <a href="#" className="text-orange-500 hover:underline">
                Terms and Conditions
              </a>{' '}
              &{' '}
              <a href="#" className="text-orange-500 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}