import { Suspense } from "react";
import Checkout from '@/components/CheckoutPage/checkout';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterSection from '@/components/FooterSection';
import Bottom from '@/components/bottom';


export default function LoginPage() {
  return (
    <>
      <TopBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Checkout />
      </Suspense>
      <FooterSection />
      <Footer />
      <Bottom />
    </>

  );
}
