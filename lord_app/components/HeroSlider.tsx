"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import "./global.css";
// import "swiper/css";
// import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="hero-swiper relative max-w-[85rem] mx-auto mt-6 px-4">

       {/*  SEARCH BAR (FIXED ON ALL SLIDES) */}
      <div className="absolute bottom-[60px] left-[440px]  z-20 w-full max-w-[60%] -translate-x-1/2 px-4">
        <div className="  p-4">
          
          {/* Search input */}
          <div className="flex overflow-hidden rounded-lg border-0 bg-white shadow-lg">
            <input
              type="text"
              placeholder="Find your Package / Test / Scans"
              className="flex-1 px-2 py-3 outline-none text-gray-700"
            />
            <button className="bg-[#FF3B3B] px-6 py-3 font-semibold text-white">
              Search
            </button>
          </div>

          {/* Text below search */}
          <div className="mt-3 flex flex-wrap gap-6 text-sm text-white">
            <div className="flex text-[14px] font-[500]"><span className="mr-1"><img src="https://cdn1.healthians.com/img/Group_home_icon_1_new.svg" alt="" /></span><span>Free Sample Collection <br/> within <span className="text-[#FBBF49]">60 Mins</span> of Booking*</span></div>
            <div className="flex text-[14px] font-[500]"><span className="mr-1"><img src="https://cdn1.healthians.com/img/Group_home_icon_2.svg" alt="" /></span><span><span className="text-[#FBBF49]">Smart Reports</span> with <br/> Real-Time Updates</span></div>
            <div className="flex text-[14px] font-[500]"><span className="mr-1"><img src="https://cdn1.healthians.com/img/Group_home_icon_3.svg" alt="" /></span><span><span  className="text-[#FBBF49]">Free Report</span> <br/>Counselling</span></div>
          </div>
        </div>
      </div>



      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-112.5 rounded-xl bg-cover bg-center flex items-center"
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
            className="h-112.5 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/b_5.webp')" }}
          />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-112.5 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/fi_new_1.webp')" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
