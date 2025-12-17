import Image from "next/image";

const services = [
  {
    title: "Blood Tests",
    offer: "Up to 79% off",
    bg: "bg-cyan-50",
    icon: "/icons/lab.png",
  },
  {
    title: "X-Rays, Scans and MRI Tests",
    offer: "Up to 70% off",
    bg: "bg-indigo-50",
    icon: "/icons/test.png",
  },
  {
    title: "Doctor & Diet Consultations",
    offer: "Up to 75% off",
    bg: "bg-orange-50",
    icon: "/icons/tube.png",
  },
  {
    title: "Herbved+ Supplements",
    offer: "Flat 55% off",
    bg: "bg-blue-50",
    icon: "/icons/med.png",
  },
  {
    title: "Genetic Testing",
    offer: "Up to 70% off",
    bg: "bg-pink-50",
    icon: "/icons/hos.png",
  },
  {
    title: "Upload Prescription",
    offer: "Up to 70% off",
    bg: "bg-sky-50",
    icon: "/icons/heart.png",
  },
];

export default function ServiceCards() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-4 px-4 py-6 justify-center">
        {services.map((item, index) => (
          <div
            key={index}
            className="w-[190px] cursor-pointer hover:scale-105 transition-transform pb-6"
          >
            <div
              className={`relative h-[130px] rounded-2xl flex items-center justify-center ${item.bg} shadow-md`}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              )}

              {item.offer && (
                <p className="  absolute -bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-[#00a0a8] bg-[#EBFCFD] px-2 py-1 rounded-full shadow">
                  {item.offer}
                </p>
              )}
            </div>

            <p className="text-wrap font-medium text-gray-900 leading-snug mt-6 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
