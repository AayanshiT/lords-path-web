"use client";

import { FaHome, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

// Types
type MegaMenu = {
  info: {
    name: string;
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
        name: "Heart",
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
        name: "Full Body Checkup",
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
        name: "Cancer",
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
    <nav className="menu-item relative py-1" id="main-navbar">
      <div className="max-w-[85rem] mx-auto px-4">
        <ul className="flex items-center gap-6 text-white py-1 text-sm font-medium">

          {/* Home */}
          <li className="cursor-pointer text-[17px] font-semibold">
            <FaHome />
          </li>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveMenu(item)}
              className="lists-item relative text-[16.6px] font-semibold cursor-pointer flex items-center gap-1 py-3"
            >
              {item.title}
              {(item.megaMenu || item.submenu) && (
                <FaChevronDown className="text-xs mt-[2px]" />
              )}

              {/* SIMPLE DROPDOWN */}
              {item.submenu && activeMenu?.title === item.title && (
                <ul
                  onMouseLeave={() => setActiveMenu(null)}
                  className=" absolute left-0 top-[50px] w-auto bg-white text-gray-700 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.35)] z-50"
                >
                  {item.submenu.map((sub, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-teal-50 hover:[#00368C]"
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
            top-[60px]
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
            <div className="navbar-tab col-span-1 bg-gray-50 p-6 rounded-l-xl">
              <h4 className="font-[600] text-[16px]  text-[#363636] mb-4">
                {activeMenu.megaMenu.info.title}
              </h4>

              <ul className="points-lost shadow-[0_2px_8px_rgba(0,0,0,0.08)] space-y-2 text-gray-600 text-sm bg-white p-[8px] rounded-[10px]">
                {activeMenu.megaMenu.info.points.map((p, i) => (
                  <li className="flex" key={i}><div className="mr-2 bg-[#36989c] w-[17px] h-[17px] rounded-full text-[9px] text-[#fff] flex items-center justify-center">→</div> {p}</li>
                ))}
              </ul>

              <button className="mt-6 bg-[#f36a46] text-white px-7 py-2 rounded-md text-sm hover:bg-[#f36a46]">
                {activeMenu.megaMenu.info.cta} →
              </button>
            </div>

            {/* Right Cards */}
            <div className="col-span-3 p-6 pt-3 grid-cols-3 gap-1 flex flex-col">
               <h4 className="font-[600] text-[16px]  text-[#363636] mb-2">
                Preventive Packages for {activeMenu.megaMenu.info.name}
              </h4>
              <div className="flex flex-row gap-4">
              {activeMenu.megaMenu.packages.map((pkg, i) => (
                <div
                  key={i}
                  className="package-card border rounded-lg p-4 hover:shadow-md transition"
                >
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">
                    {pkg.name}
                  </h5>
                  <div className="package-meta flex gap-2 py-5 "> 
                    <div className="package-meta-item flex"> 
                      <div className="pkg-icon"> 
                        <span className="sprite-icon-trending sprite-parameter"><img src="./blood.png" alt="" /></span> 
                      </div> 
                    <div> 
                    <span className="package-meta-label">Test Included</span> 
                      <div className="package-meta-value">{pkg.tests}</div> 
                  </div> 
                </div> 
                          <div className="package-meta-item flex"> 
                            <div className="pkg-icon"> 
                              <span className="sprite-icon-trending sprite-clock"><img src="./clock.png" alt="" /></span> 
                              </div> 
                              <div> 
                                <span className="package-meta-label">Report in</span> 
                                <div className="package-meta-value">36 Hrs.</div> 
                                </div> 
                                </div> 
                                </div>


                    
                    <div className="package-pricing flex gap-3 py-4"> 
                      <div> 
                        <div className="package-offer-label">Limited Time Offer</div> 
                        </div> <div className="package-price-group">
                           <span className="package-price">{pkg.price}</span> 
                           <span className="package-original-price">₹1663</span> 
                           </div> <div className="package-discount">
                             <svg width="12" height="12"><use href="#discountnav"></use></svg> 
                             70% off </div> 
                             </div>





                  {/* <p className="text-xs text-gray-500 mb-2">
                    Test Included: {pkg.tests}
                  </p>

                  <p className="[#00368C] font-bold mb-4">
                    {pkg.price}
                  </p> */}

                  <button className="w-full bg-[#00368C] text-white text-sm py-2 rounded-md hover:bg-[#00368C]">
                    Book Now
                  </button>
                </div>
              ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
