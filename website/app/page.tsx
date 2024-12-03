import Button from "@/components/Button";
import CompanyOverview from "@/components/CompanyOverview";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#010915]  w-full h-[500dvh] ">
      <Navbar />
      <HeroSection />
      <CompanyOverview />
      </div>
  
  );
}
