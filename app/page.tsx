import ProjectCarousel from "@/components/ProjectCarousel";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServiceSection";
export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <ProjectCarousel />
        <ServicesSection />
      </main>
    </div>
  );
}
