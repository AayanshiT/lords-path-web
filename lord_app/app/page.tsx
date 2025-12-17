import TopBar from "@/components/TopBar";
import MainNavbar from "@/components/MainNavbar";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import HealthInfoSection from "@/components/HealthInfo";
import BodyCheckup from "@/components/BodyCheckup";

export default function Home() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <HeroSlider />
      <ServiceCard/>
      <HealthInfoSection/>
      <BodyCheckup />

    </>
  );
}
