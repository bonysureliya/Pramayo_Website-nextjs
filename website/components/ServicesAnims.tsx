import React from "react";
import ServicesCategoryText from "./ServicesCategoryText";

const ServicesAnims = () => {
  const servicesCategory: Array<string> = [
    "Mobile App Design",
    "Visual Identity",
    "Graphic Design",
    "UI/UX Design",
    "Web Development",
    "Web App / Mobile App",
    "ML / AI",
    "Augmented Reality",
    "Virtual Reality"
  ];
  return (
    <div>
        <ServicesCategoryText data={servicesCategory} />
    </div>
  );
};

export default ServicesAnims;
