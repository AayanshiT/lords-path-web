export default function ImagingCard({ data }) {
  return (
    <div className="image-card bg-white rounded-xl shadow-md overflow-hidden border h-full">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {data.title}
        </h3>

        <p className="text-sm mb-3">
          <span className="text-gray-400 line-through mr-2">
            ₹{data.oldPrice}
          </span>
          <span className="text-teal-600 font-semibold">
            Starting @ ₹{data.price}
          </span>
        </p>

        <p className="text-sm text-gray-600 mb-6 line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Feature Box */}
      <div className="custom-border bg-teal-50 border-t px-5 py-4 text-sm relative">
        <span className="orange-text inline-block bg-orange-500 text-white text-xs px-4 py-1 rounded-full mb-3">
          Salient Features
        </span>

        <ul className="text-gray-700 space-y-1">
          {data.features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
