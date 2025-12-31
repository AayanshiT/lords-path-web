'use client';

import { useState } from 'react';

type Props = {
  onSuccess: (data: any) => void;
};

type FormData = {
  name: string;
  age: string;
  weight: string;
  height: string;
};

export default function SimpleMemberForm({ onSuccess }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    weight: '',
    height: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        onSuccess(formData); // 🔥 parent ko data bheja
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 rounded-xl p-4 md:p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-gray-900">
        Member Details
      </h3>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <input
        type="number"
        name="height"
        placeholder="Height (cm)"
        value={formData.height}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-[#00368C] hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition"
      >
        Save & Continue
      </button>
    </form>
  );
}
