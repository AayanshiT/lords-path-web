"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, FileText, CheckCircle } from 'lucide-react';

export default function HealthCheckupPackages() {
  const [activeTab, setActiveTab] = useState('Full Body Checkup');
  
  const tabs = [
    'Full Body Checkup', 'Fever', 'STD', 'Vitamins', 
    'Diabetes', 'Heart', 'Thyroid', 'Kidney', 'Allergy'
  ];

  const packages = [
    {
      title: 'Be Healthy Comprehensive Package (With HbA1c)',
      tests: 93,
      price: 1601,
      originalPrice: 17790,
      perPerson: true,
      members: 2,
      fasting: '12 hrs Fasting Required',
      recommended: 'Recommended for Everyone',
      reports: 'Reports within 21 Hours',
      testsIncluded: 'RA Test Rheumatoid Arthritis Factor, Quantitative, Amylase Enzymatic, Serum, CRP (C Reactive Protein) Quantitative, Serum, Blood Glucose Fasting',
      additionalCost: '+ Add 1 more → Pay ₹1512/person!',
      groupComplete: false,
      discount: null
    },
    {
      title: 'Healthians Winter Wellness Package - Male',
      tests: 99,
      price: 1959,
      originalPrice: 21762,
      perPerson: true,
      members: 2,
      fasting: '12 hrs Fasting Required',
      recommended: 'Recommended for Male',
      reports: 'Reports within 22 Hours',
      testsIncluded: 'RA Test Rheumatoid Arthritis Factor, Quantitative, Amylase Enzymatic, Serum, CEA-Carcino Embryonic Antigen (Colorectal Cancer Marker Test), ESR Automated',
      groupComplete: true,
      discount: 'Price Locked: ₹1959/person!'
    },
    {
      title: 'Healthians Winter Wellness Package - Female',
      tests: 102,
      price: 1959,
      originalPrice: 21762,
      perPerson: true,
      members: 2,
      fasting: '12 hrs Fasting Required',
      recommended: 'Recommended for Female',
      reports: 'Reports within 22 Hours',
      testsIncluded: 'RA Test Rheumatoid Arthritis Factor, Quantitative, Amylase Enzymatic, Serum, CEA-Carcino Embryonic Antigen (Colorectal Cancer Marker Test), CPK, Total',
      groupComplete: true,
      discount: 'Price Locked: ₹1959/person!'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-600 mb-8">
          Full Body Checkup packages in Gurgaon
        </h1>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="bg-teal-50 p-4 border-b-2 border-teal-500">
                  <h3 className="font-semibold text-gray-800 mb-2 min-h-[3rem]">
                    {pkg.title}
                  </h3>
                  <div className="text-4xl font-bold text-teal-600">
                    {pkg.tests}
                    <span className="text-base font-normal ml-1">Tests</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Tests Included:</span> {pkg.testsIncluded}
                      <button className="text-teal-600 font-semibold ml-1">...more</button>
                    </p>
                  </div>

                  {/* Know More & Members */}
                  <div className="flex items-center justify-between mb-4">
                    <button className="text-teal-600 font-semibold flex items-center gap-1">
                      + Know More
                    </button>
                    <select className="px-3 py-1 border border-gray-300 rounded text-sm bg-gray-50">
                      <option>{pkg.members} Members</option>
                      <option>1 Member</option>
                      <option>3 Members</option>
                      <option>4 Members</option>
                    </select>
                  </div>

                  {/* Additional Info */}
                  {pkg.groupComplete && (
                    <div className="bg-green-50 border border-green-200 rounded p-2 mb-4 text-center">
                      <p className="text-sm font-semibold text-green-700 flex items-center justify-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Group Complete! 🎉 {pkg.discount}
                      </p>
                    </div>
                  )}

                  {!pkg.groupComplete && pkg.additionalCost && (
                    <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-4 text-center">
                      <p className="text-sm text-blue-700">{pkg.additionalCost}</p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="flex items-start gap-1">
                      <Clock className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{pkg.fasting}</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <Users className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{pkg.recommended}</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FileText className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{pkg.reports}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-800">₹{pkg.price}</span>
                        <span className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                      Book Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}