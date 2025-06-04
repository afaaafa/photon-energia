import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HospitalSection from "@/components/HospitalSection";
import ServicesSection from "@/components/ServiceSection";
import FAQSection from "@/components/FAQSection";
import AboutPhotonSection from "@/components/AboutPhotonSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ProjectsSection />
      <HospitalSection />
      <ServicesSection />
      <FAQSection />
      <AboutPhotonSection />
      <PartnersCarousel />
      <Footer />
    </>
  );
}
