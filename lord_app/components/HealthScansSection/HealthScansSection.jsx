"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IMAGING_TESTS } from "./data/imagingTests";
import ImagingCard from "./ImagingCard";

export default function HealthScansSection() {
  return (
    <section className="py-16 bg-white health-scans-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-teal-600 mb-10">
          Health Scans & Imaging Tests
        </h2>

        <div className="max-w-6xl mx-auto relative">
        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev2",
            nextEl: ".swiper-button-next2",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {IMAGING_TESTS.map((item, index) => (
            <SwiperSlide key={index}>
              <ImagingCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev2  absolute left-[200px] top-1/2 -translate-y-1/2 z-20 bg-orange-500 text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
          ‹
        </button>

        <button className="swiper-button-next2  absolute right-[200px] top-1/2 -translate-y-1/2 z-20 bg-orange-500 text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
          ›
        </button>
        {/* Custom Navigation */}
        {/* <div className="flex justify-between mt-6"> */}
          {/* <button className="custom-prev absolute w-10 h-10 left-[200px] top-1/2 -translate-y-1/2 rounded-full bg-orange-500 text-white flex items-center justify-center">
            ‹
          </button>
          <button className="custom-next absolute w-10 h-10 right-[200px] top-1/2 -translate-y-1/2 rounded-full bg-orange-500 text-white flex items-center justify-center">
            ›
          </button> */}
        {/* </div> */}
        </div>

        

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
}
