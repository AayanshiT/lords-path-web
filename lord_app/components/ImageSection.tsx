import Image from "next/image";

export default function HealthCheckupJourney() {
  return (
    <section className="w-full bg-white py-20 ">
      <div className="mx-auto max-[85rem] px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-2xl font-medium text-[#303437]">Your Healthians</p>
          <h2 className="text-3xl font-semibold text-[#00368C]">
            Health Checkup Journey
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-80 bg-[linear-gradient(to_right,#fff,#fd9927,#fff)]" />

        </div>

        {/* Full-width Journey Image */}
        <div className="flex justify-center">
          <Image
            src="/photo.png"
            alt="Health Checkup Journey"
            width={1200}
            height={300}
            className="w-full max-w-6xl object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
