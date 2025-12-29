import React from 'react';

interface Member {
  id: string;
  name: string;
  gender: string;
  age: number;
  score: number;
  avatar: string;
}

export default function HealthKarmaAssessment() {
  const member: Member = {
    id: '1',
    name: 'Aayanshi Sharma',
    gender: 'Female',
    age: 24,
    score: 49,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <span className="text-gray-600">Home</span>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-900">HealthKarma</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Health Score Gauge - Replace with your image/icon */}
            <div className="flex justify-center mb-8">
              <div className="relative w-80 h-48">
                {/* Replace this div with your gauge image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500 text-center">
                    Place your health gauge<br />image/icon here
                  </p>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Check your Personalised HealthKarma score
                for free and get a detailed Health report
              </h1>
              <div className="w-16 h-1 bg-orange-500"></div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                It helps in understand the risk areas & recommends medical check ups,
                comparative health score among your peers based on your lifestyle
                using artificial intelligence & sophisticated algorithms.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the member for whom you want
              to take Health Assesment
            </h2>
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>

            {/* Member Card */}
            <div className="border-2 border-gray-200 rounded-xl p-4 md:p-6 mb-6 hover:border-blue-300 transition-colors cursor-pointer">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500">
                      {member.gender} / {member.age} Years
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    {member.score}
                  </span>
                  {/* Replace with your circular progress icon/image */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* For someone else link */}
            <div className="text-center mb-6">
              <button className="text-gray-700 underline hover:text-gray-900 text-sm transition-colors">
                For someone else
              </button>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 md:py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <span>Continue</span>
              <span className="text-lg">→</span>
            </button>

            {/* Watermark */}
            <div className="mt-6 text-right opacity-30">
              <p className="text-gray-400 text-sm">Activate Windows</p>
              <p className="text-gray-400 text-xs">Go to Settings to activate Windows.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}