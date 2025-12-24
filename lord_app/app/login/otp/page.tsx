import HealthiansOTP from '@/components/Login/otp';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterSection from '@/components/FooterSection';
import Bottom from '@/components/bottom';

export default function LoginPage() {
  return (
    <>
      <TopBar />
      <HealthiansOTP />
      <FooterSection />
      <Footer />
      <Bottom />
    </>

  );
}