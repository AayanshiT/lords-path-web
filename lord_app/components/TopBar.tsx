import { FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="https://cdn1.healthians.com/img/healthians-logo.svg" alt="Logo" className="h-16" />
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
        <div className="svg-style flex items-center gap-1 cursor-pointer">
  <FaMapMarkerAlt />
  <div className="flex flex-col items-center">
    <span>your location</span>
    <select className="border-none outline-none bg-transparent text-sm">
      <option value="gurgaon">Gurgaon</option>
  <option value="delhi">Delhi</option>
      <option value="noida">Noida</option>
    </select>
  </div>
</div>

          <div className="svg-style flex items-center gap-1 cursor-pointer">
            <FaUser />
            <span>Login / Signup</span>
          </div>

          <div className="svg-style flex items-center gap-1">
            <FaPhoneAlt />
            <div className="flex flex-col items-center">
              <span>Customer Support</span>
              <span>1800-572-0005</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
