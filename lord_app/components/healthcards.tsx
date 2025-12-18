"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <section className="py-1 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-[#1a9ca6] mb-12">
          Health Risk
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev2",
            nextEl: ".swiper-button-next2",
          }}
          // pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {healthRisks.map((risk) => (
            <SwiperSlide key={risk.id}>
              <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-5 h-full flex flex-col items-center text-center">
                {/* Icon / Link */}
                <Link href={risk.href}>
                  <Image
                    src={risk.icon}
                    alt={risk.title}
                    width={60}
                    height={60}
                    className="mx-auto mb-3 object-contain cursor-pointer"
                  />
                </Link>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#1a9ca6" }}
                >
                  {risk.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {risk.description}
                </p>

                {/* CTA */}
                <button
                  className="mt-auto text-sm font-medium hover:underline"
                  style={{ color: "#1a9ca6" }}
                >
                  View More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev2  absolute left-[200px] top-1/2 -translate-y-1/2 z-20 bg-orange-500 text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
          ‹
        </button>

        <button className="swiper-button-next2  absolute right-[200px] top-1/2 -translate-y-1/2 z-20 bg-orange-500 text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
          ›
        </button>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
}
