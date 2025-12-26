export default function ImagingCard({ data }) {
  return (
    <div className="image-card bg-white rounded-xl shadow-md overflow-hidden border h-full">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover border-b border-[#00368C]"
      />

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="font-semibold font-['Poppins',sans-serif] text-[#393939] text-[22px] mb-2">
          {data.title}
        </h3>

        <p className="text-sm mb-3">
         
          <span className="font-medium font-['Poppins',sans-serif] text-[#00368C] text-[20px]">
            Starting @  <span className=" line-through mr-2">
            ₹{data.oldPrice}
          </span> ₹{data.price}
          </span>
        </p>

        <p className="text-[12px] font-['Poppins',sans-serif] text-[#5a5a5a] font-normal leading-[18px] 
 mb-6 line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Feature Box */}
      <div className="custom-border bg-[#E8EEFF] border-t px-5 py-4 text-sm relative">
        <span className="orange-text inline-block bg-[#FF3B3B] text-white font-medium text-[12px] px-4 py-1 rounded-full mb-3">
          Salient Features
        </span>

        <ul className="text-gray-800 text-[12px] space-y-1">
          {data.features.map((feature, idx) => (
            <li key={idx}> {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
