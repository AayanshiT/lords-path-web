'use client';
// import "server-only";
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaChevronDown } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from 'react';
import { OdooRecord } from '@/app/lib/oddo';


export default function TopBar() {
  const [cities, setCities] = useState<{ id: number; name: string }[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { user, logout } = useUser();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    localStorage.setItem("selectedCity", city);
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      setSelectedCity(savedCity);
    }
  }, []);

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

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

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
              <span className="text-[12px] font-normal text-[#6b6b6b]">
                Your Location
              </span>

              {/* <select
                value={selectedCity}
                onChange={handleCityChange}
                className="border-none outline-none bg-transparent text-sm cursor-pointer"
              >
                <option value="" disabled>
                  Select city
                </option>

                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}

                  </option>
                ))}
              </select> */}

              <div className="relative w-35">
                {/* Selected value (looks like select) */}
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between cursor-pointer text-sm"
                >
                  <span>{selectedCity || "Select city"}</span>
                  <span className="text-xs"><ChevronDown /></span>

                </div>

                {/* Dropdown */}
                {open && (
                  <div className="absolute top-full mt-1 w-full bg-white border rounded shadow z-50">

                    {/* SEARCH (first option) */}
                    <input
                      type="text"
                      placeholder="Search city"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full px-2 py-1 text-sm border-b outline-none"
                    />

                    {/* City list (small height) */}
                    <div className="max-h-[160px] overflow-y-auto">
                      {filteredCities.length > 0 ? (
                        filteredCities.map((city) => (
                          <div
                            key={city.id}
                            onClick={() => {
                              setSelectedCity(city.name);
                              localStorage.setItem("selectedCity", city.name);
                              setOpen(false);
                              setSearch("");
                            }}
                            className="px-2 py-1 text-sm cursor-pointer hover:bg-blue-100"
                          >
                            {city.name}
                          </div>
                        ))
                      ) : (
                        <div className="px-2 py-1 text-sm text-gray-400">
                          No city found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
{/* USER INFO  */}

          {!user ? (
            <Link
              href="/login"
              className="svg-style flex items-center gap-1 cursor-pointer"
            >
              <FaUser />
              <span className="text-[13px] font-medium text-[#000]">
                Login / Signup
              </span>
            </Link>
          ) : (
            <div className="relative">
              {/* USER NAME */}
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaUser />
                <span className="text-[13px] font-medium text-[#000]">
                  Hi, {user.name}
                </span>
                <FaChevronDown className="text-[10px]" />
              </button>

              {/* DROPDOWN */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-50">
                  <Link
                    href="/user-profile"
                    className="block px-4 py-2 text-[13px] hover:bg-gray-100"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-[13px] text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}


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
