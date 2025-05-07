
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
import SolarSimulatorSection from "@/components/SolarSimulatorSection";
import AboutPhotonSection from "@/components/AboutPhotonSection";
import Footer from "@/components/Footer";
import PartnersCarousel from "@/components/PartnersCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import HospitalSection from "@/components/HospitalSection";
export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <ProjectsSection />
        <HospitalSection />
        <SolarSimulatorSection />
        <ServicesSection />
        <AboutPhotonSection />
        <PartnersCarousel />
        <Footer />
      </main>
    </div>
  );
}
