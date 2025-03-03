import React from "react";
import Button from "../Button";
import Image from "next/image";
import ranctagle from '../../public/Rectangle 154.svg'
import uiImageCard from '../../public/uiCArd.svg'
import webcard from '../../public/Element (1).svg'
import imgcard1 from '../../public/Element (2).svg'
import imgcard2 from '../../public/Element (3).svg'

const AboutUsContentLap = () => {
  return (
    <section className="flex flex-col w-full px-[64px] mt-[150px] gap-24">
      <div className="flex justify-between items-start gap-20">
        <div className="flex-1">
          <h1 className="text-[45px] font-semibold leading-tight">
            <span className="text-white">Specialized services </span>
            <span className="text-[#E1BBFB]">to bring </span>
            <span className="text-white">your brand to </span>
            <span className="text-[#E1BBFB]">life.</span>
          </h1>
        </div>
        
        <div className="flex-1">
          <h2 className="text-[20px] font-bold text-white mb-4">About Us</h2>
          <p className="text-white/60 text-[16px] leading-7">
            We believe in the power of design to elevate brands and connections. 
            Our studio specializes in creating distinctive, impactful visuals 
            that capture the essence of each client's.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-8">
        <div className="h-[590px] w-[640px] relative bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#060B21] rounded-[20px] overflow-hidden">
          <Image alt="Background pattern" className="absolute w-full h-full object-cover" src={ranctagle} />
          <Image alt="UI Card" className="absolute bottom-0 right-12 z-10" src={uiImageCard} />
          <Image alt="Web development" className="absolute bottom-14 left-10 w-[190px] h-[120px] z-10" src={webcard} />
          <Image alt="Design element 1" className="absolute right-0 bottom-[205px] z-10" src={imgcard1} />
          <Image alt="Design element 2" className="absolute right-14 top-14 z-10" src={imgcard2} />
          
          <div className="relative z-20 ml-[64px] mt-[64px]">
            <h2 className="text-[50px] font-bold text-white leading-tight">
              720+ Project<br />Launched
            </h2>
            <p className="mt-[20px] text-[14px] text-white/60 max-w-[400px]">
              With over 720 successful projects, we bring experience,
              creativity, and reliability to every new endeavor.
            </p>
            <div className="mt-[45px]">
              <Button variant="fournary">Get Started Now</Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-[25px]">
          {[
            {
              title: ["Clients", "Worldwide"],
              description: [
                "Our diverse client base spans across industries and",
                "continents, united by a shared vision for exceptional design.",
                "We're proud to support brands globally."
              ]
            },
            {
              title: ["Years of", "Experience"],
              description: [
                "With over a decade of design expertise, we blend innovation",
                "with insight to deliver impactful visuals that stand the test",
                "of time"
              ]
            },
            {
              title: ["Winning", "Creativity"],
              description: [
                "Recognized for our commitment to excellence, our work has",
                "earned accolades for originality and quality, setting us apart",
                "in the world of design."
              ]
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group h-[180px] w-[640px] rounded-[20px] bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex items-center justify-around p-8 relative overflow-hidden transition-all duration-300 hover:bg-[#0A0F26] cursor-pointer border border-transparent hover:border-[#E1BBFB]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#E1BBFB]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-1 relative z-10"> 
                {item.title.map((line, i) => (
                  <p key={i} className="text-[26px] font-semibold text-white leading-tight group-hover:text-[#E1BBFB] transition-colors duration-300">{line}</p>
                ))}
              </div>
              <div className="flex-[2] pl-8 relative z-10">
                {item.description.map((line, i) => (
                  <p key={i} className="text-[14px] text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsContentLap;
