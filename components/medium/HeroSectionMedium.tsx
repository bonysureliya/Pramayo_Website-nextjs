import dynamic from "next/dynamic";
import React from "react";
import Button from "../Button";


const HeroSectionMedium = () => {
  return (
    <div className="relative w-full flex flex-col justify-center gap-[30px] pt-[40px] h-[100dvh] ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[50px] font-bold bg-gradient-to-b from-white to-[#E1BBFB] bg-[length:100%_100%] text-transparent bg-clip-text">
          Turning Vision
        </p>
        <p className="text-[50px] font-bold bg-gradient-to-b from-white to-[#E1BBFB] bg-[length:100%_100%] text-transparent bg-clip-text">
          into Creation
        </p>
      </div>
      <div className="h-[5px] w-full flex flex-col justify-center">
        <p className="text-[#FFFFFF99] w-full flex justify-center">
          Elevating concepts into experiences that
        </p>
        <p className="text-[#FFFFFF99] w-full flex justify-center">captivate and inspire.</p>
      </div>
      <div className="flex flex-col  mt-[20px] w-full justify-center items-center gap-5">
        <Button className="w-[100px] h-[35px] rounded-[8px] text-[12px]" variant={"primary"}>See our Work</Button>
        <Button className="w-[100px] h-[35px] rounded-[8px] text-[12px]" variant={"secondary"}>Get a Quote</Button>
      </div>
     
    </div>
  );
};

export default HeroSectionMedium;
