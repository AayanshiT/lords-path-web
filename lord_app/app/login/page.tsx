import Login from '@/components/Login/login';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterSection from '@/components/FooterSection';
import Bottom from '@/components/bottom';

export default function LoginPage() {
  return (
    <>
      <TopBar />
      <Login />
      <FooterSection />
      <Footer />
      <Bottom />
    </>

  );
}
