'use client';

import { useState } from 'react';

type Option = string;

type Props = {
  title?: string;
  question: string;
  options: Option[];
  onSubmit: (answer: Option) => void;
  organId?: string; // Add organId here
};

export default function HealthQuestion({
  title = 'Tell Us About Your Lifestyle',
  question,
  options,
  onSubmit,
  organId, // Destructure organId
}: Props) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  function handleContinue() {
    if (!selectedOption) return;
    onSubmit(selectedOption);
  }

  // Use organId as needed
  // console.log('Organ ID:', organId);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            HealthKarma
          </h1>
          <h2 className="text-3xl font-bold text-[#00368C]">
            Hello, Aayanshi Sharma
          </h2>
        </div>

        <div className="flex items-start justify-between gap-8">

          {/* LEFT ILLUSTRATION (unchanged) */}
          <div className="hidden lg:flex flex-col items-center flex-shrink-0">
            {/* SVG kept same */}
          </div>

          {/* CENTER FORM */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 max-w-2xl">

            {/* Progress */}
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF3B3B] w-1/6 rounded-full"></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <p className="text-[#FF3B3B] text-sm font-medium mb-2">
                {title}
              </p>
              <h3 className="text-2xl font-bold text-gray-800">
                {question}
              </h3>
            </div>

            {/* Options */}
            {options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedOption === option
                    ? 'border-[#00368C] bg-gray-100'
                    : 'border-gray-200 hover:border-[#00368C] hover:bg-gray-50'
                  }`}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="w-5 h-5 text-[#00368C] focus:ring-0"
                />
                <span className="ml-4 text-black font-medium">
                  {option}
                </span>
              </label>
            ))}


            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!selectedOption}
              className="mt-6 w-full bg-[#00368C] text-white py-3 rounded-xl font-semibold disabled:opacity-40"
            >
              Continue
            </button>
          </div>

          {/* RIGHT ILLUSTRATION (unchanged) */}
          <div className="hidden lg:flex flex-col items-center flex-shrink-0">
            {/* SVG kept same */}
          </div>
        </div>
      </div>
    </div>
  );
}
