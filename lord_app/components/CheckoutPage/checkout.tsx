// 'use client';
// import { useState } from 'react';
// import { User, Plus, CheckCircle } from 'lucide-react';

// export default function CheckoutPage() {
//   const [selectedMembers, setSelectedMembers] = useState(2);
//   const [members, setMembers] = useState([
//     { id: 1, name: 'Aayanshi Sharma', gender: 'Female', age: "24", selected: true }
//   ]);

//   const packageDetails = {
//     name: ' Winter Wellness Package - Male',
//     originalPrice: 21762,
//     discountedPrice: 3917,
//     pricePerPerson: 1959,
//     couponCode: 'WELLNESS_PACKAGE'
//   };

//   const addMember = () => {
//     const newMember = {
//       id: members.length + 1,
//       name: '',
//       gender: '',
//       age: '',
//       selected: false
//     };
//     setMembers([...members, newMember]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Main Content */}
//         <div className="lg:col-span-2 space-y-6">
//           {/* Step 1: Contact Info */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="px-6 py-4 flex items-center gap-3 text-white" style={{backgroundColor: '#00368C'}}>
//               <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-semibold" style={{color: '#00368C'}}>
//                 1
//               </div>
//               <h2 className="text-lg font-semibold">Aayanshi Sharma | +91 911111111</h2>
//             </div>
//           </div>

//           {/* Step 2: Select Package Members */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="bg-[#00368C] text-white px-6 py-4 flex items-center gap-3">
//               <div className="w-8 h-8 bg-white text-[#00368C] rounded flex items-center justify-center font-semibold">
//                 2
//               </div>
//               <h2 className="text-lg font-semibold">Select Package Members</h2>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Group Complete Badge */}
//               <div className="bg-blue-50 border border-blue-400 rounded-lg px-4 py-3 flex items-center gap-2">
//                 <span className="text-xl">🔒</span>
//                 <span className="font-semibold text-red-800">
//                   Group Complete! Price Locked: ₹1959/person!
//                 </span>
//               </div>

//               {/* Member Selection */}
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#00368C] transition">
//                   <input
//                     type="radio"
//                     name="members"
//                     checked={selectedMembers === 1}
//                     onChange={() => setSelectedMembers(1)}
//                     className="w-5 h-5"
//                   />
//                   <div>
//                     <div className="font-semibold">1 Member</div>
//                     <div className="text-sm">
//                       <span className="font-bold text-lg">₹2611</span>
//                       <span className="text-gray-400 line-through ml-2">₹10001</span>
//                     </div>
//                   </div>
//                 </label>

//                 <label className="flex items-center gap-3 p-4 border-2 border-[#00368C] bg-blue-50 rounded-lg cursor-pointer">
//                   <input
//                     type="radio"
//                     name="members"
//                     checked={selectedMembers === 2}
//                     onChange={() => setSelectedMembers(2)}
//                     className="w-5 h-5"
//                   />
//                   <div>
//                     <div className="font-semibold text-teal-700">2 Members</div>
//                     <div className="text-sm">
//                       <span className="font-bold text-lg text-teal-700">₹3917</span>
//                       <span className="text-gray-400 line-through ml-2">₹21762</span>
//                     </div>
//                   </div>
//                 </label>
//               </div>

//               {/* Family Members List */}
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-4">
//                   Family Member (Choose 2 members)
//                 </h3>
                
//                 <div className="space-y-3">
//                   {members.map((member) => (
//                     <div
//                       key={member.id}
//                       className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#00368C] transition"
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                           <User className="w-5 h-5 text-gray-500" />
//                         </div>
//                         <div>
//                           <div className="font-medium">{member.name || 'Add Member'}</div>
//                           {member.gender && member.age && (
//                             <div className="text-sm text-gray-500">
//                               Self {member.gender}, {member.age} yrs.
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <input
//                         type="checkbox"
//                         checked={member.selected}
//                         onChange={() => {}}
//                         className="w-5 h-5 rounded border-gray-300"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 <button className="px-8 py-3 bg-[#FF3B3B] hover:bg-red-600 text-white font-semibold rounded-lg transition">
//                   Next
//                 </button>
//                 <button
//                   onClick={addMember}
//                   className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition flex items-center gap-2"
//                 >
//                   <Plus className="w-5 h-5" />
//                   Add More Member
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Step 3: Address */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="bg-gray-100 text-gray-800 px-6 py-4 flex items-center gap-3">
//               <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded flex items-center justify-center font-semibold">
//                 3
//               </div>
//               <h2 className="text-lg font-semibold">Add Sample Collection Address, Date & Time</h2>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar - Package Summary */}
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-6">
//             <div className="bg-[#00368C] text-white px-6 py-4">
//               <h2 className="text-lg font-semibold">SELECTED PACKAGE</h2>
//             </div>

//             <div className="p-6 space-y-4">
//               <h3 className="font-semibold text-gray-800">
//                 {packageDetails.name}
//               </h3>

//               {/* Coupon Code */}
//               <div className="flex gap-2">
//                 <div className="flex-1 bg-gray-100 px-3 py-2 rounded text-sm">
//                   USE CODE
//                   <div className="font-mono font-bold">{packageDetails.couponCode}</div>
//                 </div>
//                 <div className="bg-[#FF3B3B] px-4 py-2 rounded text-white">
//                   <div className="text-xs">EXCLUSIVE OFFER</div>
//                   <div className="line-through text-xs">₹{packageDetails.originalPrice}</div>
//                   <div className="font-bold text-lg">₹{packageDetails.discountedPrice}</div>
//                 </div>
//               </div>

//               {/* Price Per Person */}
//               <div className="text-center py-3 bg-gray-50 rounded-lg">
//                 <div className="text-2xl font-bold text-teal-600">
//                   ₹{packageDetails.pricePerPerson} per person
//                 </div>
//               </div>

//               {/* Pricing Details */}
//               <div className="space-y-3 py-4 border-t border-b border-gray-200">
//                 <div className="flex justify-between">
//                   <span>Price</span>
//                   <span className="font-semibold">₹ 0</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>Report Counselling</span>
//                   <div className="flex items-center gap-2">
//                     <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
//                       FREE
//                     </span>
//                     <span className="text-red-500 line-through text-sm">₹ 389</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="flex justify-between items-center text-lg font-bold">
//                 <span>Total Payable</span>
//                 <span>₹ 0</span>
//               </div>

//               {/* Additional Options */}
//               <div className="grid grid-cols-2 gap-3 pt-4">
//                 <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-50 transition">
//                   + ADD MORE<br />PATHOLOGY TESTS
//                 </button>
//                 <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-50 transition">
//                   + ADD MORE<br />RADIOLOGY TESTS
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }