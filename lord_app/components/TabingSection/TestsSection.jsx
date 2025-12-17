"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestCard } from "@/components/TabingSection/TestCard";

import { TABS, TESTS_BY_TAB } from "@/components/TabingSection/data/testsData";

export default function TestsSection() {
  const [activeTab, setActiveTab] = useState("Fever");

  const tests = TESTS_BY_TAB[activeTab] || [];

  return (
    <section className="bg-[#fafaf7] py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-teal-600 mb-6">
          Tests for Fever in Gurgaon
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border text-sm transition
                ${
                  activeTab === tab
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white text-gray-600 hover:border-teal-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

          <div className="w-6xl m-auto relative tabing-swiper">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
          spaceBetween={20}
          slidesPerView={1} 
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          key={activeTab} //  forces update on tab change
        >
          {tests.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TestCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
         <button className="swiper-button-prev  absolute left-[200px] top-1/2 -translate-y-1/2 z-20 bg-white text-black shadow-md w-10 h-10 rounded-full flex items-center justify-center">
          ←
        </button>

        <button className="swiper-button-next  absolute right-[200px] top-1/2 -translate-y-1/2 z-20 bg-white text-black shadow-md w-10 h-10 rounded-full flex items-center justify-center">
          →
        </button>
        </div>

        {/* Bottom CTA */}
        {activeTab === "STD" && (
          <div className="text-center mt-10">
            <button className="text-teal-600 font-medium hover:underline">
              View all tests for STD →
            </button>
          </div>
        )}
      </div>
      <button className="mt-10 mx-auto block bg-[#D9F1F2] text-teal-600 rounded-lg px-6 py-3 text-sm font-medium hover:bg-[#D9F1F3] transition">
        View All Health Packages
      </button>
    </section>
  );
}
