'use client';
// import { useState } from 'react';
import { User, Plus, CheckCircle } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import AddMemberModal from '@/components/Userprofile/addmember';
import AddressSection from "@/components/CheckoutPage/AdressSection";


export default function CheckoutPage() {

  const { user } = useUser();
  const [selectedMembers, setSelectedMembers] = useState(2);
  const [addressData, setAddressData] = useState<any>(null);

  // const [members, setMembers] = useState([
  //   { id: 1, name: 'Aayanshi Sharma', gender: 'Female', age: "24", selected: true }
  // ]);
  // const [members, setMembers] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(1); // 1 = members, 2 = address
  const searchParams = useSearchParams();
  const packageId = searchParams.get("packageId");
  const [packageDetails, setPackageDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMember = (id: number) => {
    setMembers(prev => {
      const selectedCount = prev.filter(m => m.selected).length;

      return prev.map(m => {
        if (m.id === id) {
          // if (!m.selected && selectedCount >= 1) {
          //   alert("You can select only 2 members");
          //   return m;
          // }
          return { ...m, selected: !m.selected };
        }
        return m;
      });
    });
  };


  const handleNext = () => {
    const selected = members.filter(m => m.selected);

    if (selected.length < 1) {
      alert("Please select at least 1 member");
      return;
    }

    setCurrentStep(2);
  };

  const handleAddMember = async (formData: any) => {
    const res = await fetch("/api/user/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user?.id,
        ...formData,
      }),
    });

    const data = await res.json();

    setMembers(prev => [...prev, { ...data.member, selected: false }]);
  };


  const handlePayNow = async () => {
    try {
      if (!packageDetails) {
        alert("Package not loaded");
        return;
      }

      const selectedMembers = members.filter(m => m.selected);
      if (selectedMembers.length === 0) {
        alert("Select at least one member");
        return;
      }

      if (!addressData) {
        alert("Please add address");
        return;
      }

      // 🔹 ORDER CREATE (backend se)
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: packageDetails.price, // ₹
        }),
      });

      const order = await res.json();

      // 🔹 Razorpay options (WEB FLOW)
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "Checkout Payment",
        description: packageDetails.name,
        order_id: order.id,

        prefill: {
          name: user?.name,
          contact: user?.phone,
        },

        handler: function (response: any) {
          console.log("SUCCESS ✅", response);

          /*
            response = {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature
            }
          */

          alert("Payment Successful");
          // yahin backend verify / save order call karna hota hai
        },

        theme: { color: "#00368C" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };










  useEffect(() => {
    if (!user?.id) return;

    fetch(`/api/user/members?user_id=${user.id}`)
      .then(res => res.json())
      .then(data => {
        setMembers(
          data.members.map((m: any) => ({ ...m, selected: false }))
        );
      });
  }, [user?.id]);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!packageId) return;

    const fetchPackageDetails = async () => {
      try {
        const res = await fetch(`/api/packages`);
        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          const selectedPackage = json.data.find(
            (pkg: any) => String(pkg.id) === String(packageId)
          );
          console.log("Fetched package details:", selectedPackage);
          setPackageDetails(selectedPackage || null);

        }
      } catch (error) {
        console.error("Failed to fetch package details", error);
        setPackageDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [packageId]);


  useEffect(() => {
    if (!user?.id) return;

    const fetchMembers = async () => {
      try {
        const res = await fetch(`/api/user/members?user_id=${user.id}`);
        const data = await res.json();

        // selected default false
        const formatted = (data.members || []).map((m: any) => ({
          ...m,
          selected: false,
        }));

        setMembers(formatted);
      } catch (err) {
        console.error("Failed to fetch members", err);
      }
    };

    fetchMembers();
  }, [user]);


  // const packageDetails = {
  //   name: ' Winter Wellness Package - Male',
  //   originalPrice: 21762,
  //   discountedPrice: 3917,
  //   pricePerPerson: 1959,
  //   couponCode: 'WELLNESS_PACKAGE'
  // };

  const addMember = () => {
    const newMember = {
      id: members.length + 1,
      name: '',
      gender: '',
      age: '',
      selected: false
    };
    setMembers([...members, newMember]);
  };

  const totalPrice = packageDetails?.price || 0;
  const pricePerPerson =
    selectedMembers > 0 ? Math.round(totalPrice / selectedMembers) : 0;


  // if (loading) {
  //   return <div className="p-10 text-center">Loading checkout...</div>;
  // }

  // if (!packageDetails) {
  //   return <div className="p-10 text-center text-red-500">
  //     Package not found
  //   </div>;
  // }


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Contact Info */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-3 text-white" style={{ backgroundColor: '#00368C' }}>
              {/* <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-semibold" style={{ color: '#00368C' }}>
                1
              </div> */}
              <h2 className="text-lg font-semibold">
                {isClient && user ? `${user.name} | ${user.phone}` : "Loading..."}
              </h2>

            </div>
          </div>

          {/* Step 2: Select Package Members */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#00368C] text-white px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-[#00368C] rounded flex items-center justify-center font-semibold">
                1
              </div>
              <h2 className="text-lg font-semibold">Select Package Members</h2>
            </div>


            <div className="p-6 space-y-6">
              {/* Group Complete Badge */}
              {/* <div className="bg-blue-50 border border-blue-400 rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-xl">🔒</span>
                <span className="font-semibold text-red-800">
                  Group Complete! Price Locked: ₹1959/person!
                </span>
              </div> */}

              {/* Member Selection */}
              {/* <div className="flex gap-4">
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#00368C] transition">
                  <input
                    type="radio"
                    name="members"
                    checked={selectedMembers === 1}
                    onChange={() => setSelectedMembers(1)}
                    className="w-5 h-5"
                  />
                  <div>
                    <div className="font-semibold">1 Member</div>
                    <div className="text-sm">
                      <span className="font-bold text-lg">₹2611</span>
                      <span className="text-gray-400 line-through ml-2">₹10001</span>
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-[#00368C] bg-blue-50 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="members"
                    checked={selectedMembers === 2}
                    onChange={() => setSelectedMembers(2)}
                    className="w-5 h-5"
                  />
                  <div>
                    <div className="font-semibold text-teal-700">2 Members</div>
                    <div className="text-sm">
                      <span className="font-bold text-lg text-teal-700">₹3917</span>
                      <span className="text-gray-400 line-through ml-2">₹21762</span>
                    </div>
                  </div>
                </label>
              </div> */}

              {/* Family Members List */}

              <div>
                <h3 className="font-semibold text-gray-800 mb-4">
                  Family Member (Choose members)
                </h3>

                <div className="space-y-3">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#00368C] transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.phone}</div>
                        </div>
                      </div>

                      <input
                        type="checkbox"
                        checked={member.selected}
                        onChange={() => toggleMember(member.id)}
                        className="w-5 h-5"
                      />

                    </div>
                  ))}

                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-[#FF3B3B] text-white rounded-lg"
                >
                  Next
                </button>

                <button
                  // onClick={addMember}
                  onClick={() => setShowForm(true)}
                  className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add More Member
                </button>
              </div>
            </div>
          </div>


          {/* Step 3: Address */}
          {currentStep === 2 && (

            // <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            //   <div className="bg-[#00368C] text-white px-6 py-4 flex items-center gap-3">
            //     <div className="w-8 h-8 bg-white text-[#00368C] rounded flex items-center justify-center font-semibold">
            //       2
            //     </div>
            //     <h2 className="text-lg font-semibold">Add Sample Collection Address, Date & Time</h2>

            //   </div>

            //   <div className="p-8 space-y-3">
            //     <input
            //       type="text"
            //       placeholder="Street Address"
            //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //     />

            //     <input
            //       type="text"
            //       placeholder="Street Address 2 (Optional)"
            //       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //     />

            //     <div className="grid grid-cols-2 gap-3">
            //       <input
            //         type="text"
            //         placeholder="City"
            //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //       />

            //       <input
            //         type="text"
            //         placeholder="State"
            //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //       />
            //     </div>

            //     <div className="grid grid-cols-2 gap-3">
            //       <input
            //         type="text"
            //         placeholder="ZIP Code"
            //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //       />

            //       <input
            //         type="text"
            //         placeholder="Country"
            //         defaultValue="India"
            //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //       />
            //     </div>

            //     {/* Date & Time Selection */}
            //     <div className="pt-6 border-t border-gray-200 space-y-4">
            //       <h3 className="text-lg font-semibold text-gray-800">
            //         Choose Date & Time for Home Sample Collection
            //         <span className="text-red-500">*</span>
            //       </h3>

            //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            //         {/* Date */}
            //         <div>
            //           <label className="block text-sm font-medium text-gray-600 mb-1">
            //             Select sample collection date
            //           </label>
            //           <input
            //             type="date"
            //             className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //           />
            //         </div>

            //         {/* Time */}
            //         <div>
            //           <label className="block text-sm font-medium text-gray-600 mb-1">
            //             Select collection time
            //           </label>
            //           <select
            //             className="w-full px-3 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
            //           >
            //             <option value="">Select time slot</option>
            //             <option>06:00 AM - 07:00 AM</option>
            //             <option>07:00 AM - 08:00 AM</option>
            //             <option>08:00 AM - 09:00 AM</option>
            //             <option>09:00 AM - 10:00 AM</option>
            //             <option>10:00 AM - 11:00 AM</option>
            //           </select>
            //         </div>
            //       </div>
            //       <button
            //         type="button"
            //         className="w-full py-2 rounded-lg bg-[#FF3B3B] hover:bg-red-600 text-white font-semibold transition"
            //       >
            //         Next
            //       </button>
            //     </div>
            //   </div>

            // </div>
            <AddressSection
              onNext={(address) => {
                setAddressData(address);
                console.log("Address saved:", address);

              }}
            />

          )}
        </div>

        {/* Sidebar - Package Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-6">
            <div className="bg-[#00368C] text-white px-6 py-4">
              <h2 className="text-lg font-semibold">SELECTED PACKAGE</h2>
            </div>

            <div className="p-6 space-y-4">
              <h3 className=" text-xl font-semibold text-gray-800">
                {packageDetails?.name}
              </h3>

              <div className="text-sm text-gray-500">
                {packageDetails?.included_tests.length} Tests Included
              </div>

              <ul className="text-xs text-gray-600 max-h-32 overflow-y-auto mt-2 list-disc pl-4">
                {packageDetails?.included_tests.map((test: string, index: number) => (
                  <li key={index}>{test}</li>
                ))}
              </ul>



              {/* Coupon Code */}
              <div className="flex gap-2">
                <div className="flex-1 bg-gray-100 px-3 py-2 rounded text-sm">
                  USE CODE
                  <div className="font-mono font-bold">  ₹{pricePerPerson} per person</div>
                </div>
                <div className="bg-[#FF3B3B] px-4 py-2 rounded text-white">
                  <div className="text-xs">EXCLUSIVE OFFER</div>
                  {/* <div className="line-through text-xs">₹{packageDetails.originalPrice}</div>
                  <div className="font-bold text-lg">₹{packageDetails.discountedPrice}</div> */}
                </div>
              </div>

              {/* Price Per Person */}
              <div className="text-center py-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#00368C]">
                  ₹{pricePerPerson} per person
                </div>
              </div>

              {/* Pricing Details */}
              <div className="space-y-3 py-4 border-t border-b border-gray-200">
                <div className="flex justify-between">
                  <span>Price</span>
                  <span className="font-semibold">₹ {totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Report Counselling</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
                      FREE
                    </span>
                    <span className="text-red-500 line-through text-sm">₹ 389</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Payable</span>
                <span>₹ {totalPrice}</span>
              </div>

              <button
                type="button"
                onClick={handlePayNow}
                className="w-full py-3 rounded-lg border border-red-500 text-red-600 font-semibold hover:bg-red-50 transition"
              >
                Pay Now
              </button>

              {/* Additional Options */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button className="text-blue-600 border border-blue-20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                  + ADD MORE<br />PATHOLOGY TESTS
                </button>
                <button className="text-blue-600 border border-blue-20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
                  + ADD MORE<br />RADIOLOGY TESTS
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Add Member Form Modal */}
      {showForm && (
        <AddMemberModal
          onClose={() => setShowForm(false)}
          onAdd={(data) => {
            handleAddMember(data);
            setShowForm(false);
          }}
        />
      )}

    </div>
  );
}