// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { IMAGING_TESTS } from "./data/imagingTests";
// import ImagingCard from "./ImagingCard";

// export default function HealthScansSection() {
//   return (
//     <section className="py-16 bg-white health-scans-section">
//       <div className="max-[85rem] mx-auto px-4">
//         {/* Heading */}
//         <h2 className="section-heading text-center text-2xl font-semibold [#00368C] mb-10">
//           Health Scans & Imaging Tests
//         </h2>

//         <div className="max-w-6xl mx-auto relative">
//         {/* Swiper */}
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             prevEl: ".swiper-button-prev2",
//             nextEl: ".swiper-button-next2",
//           }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {IMAGING_TESTS.map((item, index) => (
//             <SwiperSlide key={index}>
//               <ImagingCard data={item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* Custom Navigation */}
//         <button className="swiper-button-prev2  absolute top-1/2 -translate-y-1/2 z-20 bg-[#FF3B3B] text-white shadow-md w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
//           ‹
//         </button>
//         <button className="swiper-button-next2  absolute top-1/2 -translate-y-1/2 z-20 bg-[#FF3B3B] text-white shadow-md w-[30px] h-[30px] rounded-[50%] flex items-center justify-center">
//           ›
//         </button>
//         </div>

//         {/* Bottom CTA */}
//         <div className="flex justify-center mt-12">
//           <button className="bg-[#FF3B3B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF3B3B] transition">
//             View All  →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

import ImagingCard from "./ImagingCard";

interface ImagingTest {
  title: string;
  image: string;
  oldPrice: number;
  price: number;
  description: string;
  features: string[];
}

export default function HealthScansSection() {
  const [tests, setTests] = useState<ImagingTest[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await fetch("/api/lab-tests?limit=10");
        const json = await res.json();

        // 🔁 Transform Odoo data → UI card data
        const mappedData: ImagingTest[] = json.data.map((item: any) => ({
          title: item.name,
          image:
            "https://helma.healthians.com/stationery/mailer-assets/61c4280d7545a.jpg", // placeholder (can be dynamic later)
          oldPrice: item.list_price + 500,
          price: item.list_price,
          description:
            "This diagnostic imaging test helps in accurate medical evaluation using advanced technology.",
          features: [
            "Quick & painless procedure",
            "100% non-invasive",
          ],
        }));

        setTests(mappedData);
      } catch (error) {
        console.error("Failed to fetch imaging tests", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center">
        Loading Lab Tests...
      </section>
    );
  }

  return (
    <section className="py-16 bg-white health-scans-section">
      <div className="max-[85rem] mx-auto px-4">
        {/* Heading */}
        <h2 className="section-heading text-center text-2xl font-semibold text-[#00368C] mb-10">
          Health Scans & Imaging Tests
        </h2>

        <div className="max-w-6xl mx-auto relative">
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
            {tests.map((item, index) => (
              <SwiperSlide key={index}>
                <ImagingCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev2 absolute top-1/2 -translate-y-1/2 z-20 bg-[#FF3B3B] text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
            ‹
          </button>
          <button className="swiper-button-next2 absolute top-1/2 -translate-y-1/2 z-20 bg-[#FF3B3B] text-white shadow-md w-[30px] h-[30px] rounded-full flex items-center justify-center">
            ›
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <button 
              onClick={() => router.push("/health-sections")}
          className="bg-[#FF3B3B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e62f2f] transition">
            View All →
          </button>
        </div>
      </div>
    </section>
  );
}

