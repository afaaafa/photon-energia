import ProjectCarousel from "@/components/ProjectCarousel";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import SolarSimulatorSection from "@/components/SolarSimulatorSection";
import AboutPhotonSection from "@/components/AboutPhotonSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <ProjectCarousel />
        <SolarSimulatorSection />
        <ServicesSection />
        <AboutPhotonSection />
        <PartnersCarousel />
        <Footer />
      </main>
    </div>
  );
}
