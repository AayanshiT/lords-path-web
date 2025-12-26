// "use client";

// import { useEffect, useState } from "react";

// interface LabTest {
//   id: number;
//   name: string;
//   list_price: number;
//   type: string;
// }

// export default function LabTests() {
//   const [tests, setTests] = useState<LabTest[]>([]);
//   const [offset, setOffset] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const LIMIT = 20;

//   const loadTests = async () => {
//     setLoading(true);

//     const res = await fetch(
//       `/api/lab-tests?offset=${offset}&limit=${LIMIT}`
//     );
//     const json = await res.json();

//     setTests(prev => [...prev, ...json.data]);
//     setOffset(prev => prev + LIMIT);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadTests();
//   }, []);

//   return (
//     <div className="space-y-4">
//       <h2 className="text-xl font-semibold">Available Lab Tests</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {tests.map(test => (
//           <div
//             key={test.id}
//             className="border p-4 rounded-lg shadow-sm"
//           >
//             <h3 className="font-medium">{test.name}</h3>
//             <p className="text-sm text-gray-500">{test.type}</p>
//             <p className="mt-2 font-semibold">
//               ₹{test.list_price}
//             </p>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={loadTests}
//         disabled={loading}
//         className="px-6 py-2 bg-blue-600 text-white rounded"
//       >
//         {loading ? "Loading..." : "Load More"}
//       </button>
//     </div>
//   );
// }
