"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "../app/styles/components.css";
// import "./style.css";
// import "./style.module.css";
// import "swiper/css/navigation";
// component.tsx  
// import "swiper/css";
// import "swiper/css/navigation";
// import styles from "./style.module.css"; 


export default function CenterSwiperSection() {
  return (
    <section className="center-swiper-section relative w-[70%] m-auto py-16 bg-white overflow-hidden">

      {/* LEFT WHITE FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-linear-to-r from-white to-transparent z-10" />

      {/* RIGHT WHITE FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-linear-to-l from-white to-transparent z-10" />

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
   initialSlide={1} 
  //  loop
  centeredSlides
  className={`!overflow-visible `}
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

          <SwiperSlide>
             <div
            className="h-[200px] rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('https://helma.healthians.com/stationery/banners/167_1076.webp')" }}
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

  
