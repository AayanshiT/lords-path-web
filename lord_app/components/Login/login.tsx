'use client';

import { useState } from 'react';
import { ArrowRight, Wallet } from 'lucide-react';
import HealthiansOTP from './otp';
import { useRouter } from "next/navigation";

export default function HealthiansLogin() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showOTP, setShowOTP] = useState(false);
    const router = useRouter();

    const slides = [
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
        },
        {
            title: 'Affordable',
            subtitle: 'Best Prices Guaranteed',
            icon: '💰'
        }
    ];

    //   const handleLogin = () => {
    //     if (mobileNumber.length === 10) {
    //       console.log('Logging in with:', mobileNumber);
    //       setShowOTP(true); // show OTP component
    //     } else {
    //       alert('Please enter a valid 10-digit mobile number');
    //     }
    //   };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Left Side - Carousel */}
                    <div className="bg-[#00368C] p-12 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundSize: '30px 30px'
                            }}></div>
                        </div>

                        {/* Ambulance Icon */}
                        <div className="relative z-10 mb-8">
                            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🚑</div>
                                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto -mt-4">
                                        <span className="text-white text-3xl font-bold">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide Content */}
                        <div className="text-center text-white z-10 mb-8">
                            <h2 className="text-4xl font-bold mb-3">{slides[currentSlide].title}</h2>
                            <p className="text-xl text-[#E8EEFF]">{slides[currentSlide].subtitle}</p>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex gap-2 z-10">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="p-12 flex flex-col justify-center">
                        {showOTP ? (
                            <HealthiansOTP phone={mobileNumber} onBack={() => setShowOTP(false)} />
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h1 className="text-3xl font-semibold text-gray-800 mb-2">Login/Sign Up</h1>
                                    <p className="text-gray-600">Please enter your Mobile Number to proceed</p>
                                </div>

                                <div>
                                    <div className="mb-6">
                                        <div className="flex gap-3">
                                            <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#E8EEFF]0">
                                                <span className="text-2xl">🇮🇳</span>
                                                <span className="text-gray-700 font-medium">+ 91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                                placeholder="Enter your Mobile Number"
                                                className="flex-1 px-4 py-3 border-b-2 border-gray-300 focus:border-[#E8EEFF]0 outline-none text-gray-700 transition-colors"
                                                maxLength={10}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => router.push("/login/otp")}
                                        className="w-full bg-[#FF3B3B] text-white py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        Login
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Sign-up Bonus */}
                                <div className="mt-6 bg-gradient-to-r from-[#E8EEFF] to-green-50 border border-teal-200 rounded-xl p-4 flex items-center gap-3">
                                    <div className="bg-[#E8EEFF]0 p-2 rounded-lg">
                                        <Wallet className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">Sign-up to get ₹1000 Cash</span> in your wallet
                                        </p>
                                        <p className="text-xs text-gray-500">Use it for extra discounts on any test booking.</p>
                                    </div>
                                </div>

                                {/* Terms and Conditions */}
                                <p className="text-center text-xs text-gray-500 mt-6">
                                    By proceeding, you agree with our{' '}
                                    <a href="#" className="text-[#FF3B3B] hover:underline">
                                        Terms and Conditions
                                    </a>{' '}
                                    &{' '}
                                    <a href="#" className="text-[#FF3B3B] hover:underline">
                                        Privacy Policy
                                    </a>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}