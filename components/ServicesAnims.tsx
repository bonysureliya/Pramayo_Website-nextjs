import React from "react";
import ServicesCategoryText from "./ServicesCategoryText";
import Image from '../public/Box1.svg'
import Image2 from '../public/Element (3).svg'
import Image3 from '../public/Element (1).svg'
import Image4 from '../public/Element.svg'
import Image5 from '../public/EpicDev.svg'
import Image6 from '../public/Fictional Company Logo.svg'
import Image7 from '../public/webbox.svg'
import Image8 from '../public/uibox.svg'
import Image9 from '../public/vercel.svg'
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IServicesCategoryTextProps {
  text: string,
  image: StaticImport
}
const ServicesAnims = () => {
  const servicesCategory: Array<IServicesCategoryTextProps> = [
    { text: "Mobile App Design", image: Image },
    { text: "Visual Identity", image: Image2 },
    { text: "Graphic Design", image: Image3 },
    { text: "UI/UX Design", image: Image4 },
    { text: "Web Development", image: Image5 },
    { text: "Web App / Mobile App", image: Image6 },
    { text: "ML / AI", image: Image7 },
    { text: "Augmented Reality", image: Image8 },
    { text: "Virtual Reality", image: Image9 }
  ];
  return (
    <div className="">
        <ServicesCategoryText data={servicesCategory} />
    </div>
  );
};

export default ServicesAnims;
