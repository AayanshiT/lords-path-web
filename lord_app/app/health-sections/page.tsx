"use client";

import { useEffect, useState } from "react";
import ImagingCard from "@/components/HealthScansSection/ImagingCard";
import TopBar from "@/components/TopBar";
import FooterSection from "@/components/FooterSection";
import Footer from "@/components/Footer";
import Bottom from "@/components/bottom";

interface ImagingTest {
  title: string;
  image: string;
  oldPrice: number;
  price: number;
  description: string;
  features: string[];
}

const mapOdooToImagingTest = (items: any[]): ImagingTest[] => {
  return items.map((item) => ({
    title: item.name,
    image:
      "https://helma.healthians.com/stationery/mailer-assets/61c4280d7545a.jpg",
    oldPrice: item.list_price + 500,
    price: item.list_price,
    description:
      "This diagnostic imaging test helps in accurate medical evaluation using advanced technology.",
    features: ["Quick & painless procedure", "100% non-invasive"],
  }));
};

export default function HealthScansPage() {
  const [tests, setTests] = useState<ImagingTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTests = async () => {
      try {
        const res = await fetch("/api/lab-tests?limit=1000");
        const json = await res.json();
        setTests(mapOdooToImagingTest(json.data || []));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTests();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading all health scans...
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-semibold text-center mb-10 text-[#00368C]">
            All Health Scans & Imaging Tests
          </h1>

          <div className="grid grid-cols-3 gap-6">
            {tests.map((item, index) => (
              <ImagingCard key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
      <Footer />
      <Bottom />
    </>
  );
}
