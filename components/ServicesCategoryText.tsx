"use client";

import React, { useState, useEffect, useRef } from "react";
import { IServicesCategoryTextProps } from "./ServicesAnims";
import Image from "next/image";
import { motion } from "motion/react";

interface ServicesCategoryTextProps {
  data: Array<IServicesCategoryTextProps>;
}

const ServicesCategoryText: React.FC<ServicesCategoryTextProps> = ({
  data,
}) => {
  const [index, setIndex] = useState<number>(0);
  const lastScrollTime = useRef<number>(Date.now());
  const scrollCooldown = 500;

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const currentTime = Date.now();

      if (currentTime - lastScrollTime.current < scrollCooldown) {
        return;
      }

      setIndex((prevIndex) => {
        if (e.deltaY > 0) {
          return Math.min(prevIndex + 1, data.length - 1);
        } else {
          return Math.max(prevIndex - 1, 0);
        }
      });

      lastScrollTime.current = currentTime;
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [data.length]);

  const getVisibleItems = () => {
    if (data.length <= 3) return data;

    if (index === 0) return data.slice(0, 3);
    if (index === 1) return data.slice(0, 3);
    if (index >= data.length - 2) return data.slice(data.length - 3);

    return data.slice(index - 1, index + 2);
  };

  const getHighlightedIndex = (i: number) => {
    if (index === 0) return i === 0;
    if (index === 1) return i === 1;
    if (index === data.length - 2) return i === 1;
    if (index === data.length - 1) return i === 2;
    if (index >= data.length - 2) {
      return i === Math.min(2, data.length - 1);
    }
    return i === 1;
  };

  const getCurrentImageIndex = () => {
    if (index === 0) return 0;
    if (index === data.length - 1) return 2; // Updated for last item
    if (index >= data.length - 2) return 2;
    return 1;
  };

  return (
    <div className="text-[60px] space-y-4 h-[200vh] bg-[#020617]">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center px-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-6xl font-bold mb-4"
          >
            Transforming Concepts
            <br />
            Into <span className="text-purple-500">Powerful Visuals</span>
          </motion.h1>

          <div className="relative flex justify-between items-start mt-20">
            <div className="w-full">
              {getVisibleItems().map((item, i) => (
                <motion.div
                  key={`${item.text}-${i}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: getHighlightedIndex(i) ? 1 : 0.4,
                    x: getHighlightedIndex(i) ? 0 : -20,
                    scale: getHighlightedIndex(i) ? 1.05 : 1,
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // Custom ease curve
                    type: "tween",
                    delay: index > 1 ? i * 0.1 : 0 // Staggered animation after index 1
                  }}
                  className={`mb-4 ${
                    getHighlightedIndex(i) ? "text-white" : "text-gray-500"
                  } text-center transform-gpu`}
                >
                  <p className="text-7xl font-bold leading-tight">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="w-1/3 sticky top-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative top-[-100px] right-5 w-[200px] h-[200px] rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={getVisibleItems()[getCurrentImageIndex()]?.image}
                    alt={getVisibleItems()[getCurrentImageIndex()]?.text}
                    className="object-cover"
                    fill
                    sizes="(max-width: 200px)"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategoryText;
