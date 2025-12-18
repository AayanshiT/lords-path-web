import React from 'react';

export default function SmartReportSection() {
  return (
    <div className="w-full px-14 bg-gradient-to-b from-white to-gray-50 py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-center">

          {/* Left Content Column - 6 cols on desktop */}
          <div className="lg:col-span-5 col-span-1 text-center lg:text-left">
            <div className="space-y-5">
              {/* Main Heading */}
              <h3 className="text-[32px] font-bold text-[#1a9ca6] leading-tight">
                Healthians Smart Report
              </h3>

              {/* Subheading */}
              <h5 className="text-[24px]  text-[#848484] font-normal">
                Now understanding lab<br />
                reports got easier
              </h5>

              {/* Secondary Heading */}
              <h6 className="text-[25px] text-[#1a9ca6] font-semibold mt-2.5">
                Consolidated Health<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>History Report
              </h6>
            </div>
          </div>

          {/* Right Image Column - 5 cols on desktop with offset */}
          <div className="lg:col-span-4 lg:col-start-7 col-span-1">
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] mr-8 mb-[-40px]">
                <img
                  src="https://helma-mumbai.healthians.com/stationery/mailer-assets/68663d546352c.webp"
                  alt="Smart Report Mobile Interface"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* <div className="lg:col-span-1 lg:col-start-1 col-span-1"></div> */}
        </div>
      </div>
    </div>
  );
}