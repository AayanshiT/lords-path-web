"use client";

import { useEffect, useState } from "react";
import ImagingCard from "@/components/HealthScansSection/ImagingCard";
import TopBar from "@/components/TopBar";
import FooterSection from "@/components/FooterSection";
import Footer from "@/components/Footer";
import Bottom from "@/components/bottom";
import HealthScore from "@/components/HeathScore/health-score";

export default function HealthQuestionsPage() {
  return (
    <>
      <TopBar />
      <div>                   
          <HealthScore/>
      </div>
      <FooterSection />
      <Footer />
      <Bottom />
    </>
  );
}   