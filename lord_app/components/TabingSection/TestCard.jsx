"use client";
import { useRouter } from "next/navigation";

export function TestCard({ data }) {
  // console.log("TestCard data:", data);
  const router = useRouter();

  return (
    <div className="tabing-card bg-white rounded-xl shadow-sm border h-full flex flex-col justify-between overflow-hidden">
      {/* <div> */}
      <div className="flex justify-between items-start">
        <h3 className="p-5 font-semibold text-gray-800">{data.title}</h3>
        <div className="test-count [#E8EEFF] flex flex-col items-center w-[80px] h-[60px] text-[24px] font-semibold px-3 py-1 ">
          {data.testCount}{" "}
          <span className="text-xs text-[16px] font-medium">Tests</span>
        </div>
      </div>
      <div className="p-5">
        <p className="pt-2 text-sm text-gray-600 mb-3 border-t border-dashed border-[#cfcfcf]">
          <span className="font-medium text-black">Tests Included:</span>{" "}
          {data.description}
          <span className="text-black cursor-pointer"> ...more</span>
        </p>

        <div className="text-xs text-gray-500 flex justify-between mb-2 ">
          <span className="tracking-[0.01em] text-center text-[#00368C] font-medium leading-[18px] text-[13px]">
            <a href="#">+ Know more</a>
          </span>
          {/* <span>Report in {data.reportTime}</span> */}
          <select
            className="border-none outline-none text-[13px] text-[#333] h-[36px] flex items-center justify-between px-[15px] py-[6px] rounded-[10px] cursor-pointer bg-[#f1f7ff] w-auto mr-[6px] text-center leading-[21px] border border-[#e0f6f6]
"
          >
            <option value="gurgaon">2 member</option>
            <option value="delhi">1 member</option>
            <option value="noida">3 member</option>
          </select>
        </div>

        <div>
          <p
            className="multidiscounttext py-2 text-center ml-0 text-[11px] font-medium text-[#393939] mb-0 tracking-[-0.3px] px-[10px] py-[6px] border-t border-b border-dashed border-[#b9b9b9] mt-[5px]
"
          >
            {" "}
            + Add 1 more → Pay ₹1512/person!{" "}
          </p>

          <div className="parameter_panel flex flex-row gap-2 my-[15px] mx-0">
            <div className="icon_param flex items-start firstone text-[12px]">
              <img
                className="lazy-loaded w-[16px]"
                data-src="https://cdn1.healthians.com/img/svg_assets/fasting.svg"
                alt="fasting"
                src="https://cdn1.healthians.com/img/svg_assets/fasting.svg"
              ></img>
              <span className="first text-[#858585]">
                12 hrs Fasting Required
              </span>
            </div>
            <div className="icon_param flex items-start text-[12px]">
              <img
                className="lazy-loaded w-[16px]"
                data-src="https://cdn1.healthians.com/img/svg_assets/gender.svg"
                alt="gender"
                src="https://cdn1.healthians.com/img/svg_assets/gender.svg"
              ></img>
              <span className="text-[#858585]">Recommended for Everyone</span>
            </div>
            <div className="icon_param flex items-start text-[12px]">
              <img
                className="lazy-loaded w-[16px]"
                data-src="https://cdn1.healthians.com/img/svg_assets/time.svg"
                alt="report time"
                src="https://cdn1.healthians.com/img/svg_assets/time.svg"
              ></img>
              <span className="text-[#858585]">Reports within 21 Hours</span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bg-[#E8EEFF] p-2">
        <div className="flex justify-between items-center">
          <div className="ml-3">
            <span className="text-[18px] font-semibold text-[#00368C]">
              ₹{data.price} <span className="text-[10px]">Per Person</span>
            </span>

            <div className="text-[18px] font-medium text-[#4f4f4f]">
              <span className="text-lg font-semibold ">
                ₹{data.defaultPrice}
              </span>
              <span className="text-sm text-gray-400 line-through ml-2">
                ₹{data.oldPrice}
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push(`/checkout?packageId=${data.id}`)}
            className="bg-[#00368C] text-white px-8 py-2 rounded-lg text-sm hover:bg-[#0f49a7] transition"
          >
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}
