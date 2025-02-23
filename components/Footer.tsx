import Image from "next/image";
import React from "react";
import Logo from "@/public/Pramayo_Logo.png";
import Button from "./Button";
import { PiCaretDown } from "react-icons/pi";
interface NavbarProps {}

const MenuArray: Array<string> = [
  "Home",
  "Our Work",
  "Service",
  "Reviews",
  "Contact",
];

const Footer: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex mt-[100px] flex-col w-[100%] h-[300px]  items-center text-[#FFF] font-sans font-medium text-[20px]">
    <div className="flex w-[100%] justify-between px-[65px] ">

      <div className="flex space-x-[30px] w-full">
        {MenuArray.map((data, index) => (
          <div
            key={`${data}-${index}`}
            className="flex space-x-[10px] items-center cursor-pointer"
          >
            {data}{" "}
            {data.includes("Our Work") && (
                <PiCaretDown className="ml-[10px]" />
            )}
          </div>
        ))}
      </div>
      <div className="flex space-x-[20px]  w-full justify-end">
        <Button variant={"primary"}>See our Work</Button>
        <Button variant={"secondary"}>Get a Quote</Button>
      </div>

    </div>
      <div className="w-full mt-[100px]">
      <p className="w-full h-[2px] bg-slate-400"></p>
      </div>
      <div className="flex w-full justify-between px-[60px] mt-[80px]">
        <p className="text-[16px] text-[#FFF] font-sans">©2024 Pramayo</p>
        <p className="text-[16px] text-[#FFF] font-sans">Copyright Alright Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
