import AboutUsContent from "@/components/AboutUsContent";
import Button from "@/components/Button";
import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import VideowithTesxt from "@/components/VideowithTesxt";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#010915]  w-full h-[54 0dvh] ">
      {/* <Navbar />
      <HeroSection />
      <LogoSlider />
      <AboutUsContent />
      <CompanyOverview />
      <ProjectCard />
      <VideowithTesxt />
      <Footer/> */}
<ProjectCard />

      </div>
  
  );
}
