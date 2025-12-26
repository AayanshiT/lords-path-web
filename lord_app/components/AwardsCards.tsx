"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


type Award = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const awards: Award[] = [
    {
        id: 1,
        title: "6th IHW Awards 2020-Gold",
        description: "Emerging Healthcare Delivery Brand",
        image: "/awards/award2.webp",
    },
    {
        id: 2,
        title: "Indian Excellence Award for",
        description: "Best Home Healthcare Delivery Brand",
        image: "/awards/award3.webp",
    },
    {
        id: 3,
        title: "Economic Times Edge Awards 2019 - Top ",
        description: "Emerging Innovative Healthcare Brand of the Year",
        image: "/awards/award5.webp",
    },
    {
        id: 4,
        title: "6th IHW Awards 2020-Gold Emerging Healthcare",
        description: " Delivery Brand",
        image: "/awards/award1.webp",
    },

];

export default function RewardsRecognition() {
    return (
        <section className="w-full bg-[#fff] py-1 awards-section">
            <div className="mx-auto max-[85rem] px-6">
                <h2 className="mb-12 text-center text-3xl font-semibold text-[#00368C]">
                    Rewards & Recognition
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={24}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="!pb-12"
                >
                    {awards.map((award) => (
                        <SwiperSlide key={award.id}>
                            <div className="h-full rounded-xl border bg-white py-16 px-6 shadow-sm transition hover:shadow-md">
                                <div className="flex h-full items-center gap-4">

                                    {/* IMAGE */}
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={award.image}
                                            alt={award.title}
                                            width={100}
                                            height={120}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">
                                            {award.title}
                                        </h3>
                                        {award.description && (
                                            <p className="mt-2 text-sm text-gray-600">
                                                {award.description}
                                            </p>
                                        )}
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
