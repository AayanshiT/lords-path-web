import Login from '@/components/Login/login';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterSection from '@/components/FooterSection';
import Bottom from '@/components/bottom';
import Signup from '@/components/Login/signup';

export default function LoginPage() {
  return (
    <>
      <TopBar />
      <Signup/>
      <FooterSection />
      <Footer />
      <Bottom />
    </>

  );
}
