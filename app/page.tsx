"use client";
import AboutUsContent from "@/components/AboutUsContent";
import Button from "@/components/Button";
import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";
import LogoSlider from "@/components/LogoSlider";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import VideowithTesxt from "@/components/VideowithTesxt";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";
import LogoSliderSmall from "@/components/Small/LogoSliderSmall";
import AboutUsContentSmall from "@/components/Small/AboutUsContentSmall";
import CompanyOverviewSmall from "@/components/Small/CompanyOverviewSmall";
import ProjectCardSmall from "@/components/Small/ProjectCardSmall";
import VideowithTesxtSmall from "@/components/Small/VideowithTesxtSmall";
import HeroSectionMedium from "@/components/medium/HeroSectionMedium";
import LogoSliderMedium from "@/components/medium/LogoSliderMedium";
import AboutUsContentMedium from "@/components/medium/AboutUsContentMedium";
import CompanyOverviewMedium from "@/components/medium/CompanyOverviewMedium";
import ProjectCardMedium from "@/components/medium/ProjectCardMedium";
import VideowithTesxtMedium from "@/components/medium/VideowithTesxtMedium";
import ServicesAnims from "@/components/ServicesAnims";
import HeroSectionLap from "@/components/laptop/HeroSectionLap";
import NavbarLap from "@/components/laptop/NavbarLap";
import LogoSliderLap from "@/components/laptop/LogoSliderLap";
import AboutUsContentLap from "@/components/laptop/AboutUsContentLap";
import CompanyOverviewLap from "@/components/laptop/CompanyOverviewLap";
import ProjectCardLap from "@/components/laptop/ProjectCardLap";
import FooterLap from "@/components/laptop/FooterLap";
import ScrollWheelPicker from "@/components/ScrollWheelPicker";

const Progress = dynamic(() => import("@/components/ui/Spinner"), {
  loading: () => (
    <div className="text-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ),
  ssr: false,
});

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  loading: () => <Progress />,
  ssr: false,
});
const HeroSectionSmall = dynamic(
  () => import("@/components/Small/HeroSectionSmall"),
  {
    loading: () => <Progress />,
    ssr: false,
  }
);

export default function Home() {
  const isSmall = useMediaQuery("(min-width: 320px) and (max-width: 420px)");
  const isMedium = useMediaQuery("(min-width: 421px) and (max-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 769px) and (max-width: 1340px)");
  const isBig = useMediaQuery("(min-width: 1341px)");
  return (
    <div className="bg-[#010915] text-white  w-full h-[700dvh] ">
      {/* <Navbar /> */}
      {/* <HeroSection /> */}
      {/* <LogoSlider />
      <AboutUsContent />
      <CompanyOverview />
      <ProjectCard />
      <VideowithTesxt />
      <Footer/> */}
      {isSmall && (
        <>
          <HeroSectionSmall /> <LogoSliderSmall /> <AboutUsContentSmall />{" "}
          <CompanyOverviewSmall /> <ProjectCardSmall /> <VideowithTesxtSmall />{" "}
        </>
      )}

      {isMedium && (
        <>
          <HeroSectionMedium /> <LogoSliderMedium /> <AboutUsContentMedium />{" "}
          <CompanyOverviewMedium /> <ProjectCardMedium />{" "}
          <VideowithTesxtMedium />{" "}
        </>
      )}
     {isLaptop && (<>
     <NavbarLap/>
     <HeroSectionLap/>
     <LogoSliderLap/>
     <AboutUsContentLap/>
     {/* <CompanyOverviewLap/> */}
     <ProjectCardLap/>


     <FooterLap/>
        </>)}



      {isBig && (
        <>
          {/* <HeroSection />
      <LogoSlider />
      <AboutUsContent />
      <CompanyOverview /> */}
      {/* <ProjectCard /> */}
      <ScrollWheelPicker />
      {/* <VideowithTesxt />
      <Footer/> */}
        </>
      )}
   

    </div>
  );
}
