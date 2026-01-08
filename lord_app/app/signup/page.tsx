import { Suspense } from "react";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import FooterSection from "@/components/FooterSection";
import Bottom from "@/components/bottom";
import Signup from "@/components/Login/signup";

export default function SignupPage() {
  return (
    <>
      <TopBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
      <FooterSection />
      <Footer />
      <Bottom />
    </>
  );
}
