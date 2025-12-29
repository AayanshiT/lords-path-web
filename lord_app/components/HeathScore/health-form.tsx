'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  age: string;
  weight: string;
  height: string;
};

export default function SimpleMemberForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Save & Continue
      </button>
    </form>
  );
}
