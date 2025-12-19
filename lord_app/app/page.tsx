import TopBar from "@/components/TopBar";
import MainNavbar from "@/components/MainNavbar";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import HealthInfoSection from "@/components/HealthInfo";
import CenterSwiperSection from "@/components/CenterSwiperSection/CenterSwiperSection";
import TestsSection from "@/components/TabingSection/TestsSection";
import HealthScansSection from "@/components/HealthScansSection/HealthScansSection";
import HealthCard from "@/components/healthcards";
import Phonesection from "@/components/Phonesection";
import Bottom from "@/components/bottom";
import Footer from "@/components/Footer";
import MobileSection from "@/components/MobileSection";
import MidSection from "@/components/MidSection";
import HealthiansReviews from "@/components/HealthiansReviews";
import AwardCards from "@/components/AwardsCards";
import HealthBlogs from "@/components/HealthBlogs";
import FooterSection from "@/components/FooterSection";
import ImageSection from "@/components/ImageSection";



export default function Home() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <HeroSlider />
      <ServiceCard />
      <HealthInfoSection />
      <CenterSwiperSection />
      <TestsSection />
      <HealthScansSection />
      <HealthCard />
      <Phonesection />
      <ImageSection />
      <MobileSection />
      <MidSection />
      <HealthiansReviews />
      <AwardCards />
      <HealthBlogs />
      <FooterSection />
      <Footer />
      <Bottom />



    </>
  );
}

