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
    offer: "",
    bg: "bg-sky-50",
    icon: "/icons/heart.png",
  },
];

export default function ServiceCards() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-6 min-w-max px-4 py-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="w-[190px] shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <div
              className={`h-[130px] rounded-2xl flex items-center justify-center ${item.bg} shadow-md`}
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
            </div>

            {item.offer && (
              <p className="text-sm font-semibold text-teal-600 mt-2 text-center">
                {item.offer}
              </p>
            )}

            <p className="text-sm font-medium text-gray-900 leading-snug mt-1 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
