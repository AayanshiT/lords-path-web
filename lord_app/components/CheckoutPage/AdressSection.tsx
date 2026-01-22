"use client";

import { useState } from "react";

type Props = {
  onNext: (address: any) => void;
};


export default function AddressSection({ onNext }: Props) {
  const [address, setAddress] = useState({
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    country: "India",
    date: "",
    time: "",
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-[#00368C] text-white px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-white text-[#00368C] rounded flex items-center justify-center font-semibold">
          2
        </div>
        <h2 className="text-lg font-semibold">
          Add Sample Collection Address, Date & Time
        </h2>
      </div>

      <div className="p-8 space-y-3">
        <div>
          
        </div>
        <input
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Street Address"
          value={address.street}
          onChange={(e) =>
            setAddress({ ...address, street: e.target.value })
          }
        />

        <input
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Street Address 2 (Optional)"
          value={address.street2}
          onChange={(e) =>
            setAddress({ ...address, street2: e.target.value })
          }
        />


        <div className="grid grid-cols-2 gap-3">
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="City"
            value={address.city}
            onChange={(e) =>
              setAddress({ ...address, city: e.target.value })
            }
          />

          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="State"
            value={address.state}
            onChange={(e) =>
              setAddress({ ...address, state: e.target.value })
            }
          />

        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            className="w-full px-3 py-2 border rounded-md"
            placeholder="ZIP Code"
            value={address.zip}
            onChange={(e) =>
              setAddress({ ...address, zip: e.target.value })
            }
          />

          <input
            className="w-full px-3 py-2 border rounded-md"
            value={address.country}
            onChange={(e) =>
              setAddress({ ...address, country: e.target.value })
            }
          />

        </div>


        <div className="pt-6 border-t space-y-4">
          <div>
            <label className="text-sm">Select date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md"
              value={address.date}
              onChange={(e) =>
                setAddress({ ...address, date: e.target.value })
              }
            />

          </div>

          <div>
            <label className="text-sm">Select time</label>
            <select 
              className="w-full px-3 py-2 border rounded-md"
              value={address.time}
              onChange={(e) =>
                setAddress({ ...address, time: e.target.value })
              }>
              <option value="">Select time slot</option>
              <option>06:00 AM - 07:00 AM</option>
              <option>07:00 AM - 08:00 AM</option>
              <option>08:00 AM - 09:00 AM</option>
            </select>
          </div>

          <button
            onClick={() => onNext(address)}
            className="w-full py-3 bg-[#FF3B3B] text-white rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
