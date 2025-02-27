import dynamic from "next/dynamic";
import React from "react";
import Button from "../Button";
import cardImage from "@/public/Rectangle 8@2x.svg";
import cardImage2 from "@/public/Rectangle 9.svg";
import cardImage3 from "@/public/Rectangle 10.svg";
import cardImage4 from "@/public/Rectangle 81.svg";
import cardImage5 from "@/public/Rectangle 91.svg";
import cardImage6 from "@/public/Rectangle 101.svg";
import cardImage7 from "@/public/Rectangle 4.svg";
import stageImage from '@/public/Elemenr.svg'
import BaseAnimation from "../BaseAnimation";
import { useMediaQuery } from "usehooks-ts";

// Dynamically import components with Next.js
const FallFromTop = dynamic(() => import("../FallFromTop"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
const FadeInImage = dynamic(() => import("../FadeInImage"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
import Image from "next/image";
import box from "../../public/Box1.svg";
import box2 from "../../public/box2.svg";
import box3 from "../../public/box3.svg";
import uibox from "../../public/uibox.svg";
import webbox from "../../public/webbox.svg";
import SpaceButton from "../SpaceButton";

const HeroSectionLap = () => {
  return (
    <div className="relative w-full flex flex-col justify-center gap-[30px] pt-[115px] h-[100dvh] ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[65px] font-bold bg-gradient-to-b from-white to-[#E1BBFB] bg-[length:100%_100%] text-transparent bg-clip-text">
          Turning Vision
        </p>
        <p className="text-[65px] font-bold bg-gradient-to-b from-white to-[#E1BBFB] bg-[length:100%_100%] text-transparent bg-clip-text">
          into Creation
        </p>
      </div>
      <div className="h-[40px] w-full flex flex-col justify-center items-center">
        <p className="text-[#FFFFFF99] w-[344px]">
          Elevating concepts into experiences that
        </p>
        <p className="text-[#FFFFFF99]">captivate and inspire.</p>
      </div>
      <div className="flex space-x-[20px] mt-[20px] w-full justify-center">
        <SpaceButton text="See Our Work" />
        <Button variant={"eightnary"}>Get a Quote</Button>
      </div>
      <FallFromTop
        className="absolute left-[80px] top-[150px] z-[998]"
        yInitial={-500}
        yAnimate={0}
        img={stageImage}
        delay={0}
      />
      <FallFromTop
        className="absolute left-[200px] top-[320px] z-[998]"
        yInitial={-500}
        yAnimate={0.2}
        img={cardImage}
        delay={0}
      />
      <FallFromTop
        className="absolute left-[90px] top-[450px] z-[998]"
        yInitial={-500}
        yAnimate={0}
        img={cardImage2}
        delay={0.3}
      />
      <FallFromTop
        className="absolute left-[20px] top-[550px]"
        yInitial={-500}
        yAnimate={0}
        img={cardImage3}
        delay={0.4}
      />
      <FallFromTop
        className="absolute right-[200px] top-[320px] z-[999]"
        yInitial={-500}
        yAnimate={0}
        img={cardImage4}
        delay={0}
      />
      <FallFromTop
        className="absolute right-[90px] top-[450px] z-[998]"
        yInitial={-500}
        yAnimate={0}
        img={cardImage5}
        delay={0.2}
      />
      <FallFromTop
        className="absolute right-[20px] top-[550px]"
        yInitial={-500}
        yAnimate={0}
        img={cardImage6}
        delay={0.3}
      />
      <FadeInImage
        className="flex w-full justify-center mt-[30px]"
        initialOpacity={0}
        animateOpacity={1}
        transitionType="easeIn"
        duration={2}
        img={cardImage7}
      />
      <Image alt="" src={box} className="absolute top-[150px] left-[-50px]" />
      <Image alt="" src={webbox} className="absolute top-[20px] w-[196px] h-[100px] left-[150px]" />
      <Image alt="" src={box2} className="absolute top-[-40px] right-[250px]" />
      <Image alt="" src={uibox} className="absolute top-[50px] w-[217px] h-[210px] right-[50px]" />
      <Image alt="" src={box3} className="absolute top-[240px] right-[50px]" />
    </div>
  );
};

export default HeroSectionLap;
