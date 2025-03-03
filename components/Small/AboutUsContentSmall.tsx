import React from "react";

const AboutUsContentSmall = () => {
  return (
    <div className="mt-[20px] w-full flex flex-col justify-around items-center">
      <div className="h-[80px] w-full flex flex-col justify-center items-center">
        <div className="flex gap-6">
          <p className="text-white   text-[22px] font-semibold">
            Specialized
          </p>
          <p className="text-[#E1BBFB]   text-[22px] font-semibold">
            Services To
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#E1BBFB]   text-[22px] font-semibold">
            Bring
          </p>
          <p className="text-white   text-[22px] font-semibold">
            Your Brand To Life.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center h-[175px]">
        <div className="flex items-center mt-4">
          <p className="text-[15px] text-[#FFF] font-bold">About Us</p>
        </div>
        <div className="flex flex-col leading-6 h-[150px] mt-2">
          <p className="text-[10px] text-white/60">
            We believe in the power of design to elevate brands and
          </p>
          <p className="text-[10px] text-white/60">
            connections. Our studio specializes in creating distinctive,
          </p>
          <p className="text-[10px] text-white/60 ">
            impactful visuals that capture the essence of each client’s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContentSmall;
