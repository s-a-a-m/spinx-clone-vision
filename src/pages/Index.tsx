import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
