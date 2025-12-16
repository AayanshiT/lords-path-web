"use client";

import { FaHome, FaChevronDown } from "react-icons/fa";

const menuItems = [
  {
    title: "Full Body Checkup",
    submenu: ["Basic Checkup", "Advanced Checkup", "Executive Checkup"],
  },
  {
    title: "Heart",
    submenu: ["ECG", "Echo", "Lipid Profile"],
  },
  {
    title: "Cancer",
    submenu: ["Breast Cancer", "Lung Cancer", "Prostate Cancer"],
  },
  {
    title: "Thyroid",
    submenu: ["TSH", "T3 T4", "Thyroid Profile"],
  },
  {
    title: "Diabetes",
    submenu: ["HbA1c", "Fasting Sugar", "Post Prandial"],
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
  return (
    <nav className="bg-teal-500">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-6 text-white py-3 text-sm font-medium">

          {/* Home */}
          <li className="relative group cursor-pointer">
            <FaHome className="text-base" />
          </li>

          {/* Dropdown Items */}
          {menuItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                {item.title}
                <FaChevronDown className="text-xs mt-[2px]" />
              </div>

              {/* Dropdown */}
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {item.submenu.map((subItem, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-teal-50 hover:text-teal-600 cursor-pointer"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
