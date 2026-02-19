"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


type Testimonial = {
  id: number;
  name: string;
  city: string;
  review: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "PRIYA S.",
    city: "Pune",
    review:
      "Loved The Convenience! Booked From Home, Got Reports The Same Evening.",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "ROHIT K.",
    city: "Delhi",
    review:
      "Accurate Results, Easy-To-Use App, And Great Support Team.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "ANANYA M.",
    city: "Mumbai",
    review:
      "Seamless Experience From Booking To Reports. LadsPath Has Made Diagnostics Effortless.",
    image: "/user3.jpg",
  },
  {
    id: 4,
    name: "VIKAS R.",
    city: "Hyderabad",
    review:
      "Got My Blood Test Done At Home In Just One Click. Highly Professional And Punctual Team.",
    image: "/user4.jpg",
  },
];

export default function PatientsTrust() {
  return (
    <section className="bg-[#f4f6f9] py-12">
      <div className="max-w-[85rem] mx-auto px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-[#00368C]">
          Patient's Trust
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl bg-[#0B3D91] p-6 text-white shadow-lg h-full">
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed mb-6 opacity-90">
                  "{item.review}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm tracking-wide">
                      {item.name}
                    </h4>
                    <p className="text-xs opacity-80">{item.city}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
