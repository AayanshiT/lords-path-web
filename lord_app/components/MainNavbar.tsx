"use client";

import { FaHome, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

// Types
type MegaMenu = {
  info: {
    title: string;
    points: string[];
    cta: string;
  };
  packages: {
    name: string;
    tests: string;
    price: string;
  }[];
};

type MenuItem = {
  title: string;
  megaMenu?: MegaMenu;
  submenu?: string[];
};

const menuItems: MenuItem[] = [
  {
    title: "Heart",
    megaMenu: {
      info: {
        title: "Why Heart Checkups Matter:",
        points: [
          "Heart issues often start silently.",
          "Early tests can save lives.",
          "A healthy heart powers everything.",
        ],
        cta: "Talk to a Health Advisor",
      },
      packages: [
        { name: "Cardiac Health Marker", tests: "11 Tests", price: "₹499" },
        { name: "Cardiac Health Marker Comprehensive", tests: "16 Tests", price: "₹811" },
        { name: "Healthians Cardiac Risk Special", tests: "71 Tests", price: "₹2949" },
      ],
    },
  },
  {
    title: "Full Body Checkup",
    megaMenu: {
      info: {
        title: "Why Full Body Checkups Matter:",
        points: [
          "Detect problems early.",
          "Track overall health.",
          "Prevent lifestyle diseases.",
        ],
        cta: "Book a Full Body Check",
      },
      packages: [
        { name: "Basic Full Body", tests: "60 Tests", price: "₹999" },
        { name: "Advanced Full Body", tests: "75 Tests", price: "₹1499" },
        { name: "Comprehensive Full Body", tests: "90 Tests", price: "₹1999" },
      ],
    },
  },
  {
    title: "Cancer",
    megaMenu: {
      info: {
        title: "Cancer Screening Importance:",
        points: [
          "Early detection saves lives.",
          "Know your risk factors.",
          "Prevent late diagnosis.",
        ],
        cta: "Talk to Expert",
      },
      packages: [
        { name: "Cancer Basic Screen", tests: "20 Tests", price: "₹1299" },
        { name: "Cancer Advanced Screen", tests: "35 Tests", price: "₹2499" },
        { name: "Cancer Premium Screen", tests: "50 Tests", price: "₹3999" },
      ],
    },
  },
  {
    title: "Pregnancy",
    submenu: ["Pregnancy Profile", "Double Marker", "Triple Marker"],
  },
  {
    title: "Allergy/Intolerance",
    submenu: ["Food Allergy", "Dust Allergy", "Skin Allergy"],
  },
  {
    title: "Hormone",
    submenu: ["Testosterone", "Estrogen", "Cortisol"],
  },
  {
    title: "Health Tips",
    submenu: ["Fitness", "Nutrition", "Mental Health"],
  },
];

export default function MainNavbar() {
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null);

  return (
    <nav className="menu-item relative py-1">
      <div className="max-w-[85rem] mx-auto px-4">
        <ul className="flex items-center gap-6 text-white py-3 text-sm font-medium">

          {/* Home */}
          <li className="cursor-pointer text-[17px] font-semibold">
            <FaHome />
          </li>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveMenu(item)}
              className="relative text-[16.6px] font-semibold cursor-pointer flex items-center gap-1"
            >
              {item.title}
              {(item.megaMenu || item.submenu) && (
                <FaChevronDown className="text-xs mt-[2px]" />
              )}

              {/* SIMPLE DROPDOWN */}
              {item.submenu && activeMenu?.title === item.title && (
                <ul
                  onMouseLeave={() => setActiveMenu(null)}
                  className="absolute left-0 top-full mt-2 w-52 bg-white text-gray-700 rounded-md shadow-lg z-50"
                >
                  {item.submenu.map((sub, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-teal-50 hover:text-teal-600"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ================= MEGA DROPDOWN (SINGLE, CENTERED) ================= */}
      {activeMenu?.megaMenu && (
        <div
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-full
            mt-3
            w-6xl
            max-w-[95vw]
            bg-white
            rounded-xl
            shadow-xl
            z-50
          "
        >
          <div className="grid grid-cols-4">

            {/* Left Info */}
            <div className="col-span-1 bg-gray-50 p-6 rounded-l-xl">
              <h4 className="font-semibold text-gray-800 mb-4">
                {activeMenu.megaMenu.info.title}
              </h4>

              <ul className="space-y-2 text-gray-600 text-sm">
                {activeMenu.megaMenu.info.points.map((p, i) => (
                  <li key={i}>✔ {p}</li>
                ))}
              </ul>

              <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600">
                {activeMenu.megaMenu.info.cta} →
              </button>
            </div>

            {/* Right Cards */}
            <div className="col-span-3 p-6 grid grid-cols-3 gap-4">
              {activeMenu.megaMenu.packages.map((pkg, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">
                    {pkg.name}
                  </h5>

                  <p className="text-xs text-gray-500 mb-2">
                    Test Included: {pkg.tests}
                  </p>

                  <p className="text-teal-600 font-bold mb-4">
                    {pkg.price}
                  </p>

                  <button className="w-full bg-teal-500 text-white text-sm py-2 rounded-md hover:bg-teal-600">
                    Book Now
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
