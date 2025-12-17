import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUMN 1 */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="https://cdn3.healthians.com/img/Healthians-Group.svg"
            alt="Healthians"
            width={160}
            height={50}
          />

          <div className="mt-4">
            <Image
              src="https://cdn3.healthians.com/img/unit-no1.svg"
              alt="Award Badge"
              width={150}
              height={150}
            />
          </div>

          {/* <p className="mt-3 text-sm text-gray-600">
            in Delhi NCR
          </p> */}
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-[20px] font-bold color-[#000000]">
            IMPORTANT LINKS
          </h4>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-gray-700">
            <Link href="#">About Us</Link>
            <Link href="#">Our Labs</Link>

            <Link href="#">Media</Link>
            <Link href="#">Contact Us</Link>

            <Link href="#">Career</Link>
            <Link href="#">Blog</Link>

            <Link href="#">Money Back Policy</Link>
            <Link href="#">Investors</Link>

            <Link href="#">Query/Complaints</Link>
            <Link href="#">Scan Lab</Link>

            <Link href="#">Our Corporate Clients</Link>
            <Link href="#">FAQ</Link>

            <Link href="#">Rating & Reviews</Link>
            <Link href="#">Become Business Partner</Link>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            FOLLOW US
          </h4>

          <div className="flex gap-3 mb-6">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f27d27] text-white cursor-pointer hover:bg-orange-600 transition"
                >
                  <Icon size={16} />
                </span>
              )
            )}
          </div>

          <h4 className="text-lg font-semibold mb-3">
            GET THE HEALTHIANS APP
          </h4>

          <div className="flex gap-3">
            {/* <Image
              src="https://cdn2.healthians.com/img/google_play.png"
              alt="Google Play"
              width={130}
              height={40}
            />
            <Image
              src="https://cdn2.healthians.com/img/appstore.png"
              alt="App Store"
              width={130}
              height={40}
            /> */}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-[#f8f8f8] border-gray-200 py-3 text-center text-sm text-gray-600">
        © 2025 Healthians.com  |{" "}
        <Link href="#">Terms & Conditions</Link>  |{" "}
        <Link href="#">Privacy Policy</Link>  |{" "}
        <Link href="#">Statutory Compliance</Link>  |{" "}
        <Link href="#">Programs & Policies</Link>
      </div>
    </footer>
  );
}
