"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[450px] rounded-xl bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('/cxo_banner_web.webp')",
            }}
          >
            {/* <div className="ml-12 text-white max-w-lg">
              <h1 className="text-4xl font-bold">
                CXO Super Speciality Health Screening Package
              </h1>
              <p className="mt-4 text-lg">
                Total Tests: <b>320</b> | At Just <b>₹7999</b>
              </p>

              <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold">
                Book Now →
              </button>
            </div> */}
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-[450px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/b_5.webp')" }}
          />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-[450px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/fi_new_1.webp')" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
