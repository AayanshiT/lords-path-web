import { FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="https://cdn1.healthians.com/img/healthians-logo.svg" alt="Logo" className="h-16" />
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaMapMarkerAlt />
            <span>Gurgaon</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <FaUser />
            <span>Login / Signup</span>
          </div>

          <div className="flex items-center gap-1">
            <FaPhoneAlt />
            <span>1800-572-0005</span>
          </div>
        </div>
      </div>
    </div>
  );
}
