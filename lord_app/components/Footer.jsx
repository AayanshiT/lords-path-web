import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import bottom from "./bottom.tsx";

export default function Footer() {
  return (
    <>
    <footer className="bg-white border-t border-gray-200 pb-[100px]">
      <div className="max-[85rem] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUMN 1 */}
        <div className="flex flex-col items-center gap-3 border-dashed border-r border-[#c3c3c3]">
          <Image
            src="/lords_path_logo.png"
            alt="Healthians"
            width={160}
            height={50}
          />

          <div className="mt-4">
            <Image
              src="https://cdn3.healthians.com/img/unit-no1.svg"
              alt="Award Badge"
              width={200}
              height={150}
            />
          </div>

          {/* <p className="mt-3 text-sm text-gray-600">
            in Delhi NCR
          </p> */}
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="text-lg mb-6 text-[18px] font-bold !color-[#363636]">
            IMPORTANT LINKS
          </h4>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-[14px] text-[#848484]">
            <Link className=" hover:text-[#00a0a8]" href="#">About Us</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Our Labs</Link>

            <Link className=" hover:text-[#00a0a8]" href="#">Media</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Contact Us</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Career</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Blog</Link>

            <Link className=" hover:text-[#00a0a8]" href="#">Money Back Policy</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Investors</Link>

            <Link className=" hover:text-[#00a0a8]" href="#">Query/Complaints</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Scan Lab</Link>

            <Link className=" hover:text-[#00a0a8]" href="#">Our Corporate Clients</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">FAQ</Link>

            <Link className=" hover:text-[#00a0a8]" href="#">Rating & Reviews</Link>
            <Link className=" hover:text-[#00a0a8]" href="#">Become Business Partner</Link>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="text-lg text-[18px] font-bold !color-[#363636] mb-4">
            FOLLOW US
          </h4>

          <div className="flex gap-3 mb-6">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#f27d27] text-white cursor-pointer hover:bg-orange-600 transition"
                >
                  <Icon size={16} />
                </span>
              )
            )}
          </div>

          <h4 className="text-lg text-[18px] font-bold !color-[#363636] mb-3">
            GET THE LORDS PATH APP
          </h4>

          <div className="flex gap-1 flex-wrap">
            <Image
              src="/mockups/google_play.png" // Google Play badge
              alt="Google Play"
              width={128}
              height={38}
              className="cursor-pointer"
            />
            <Image
              src="/mockups/appstore.png" // App Store badge
              alt="App Store"
              width={128}
              height={38}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-[#f8f8f8] border-gray-200 py-3 text-center text-sm text-gray-600">
        © 2025 Lordspath.com  |{" "}
        <Link className=" hover:text-[#00a0a8]" href="#">Terms & Conditions</Link>  |{" "}
        <Link className=" hover:text-[#00a0a8]" href="#">Privacy Policy</Link>  |{" "}
        <Link className=" hover:text-[#00a0a8]" href="#">Statutory Compliance</Link>  |{" "}
        <Link className=" hover:text-[#00a0a8]" href="#">Programs & Policies</Link>
      </div>
    </footer>
    {/* <bottom/> */}
    </>
  );
}
