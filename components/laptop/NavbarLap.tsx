import Image from "next/image";
import React from "react";
import Logo from "@/public/Pramayo_Logo.png";
import Button from "../Button";
import { PiCaretDown } from "react-icons/pi";
interface NavbarProps {}

const MenuArray: Array<string> = [
  "Home",
  "Our Work",
  "Service",
  "Reviews",
  "Contact",
];

const NavbarLap: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex w-full h-[130px] justify-between items-center px-[64px] text-white   font-medium text-[18px]">
      <Image priority={true} src={Logo} alt={'Some Name'} />
      <div className="flex space-x-[30px]  text-[15px]">
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
        <Button variant={"sixnary"}>Let's Talk</Button>
    </div>
  );
};

export default NavbarLap;
