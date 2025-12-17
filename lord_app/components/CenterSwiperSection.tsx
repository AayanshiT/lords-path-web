"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../app/styles/components.css";
// import "swiper/css";
// import "swiper/css/navigation";
// component.tsx  


export default function CenterSwiperSection() {
  return (
    <section className="relative w-[70%] m-auto py-16 bg-white overflow-hidden">

      {/* LEFT WHITE FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10" />

      {/* RIGHT WHITE FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Swiper Container */}
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          slidesPerView={2.2}
          spaceBetween={-10}
          centeredSlides
          // loop
          className="!overflow-visible"
        >
          {/* Slide 1 */}
          <SwiperSlide>
             <div
            className="h-[200px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('https://helma.healthians.com/stationery/banners/167_1076.webp')" }}
          />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
             <div
            className="h-[200px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('https://helma.healthians.com/stationery/banners/138_115.webp')" }}
          />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
              <div
            className="h-[200px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('https://helma.healthians.com/stationery/banners/146_8725.webp')" }}
          />
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-prev absolute left-[200px] top-1/2 -translate-y-1/2 z-20 bg-white text-black shadow-md w-10 h-10 rounded-full flex items-center justify-center">
          ←
        </button>

        <button className="swiper-next absolute right-[200px] top-1/2 -translate-y-1/2 z-20 bg-white text-black shadow-md w-10 h-10 rounded-full flex items-center justify-center">
          →
        </button>
      </div>
    </section>
  );
}

/* Slide Card Component */
function SlideCard({
  title,
  button,
  bg,
}: {
  title: string;
  button: string;
  bg: string;
}) {
  return (
    <div
      className={`${bg} h-[260px] rounded-xl p-8 text-white flex flex-col justify-between`}
    >
      <h3 className="text-xl font-semibold leading-snug">
        {title}
      </h3>

      <button className="bg-white text-black px-4 py-2 rounded-md w-fit text-sm font-medium">
        {button}
      </button>
    </div>
  );
}
