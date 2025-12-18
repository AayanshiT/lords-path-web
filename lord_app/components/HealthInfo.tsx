import { Phone, CheckCircle, Clock, FileText, Headphones } from "lucide-react";
import Link from "next/link";

export default function HealthInfoSection() {
  return (
    <section className="w-full px-4 md:px-10 py-10 bg-white">
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
              <h5 className="text-sm font-semibold text-gray-900">
                We are now empaneled on Government Panels for Health Tests
              </h5>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                For in-service or retired govt. employees across CGHS & Relevant
                Dept, DGEHS & Relevant Dept, AIR INDIA, CAPF (Central Armed
                Police Forces)
              </p>
            </div>
          </div>

          <button className="mt-5 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded-xl w-fit">
            <Phone size={18} />
            Call us: +91-9289902266
          </button>
        </div>

        {/* Right Card */}
        <div className="rounded-2xl bg-[#f1fffe] border border-cyan-100 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex gap-4">
            <img src="/meter.png" alt="Health Score" className="w-14 h-14" />

            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Unlock Your Health Score with HealthKarma!
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Uncover potential health risks and get custom test
                recommendation based on your lifestyle and habits.
              </p>
            </div>
          </div>

          <button className="mt-5 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-xl w-fit">
            Check your health score →
          </button>
        </div>
      </div>

      {/* Trust Bar */}
      <div
        className="rounded-2xl bg-[linear-gradient(0deg,#faffff_0%,#ebfcff_100%)] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-900">
            Why <span className="text-teal-600">8.5 Million Indians</span>
          </h3>
          <p className="text-gray-700 font-medium">Trust Healthians Labs</p>
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
