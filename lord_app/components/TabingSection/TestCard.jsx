export function TestCard({ data }) {
    return (
      <div className="bg-white rounded-xl shadow-sm border h-full flex flex-col justify-between">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-gray-800">{data.title}</h3>
            <div className="bg-teal-50 text-teal-600 text-sm font-semibold px-3 py-1 rounded-lg">
              {data.testCount} <span className="text-xs">Tests</span>
            </div>
          </div>
  
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium">Tests Included:</span>{" "}
            {data.description}
            <span className="text-teal-600 cursor-pointer"> ...more</span>
          </p>
  
          <div className="text-xs text-gray-500 flex justify-between mb-4">
            <span>No Fasting Required</span>
            <span>Report in {data.reportTime}</span>
          </div>
        </div>
  
        <div className="border-t p-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-lg font-semibold text-gray-800">
                ₹{data.price}
              </span>
              <span className="text-sm text-gray-400 line-through ml-2">
                ₹{data.oldPrice}
              </span>
              <div className="text-xs text-orange-500 font-medium">
                🔥 UPTO 70% OFF
              </div>
            </div>
  
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
              Book Now →
            </button>
          </div>
        </div>
      </div>
    );
  }
  