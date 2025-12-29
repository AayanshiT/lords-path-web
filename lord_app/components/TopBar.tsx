'use client';
// import "server-only";
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
// import { fetchCityList } from "@/app/lib/oddo";
import { useEffect, useState } from 'react';
import { OdooRecord } from '@/app/lib/oddo';

export default function TopBar() {
  const [cities, setCities] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch("/api/cities");
        const json = await res.json();

        if (!json.success || !Array.isArray(json.data)) {
          console.error("Invalid city API response:", json);
          setCities([]);
          return;
        }

        const cityData = json.data.map((item: any) => ({
          id: item.id,
          name: String(item.name),
        }));

        setCities(cityData);
      } catch (error) {
        console.error("Error fetching city list:", error);
        setCities([]);
      }
    }

    fetchCities();
  }, []);


  return (
    <div className="w-full bg-white">
      <div className="max-w-[85rem] mx-auto flex items-center justify-between py-2 px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src="/lords_path_logo.png" alt="Logo" className="h-16" />
          </a>
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <div className="svg-style flex items-center gap-1 cursor-pointer">
            <FaMapMarkerAlt />
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-normal text-[#6b6b6b]">Your Location</span>
              <select className="border-none outline-none bg-transparent text-sm">
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>

          <Link href="/login" className="svg-style flex items-center gap-1 cursor-pointer">
            <FaUser />
            <span className="text-[13px] font-medium text-[#000]">Login / Signup</span>
          </Link>

          <div className="svg-style flex items-center gap-1">
            <FaPhoneAlt />
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-normal text-[#6b6b6b]">Customer Support</span>
              <span className="text-[13px] font-medium text-[#333]">1800-572-0005</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
