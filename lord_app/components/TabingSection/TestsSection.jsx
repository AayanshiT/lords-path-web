"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TestCard } from "@/components/TabingSection/TestCard";

// import { TABS, TESTS_BY_TAB } from "@/components/TabingSection/data/testsData";
// const TABS = ["Fever", "Diabetes", "STD", "Heart"];

export default function TestsSection() {
  const [activeTab, setActiveTab] = useState("Fever");
  const [packages, setPackages] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const visiblePackages = showAll ? packages : packages.slice(0, 5);

  useEffect(() => {
    async function fetchPackages() {
      const res = await fetch("/api/packages");
      const json = await res.json();
      if (json.success) {
        setPackages(json.data);
      }
      setLoading(false);
    }
    fetchPackages();
  }, []);

  // const tests = TESTS_BY_TAB[activeTab] || [];

  return (
    <section className="bg-[#fafaf7] py-14">
      <div className="max-[85rem] mx-auto px-4">
        {/* Heading */}
        <h2 className="section-heading text-center text-2xl font-semibold [#00368C] mb-6">
          Tests in Gurgaon
        </h2>

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-start gap-3 mb-10 ml-[50px]">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border text-sm transition !text-[13px]
                ${
                  activeTab === tab
                    ? "!bg-[#F4FEFF] !border-[#00368C] !text-[#00368C] !font-semibold"
                    : "bg-white text-gray-600 hover:border-blue-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-0 relative tabing-swiper">
          {/* Swiper */}

          {!loading && visiblePackages.length === 0 && (
            <p className="text-center text-gray-500">No packages available</p>
          )}

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next-tab",
              prevEl: ".swiper-button-prev-tab",
            }}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            key={activeTab} // forces update on tab change
          >
            {/* {tests.map((item, idx) => (
              <SwiperSlide key={idx}>
                <TestCard data={item} />
              </SwiperSlide>
            ))} */}

            {visiblePackages.map((item) => (
              <SwiperSlide key={item.id}>
                <TestCard
                  data={{
                    title: item.name,
                    testCount: item.included_tests?.length || 0,
                    description:
                      item.included_tests?.join(", ") || "No tests listed",
                    price: item.price,
                    defaultPrice: item.price,
                    oldPrice: item.price + 500,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev-tab  absolute left-[200px] top-1/2 -translate-y-1/2 z-20  text-black  w-12 h-10 rounded-full flex items-center justify-center">
            <img
              src="https://cdn1.healthians.com/img/svg_assets/group-prev-nav.svg"
              alt="left"
            />
          </button>

          <button className="swiper-button-next-tab  absolute right-[200px] top-1/2 -translate-y-1/2 z-20  text-black  w-12 h-10 rounded-full flex items-center justify-center">
            <img
              src="https://cdn1.healthians.com/img/svg_assets/group-next-nav.svg"
              alt="right"
            />
          </button>
        </div>

        {/* Bottom CTA */}
        {/* {activeTab === "STD" && (
          <div className="text-center mt-10">
            <button className="[#00368C] font-medium hover:underline">
              View all tests for STD →
            </button>
          </div>
        )} */}
      </div>
      {!showAll && packages.length > 5 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 mx-auto block bg-[#E8EEFF] text-[#00368C] rounded-lg px-6 py-3 text-sm font-medium"
        >
          View All Health Packages
        </button>
      )}
    </section>
  );
}
