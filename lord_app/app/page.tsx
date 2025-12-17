import TopBar from "@/components/TopBar";
import MainNavbar from "@/components/MainNavbar";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import HealthInfoSection from "@/components/HealthInfo";
import CenterSwiperSection from "@/components/CenterSwiperSection/CenterSwiperSection";
import BodyCheckup from "@/components/BodyCheckup";
import HealthCards from "@/components/healthcards";

export default function Home() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <HeroSlider />
      <ServiceCard/>
      <HealthInfoSection/>
      <CenterSwiperSection/>
      <BodyCheckup/>
      <HealthCards/>

    </>
  );
}
