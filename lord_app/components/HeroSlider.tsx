"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

// import "./global.css";
// import "swiper/css";
// import "swiper/css/pagination";

export default function HeroSlider() {
  /* =======================
    🔹 STATES (ADD)
 ======================= */
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const searchTimeout = useRef<number | null>(null);

  /* =======================
     🔹 API SEARCH (ADD)
  ======================= */
  const handleSearch = async (query: string) => {
    if (!query || query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`/api/lab-tests?limit=50`);
      const json = await res.json();

      const filteredResults = (json.data || []).filter((item: any) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };


  /*=======================
     🔹 INPUT CHANGE (DEBOUNCE)
  ======================= */
  const onSearchChange = (text: string) => {
    setInputValue(text);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = window.setTimeout(() => {
      handleSearch(text);
    }, 400);
  };
  return (
    <div className="hero-swiper relative max-w-[85rem] mx-auto mt-6 px-4">

      {/*  SEARCH BAR (FIXED ON ALL SLIDES) */}
      <div className="absolute bottom-[60px] left-[440px]  z-20 w-full max-w-[60%] -translate-x-1/2 px-4">
        <div className="  p-4">

          {/* Search input */}
          <div className="flex overflow-hidden rounded-lg border-0 bg-white shadow-lg">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => onSearchChange(e.target.value)}   // ✅ SEARCH ON TYPE
              placeholder="Find your Package / Test / Scans"
              className="flex-1 px-4 py-3 outline-none text-gray-700"
            />
            <button
              onClick={() => handleSearch(inputValue)}
              className="bg-[#FF3B3B] px-6 py-3 font-semibold text-white"
            >
              Search
            </button>


          </div>
          {/* 🔽 SEARCH RESULTS DROPDOWN */}
          {inputValue.length >= 2 && (
            <div className="absolute top-full left-0 right-0  bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {loading ? (
                <div className="px-4 py-3 text-gray-500">
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((test) => (
                  <div
                    key={test.id}
                    onClick={() => {
                      setInputValue(test.name);
                      router.push(`/health-sections`);
                      setSearchResults([]);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                  >
                    {test.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500">
                  No tests found
                </div>
              )}
            </div>
          )}


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
