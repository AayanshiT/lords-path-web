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
      <div className="max-[85rem] mx-auto px-4">
        {/* Heading */}
<<<<<<< HEAD
        <h2 className="section-heading text-center text-2xl font-semibold text-teal-600 mb-10"> Health Scans & Imaging Tests</h2>
=======
        <h2 className="section-heading text-center text-2xl font-semibold [#00368C] mb-10">
          Health Scans & Imaging Tests
        </h2>

>>>>>>> 13ffe1611dc462472573c55f9ef20c360410c73c
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
        {/* Custom Navigation */}
        <button className="swiper-button-prev2  absolute top-1/2 -translate-y-1/2 z-20 bg-[#f27d27] text-white shadow-md w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
          ‹
        </button>
        <button className="swiper-button-next2  absolute top-1/2 -translate-y-1/2 z-20 bg-[#F16948] text-white shadow-md w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
          ›
        </button>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#F16948] text-white px-8 py-3 rounded-full font-medium hover:bg-[#F16948] transition">
            View All  →
          </button>
        </div>
      </div>
    </section>
  );
}
