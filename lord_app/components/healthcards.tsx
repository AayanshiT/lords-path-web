"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";


// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { JSX } from "react";

type HealthRisk = {
  id: number;
  title: string;
  description: string;
  icon: string; // image URL
  href: string; // link on click
};

const healthRisks: HealthRisk[] = [
  {
    id: 1,
    title: "Fever",
    description:
      "People often mistake a fever for signs of constant fatigue or seasonal changes...",
    icon: "/heartcards/Fever.png",
    href: "/tests/fever",
  },
  {
    id: 3,
    title: "Vitamins",
    description:
      "A vitamin test checks the levels of essential vitamins in your body...",
    icon: "/heartcards/Vitamins.png",
    href: "/tests/vitamins",
  },
  {
    id: 4,
    title: "Diabetes",
    description:
      "Diabetes is a chronic condition that affects how your body processes blood sugar...",
    icon: "/heartcards/Diabetes.png",
    href: "/tests/diabetes",
  },
  {
    id: 5,
    title: "Heart",
    description:
      "A heart test helps assess your overall heart health and potential risks...",
    icon: "/heartcards/Heart.png",
    href: "/tests/heart",
  },
  {
    id: 6,
    title: "Allergy",
    description:
      "Allergy tests identify substances that trigger allergic reactions...",
    icon: "/heartcards/alergy.png",
    href: "/tests/allergy",
  },
  {
    id: 7,
    title: "Thyroid",
    description:
      "Thyroid tests check hormone levels that regulate metabolism and energy...",
    icon: "/heartcards/Thyroid.png",
    href: "/tests/thyroid",
  },
  {
    id: 8,
    title: "Liver",
    description:
      "Liver function tests evaluate enzymes and proteins for liver health...",
    icon: "/heartcards/Liver.png",
    href: "/tests/liver",
  },
  {
    id: 9,
    title: "Bone",
    description:
      "Bone health tests help detect deficiencies and fracture risks...",
    icon: "/heartcards/Bone.png",
    href: "/tests/bone",
  },
  {
    id: 10,
    title: "Fatigue",
    description: "Fatigue tests help identify nutritional deficiencies...",
    icon: "/heartcards/fatigue.png",
    href: "/tests/fatigue",
  },
  {
    id: 12,
    title: "Cancer",
    description: "Cancer screening tests help detect early warning signs...",
    icon: "/heartcards/Cancer.png",
    href: "/tests/cancer",
  },
  {
    id: 13,
    title: "Anemia",
    description: "Anemia tests measure hemoglobin and iron levels...",
    icon: "/heartcards/Anaemia.png",
    href: "/tests/anemia",
  },
];

export default function HealthRiskSwiper() {
  return (
    <section className="py-1 bg-white health-risk-swiper">
      <div className="max-[85rem] mx-auto px-4">
        {/* Heading */}
        <h2 className="section-heading text-2xl font-[800] text-center text-[#1a9ca6] mb-8">
          Health Risk
        </h2> 

<div className="relative max-w-6xl mx-auto">
        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev3",
            nextEl: ".swiper-button-next3",
          }} 
          // pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {healthRisks.map((risk) => (
            <SwiperSlide key={risk.id} className="!mx-3">
              <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.12)] my-3 transition p-10 h-full flex flex-col items-center text-center border">
                {/* Icon / Link */}
                <Link href={risk.href}>
                  <Image
                    src={risk.icon}
                    alt={risk.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-2 object-contain cursor-pointer"
                  />
                </Link>

                {/* Title */}
                <h3
                  className="text-[24px] font-semibold mb-2"
                  style={{ color: "#1a9ca6" }}
                >
                  {risk.title}
                </h3>

                {/* Description */}
                <p className="text-black text-[14px] leading-[20px] mb-4 line-clamp-3">
                  {risk.description}
                </p>

                {/* CTA */}
                <button
                  className="mt-auto text-sm hover:underline text-[#00a0a8] font-poppins font-semibold text-[16px]"
                  style={{ color: "#00a0a8" }}
                >
                  View More
                </button>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
        <button className="swiper-button-prev3  absolute left-[200px] top-1/2 -translate-y-1/2 z-20 bg-orange-500 text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
          ‹
        </button>

        <button className="swiper-button-next3  absolute right-[200px] top-1/2 -translate-y-1/2 z-20 bg-orange-500 text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
          ›
        </button>
        </div>
         

        {/* View All */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#f16948] py-[10px] pr-[60px] pl-[40px] text-white  rounded-full font-semibold transition">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
}
