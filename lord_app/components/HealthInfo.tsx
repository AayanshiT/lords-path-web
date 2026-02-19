"use client";
import { useRouter } from "next/navigation";
import { Phone, CheckCircle, Clock, FileText, Headphones, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HealthInfoSection() {
  const router = useRouter();

  return (
    <section className="max-w-[85rem] mx-auto bg-white">

      {/* Trust Bar */}

      <div className="rounded-2xl mb-8 bg-[linear-gradient(0deg,#f9fbff_0%,#f3f7ff_100%)] px-6 py-10">

        {/* Heading Section */}
        <div className="text-center mb-8">
          <h3 className="text-[22px] font-semibold text-gray-900">
            Why <span className="text-[#00368C] font-bold">LORDS PATH</span>
          </h3>
          <p className="text-gray-700 font-medium text-[17px] mt-2">
            More Than Just a Lab, It’s Healthcare You Can Trust
          </p>
        </div>

        {/* Features Row */}
        <div className="flex justify-between items-start max-w-6xl mx-auto">

          <Feature
            icon={<img src="/india.png" alt="india" className="w-16 h-16" />}
            text="NABL Accredited Labs"
          />

          <Feature
            icon={<img src="/logo.png" alt="logo" className="w-16 h-16" />}
            text="Expert Pathologists"
          />

          <Feature
            icon={<img src="/pathologist.png" alt="pathologist" className="w-16 h-16" />}
            text="PAN-India Network"
          />

          <Feature
            icon={<img src="/time.png" alt="time" className="w-16 h-16" />}
            text="On-Time Reports"
          />

          <Feature
            icon={<img src="/credit.png" alt="credit" className="w-16 h-16" />}
            text="Free Consultation"
          />

        </div>
      </div>


      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left Card */}
        <div className="rounded-2xl bg-[#f3f7ff] border border-[#00368C]/15 p-6 flex flex-col justify-between shadow-sm">

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
              <button className="mt-5 inline-flex items-center gap-2 bg-[#00368C] hover:bg-[#FF3B3B] hover:cursor-pointer text-white font-semibold px-5 py-3 rounded-xl w-fit">
                <Phone size={18} />
                Call us: +91-9289902266
              </button>
            </div>
          </div>

        </div>

        {/* Right Card */}
        <div className="rounded-2xl bg-[#f3f7ff] border border-[#00368C]/15 p-6 flex flex-col justify-between shadow-sm">

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
              <button onClick={() => router.push("/health-score")}
                className="mt-5 inline-flex items-center gap-2 bg-[#FF3B3B] hover:bg-[#00368C] hover:cursor-pointer text-white font-semibold px-5 py-3 rounded-xl w-fit">
                Check your health score →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Book Test Card */}
      <div className="rounded-2xl bg-[#f3f7ff] border border-gray-200 p-8 shadow-md text-center">

        <h3 className="text-xl font-semibold text-gray-900">
          Book Your Test Easily
        </h3>

        <p className="text-gray-600 mt-3">
          Upload your prescription or connect with us instantly via
          call or WhatsApp
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

          <button className="bg-[#00368C] hover:bg-[#002a6d] text-white font-semibold px-6 py-3 rounded-xl">
            Upload Prescription
          </button>

          <button className="border-2 border-[#00368C] text-[#00368C] hover:bg-[#00368C] hover:text-white font-semibold px-6 py-3 rounded-xl">
            Call / WhatsApp
          </button>

        </div>

      </div>


      {/* Trust Bar */}
      {/* <div className="rounded-2xl bg-[linear-gradient(0deg,#f9fbff_0%,#f3f7ff_100%)] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h3 className="text-[19px] font-semibold text-gray-900">
            Why <span className="[#00368C] font-bold">8.5 Million</span> Indians
          </h3>
          <p className="text-gray-700 font-medium text-[17px]">Trust Healthians Labs</p>
        </div>

        <div className="flex flex-wrap justify-center text-gray-700 gap-3">
          <Feature icon={<img src="/call.svg" alt="call" className="w-8 h-8" />} text="CAP & NABL Accredited Labs" />
          <Feature icon={<img src="/clock.svg" alt="clock" className="w-8 h-8" />} text="On Time Sample Collection" />
          <Feature icon={<img src="/report.svg" alt="report" className="w-8 h-8" />} text="Smart Reports in 6 Hours" />
          <Feature icon={<img src="/award.svg" alt="award" className="w-8 h-8" />} text="Free Report Consultation" />
        </div>
      </div> */}
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center text-center w-[150px]">
      <div className="mb-3">{icon}</div>
      <p className="text-base font-semibold text-[#00368C] leading-tight">
        {text}
      </p>
    </div>
  );
}