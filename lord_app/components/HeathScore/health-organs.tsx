'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Organ = {
  id: number;
  body_organ: string;
};

export default function OrgansList() {
  const [organs, setOrgans] = useState<Organ[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchOrgans() {
      const res = await fetch('/api/organs');
      console.log("Fetch organs response:", res);
      const json = await res.json();
      if (json.success) {
        setOrgans(json.data);
      }
      setLoading(false);
    }

    fetchOrgans();
  }, []);

  if (loading) return <p>Loading organs...</p>;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">
        Select the Affected organ
      </h3>

      <div className="space-y-2">
        {organs.map((organ) => (
          <div
            key={organ.id}
            onClick={() =>
              router.push(`/health-score/organ/${organ.id}`)
            }
            className="border rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 transition"
          >
            {organ.body_organ}
          </div>
        ))}
      </div>
    </div>
  );
}
