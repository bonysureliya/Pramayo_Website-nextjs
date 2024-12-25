import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ServicesCategoryTextProps {
  data: Array<string>;
}

const ServicesCategoryText: React.FC<ServicesCategoryTextProps> = ({ data }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="text-[60px] space-y-4">
      {data.map((text, index) => {
        const opacity = useTransform(scrollYProgress, [index / data.length, (index + 1) / data.length], [1, 0.7]);
        const scale = useTransform(scrollYProgress, [index / data.length, (index + 1) / data.length], [1.1, 1]);

        return (
          <motion.div
            key={index}
            style={{ opacity, scale }}
            className="transition-all duration-500 ease-in-out"
          >
            {text}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicesCategoryText;
