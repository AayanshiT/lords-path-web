import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <section className="bg-[#fcfcfc] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT : IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/mockups/phone.png"
            alt="Health App"
            width={500}
            height={500}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a9ca6] mb-4">
            Download Our App Now
          </h2>

          <p className="text-[#848484] text-base md:text-lg mb-8 max-w-lg">
            Tracking health status made easy with the app. Now available on both
            Google Play Store and App Store. Book health tests and access your
            smart reports and health trackers anytime anywhere.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <Image
              src="/mockups/google_play.png" // Google Play badge
              alt="Google Play"
              width={180}
              height={54}
              className="cursor-pointer"
            />
            <Image
              src="/mockups/appstore.png" // App Store badge
              alt="App Store"
              width={180}
              height={54}
              className="cursor-pointer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
