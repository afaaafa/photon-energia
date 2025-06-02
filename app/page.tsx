import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
import SolarSimulatorSection from "@/components/SolarSimulatorSection";
import AboutPhotonSection from "@/components/AboutPhotonSection";
import Footer from "@/components/Footer";
import PartnersCarousel from "@/components/PartnersCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import HospitalSection from "@/components/HospitalSection";
import SolutionsSection from '@/components/SolutionsSection';

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <SolutionsSection />
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
