import { Phone, CheckCircle, Clock, FileText, Headphones } from "lucide-react";
import Link from "next/link";

export default function HealthInfoSection() {
  return (
    <section className="max-w-[85rem] mx-auto bg-white">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left Card */}
        <div className="rounded-2xl bg-[#f1fffe] border border-teal-100 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex gap-4">
            <img
              src="/certificate.png"
              alt="Govt Panel"
              className="w-14 h-14"
            />

            <div>
              <h5 className="text-[14px] font-semibold text-gray-900">
                We are now empaneled on Government Panels for Health Tests
              </h5>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                For in-service or retired govt. employees across CGHS & Relevant
                Dept, DGEHS & Relevant Dept, AIR INDIA, CAPF (Central Armed
                Police Forces)
              </p>
          <button className="mt-5 inline-flex items-center gap-2 bg-[#efb752] hover:bg-[#dca543] text-black font-semibold px-5 py-3 rounded-xl w-fit">
            <Phone size={18} />
            Call us: +91-9289902266
          </button>
            </div>
          </div>

        </div>

        {/* Right Card */}
        <div className="rounded-2xl bg-[#f1fffe] border border-cyan-100 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex gap-4">
            <img src="/meter.png" alt="Health Score" className="w-14 h-14" />

            <div>
              <h3 className="text-[14px] font-semibold text-gray-900">
                Unlock Your Health Score with HealthKarma!
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Uncover potential health risks and get custom test
                recommendation based on your lifestyle and habits.
              </p>
          <button className="mt-5 inline-flex items-center gap-2 bg-[#F36A46] hover:bg-[#006d73] text-white font-semibold px-5 py-3 rounded-xl w-fit">
            Check your health score →
          </button>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Bar */}
      <div
        className="rounded-2xl bg-[linear-gradient(0deg,#faffff_0%,#ebfcff_100%)] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h3 className="text-[19px] font-semibold text-gray-900">
            Why <span className="text-teal-600 font-bold">8.5 Million</span> Indians
          </h3>
          <p className="text-gray-700 font-medium text-[17px]">Trust Healthians Labs</p>
        </div>

        <div className="flex flex-wrap justify-center text-gray-700">
          <Feature icon={<img src="/call.svg" alt="call" className="w-8 h-8" />} text="CAP & NABL Accredited Labs" />
          <Feature icon={<img src="/clock.svg" alt="clock" className="w-8 h-8" />} text="On Time Sample Collection" />
          <Feature icon={<img src="/report.svg" alt="report" className="w-8 h-8" />} text="Smart Reports in 6 Hours" />
          <Feature icon={<img src="/award.svg" alt="award" className="w-8 h-8" />} text="Free Report Consultation" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium">
      <div className="text-teal-600">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );
}
