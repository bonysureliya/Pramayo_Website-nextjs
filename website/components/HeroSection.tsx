import React from "react";
import Button from "./Button";
import cardImage from "@/public/Rectangle 8@2x.svg";
import cardImage2 from "@/public/Rectangle 9.svg";
import cardImage3 from  "@/public/Rectangle 10.svg";
import cardImage4 from  "@/public/Rectangle 81.svg";
import cardImage5 from  "@/public/Rectangle 91.svg";
import cardImage6 from  "@/public/Rectangle 101.svg";
import cardImage7 from  "@/public/Rectangle 4.svg";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full ">
      <div className="relative w-full flex flex-col justify-center gap-[30px] pt-[115px] h-[100dvh]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[75px] font-bold bg-gradient-to-b from-white to-[#E1BBFB] bg-[length:100%_100%] text-transparent bg-clip-text">
          Turning Vision
        </p>
        <p className="text-[75px] font-bold bg-gradient-to-b from-white to-[#E1BBFB] bg-[length:100%_100%] text-transparent bg-clip-text">
          into Creation
        </p>
      </div>
      <div className="h-[40px] w-full flex flex-col justify-center items-center">
        <p className="text-[#FFFFFF99]  w-[344px]">
          Elevating concepts into experiences that
        </p>
        <p className="text-[#FFFFFF99] ">captivate and inspire.</p>
      </div>
      <div className="flex space-x-[20px] mt-[20px] w-full justify-center ">
        <Button variant={"primary"}>See our Work</Button>
        <Button variant={"secondary"}>Get a Quote</Button>
      </div>
      <div className="absolute left-[250px] top-[430px] z-[999]">
        <Image src={cardImage} alt="" />
      </div>
      <div className="absolute left-[140px] top-[560px] z-[998]">
        <Image src={cardImage2} alt="" />
      </div>
      <div className="absolute left-[70px] top-[660px]">
        <Image src={cardImage3} alt="" />
      </div>
      <div className="absolute right-[250px] top-[430px] z-[999]">
        <Image src={cardImage4} alt="" />
      </div>
      <div className="absolute right-[140px] top-[560px] z-[998]">
        <Image src={cardImage5} alt="" />
      </div>
      <div className="absolute right-[70px] top-[660px]">
        <Image src={cardImage6} alt="" />
      </div>
      <div className="flex w-full justify-center mt-[30px]">
        <Image src={cardImage7} alt="" />
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
