"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

type Blog = {
  id: number;
  title: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Mind Blowing Benefits of Kegel Exercise for Men and Women",
    image: "/blogs/blog1.webp",
  },
  {
    id: 2,
    title: "8 Amazing Benefits of Eating Groundnuts Daily",
    image: "/blogs/blogs2.webp",
  },
  {
    id: 3,
    title:
      "Breathe Better: How to Protect Your Health from the Impact of Air Pollution?",
    image: "/blogs/blog6.webp",
  },
  {
    id: 4,
    title:
      "Top 10 Real Health Benefits of Giloy",
    image: "/blogs/blog3.webp",
  },
  
];

export default function HealthBlogsArticles() {
  return (
    <section className="w-full bg-[#fafafa] py-6 blogs-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#1a9ca6]">
          Health Blogs & Articles
        </h2>

        {/* Swiper */}
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
          {blogs.map((blog, index) => (
            <SwiperSlide key={`${blog.id}-${index}`}>
              <div className="h-full rounded-xl border bg-white shadow-sm transition hover:shadow-md">
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 group">
                  <h3 className="text-base font-medium text-[#333]  group-hover:text-[#1a9ca6] transition-colors duration-300">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
