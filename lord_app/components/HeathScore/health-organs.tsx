'use client';

import { useEffect, useState } from 'react';

type Organ = {
  id: number;
  body_organ: string;
};

export default function OrgansList() {
  const [organs, setOrgans] = useState<Organ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrgans() {
      try {
        const res = await fetch('/api/organs');
        const json = await res.json();
        if (json.success) {
          setOrgans(json.data);
        }
      } catch (err) {
        console.error('Failed to load organs', err);
      } finally {
        setLoading(false);
      }
    }

    fetchOrgans();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading organs...</p>;
  }

  if (!organs.length) {
    return <p className="text-red-500">No organs found.</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">
        Select the affected organ
      </h3>

      <div className="space-y-2">
        {organs.map((organ) => (
          <div
            key={organ.id}
            className="border rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition"
          >
            {organ.body_organ}
          </div>
        ))}
      </div>
    </div>
  );
}
