import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IServicesCategoryTextProps } from './ServicesAnims';
import Image from 'next/image';

const ScrollWheelPicker = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const containerRef = useRef(null);
  const itemHeight = 40;
  
  const servicesCategory: Array<IServicesCategoryTextProps> = [
    { text: "Mobile App Design", image: require('../public/Box1.svg') },
    { text: "Visual Identity", image: require('../public/Element (3).svg') },
    { text: "Graphic Design", image: require('../public/Element (1).svg') },
    { text: "UI/UX Design", image: require('../public/Element.svg') },
    { text: "Web Development", image: require('../public/EpicDev.svg') },
    { text: "Web App / Mobile App", image: require('../public/Fictional Company Logo.svg') },
    { text: "ML / AI", image: require('../public/webbox.svg') },
    { text: "Augmented Reality", image: require('../public/uibox.svg') },
    { text: "Virtual Reality", image: require('../public/vercel.svg') }
  ];

  const totalHeight = servicesCategory.length * itemHeight;
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollY, setScrollY] = useState(-selectedIndex * itemHeight);

  useEffect(() => {
    setScrollY(-selectedIndex * itemHeight);
  }, [selectedIndex]);

  const handleDragStart = (e: any) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleDragMove = (e: any) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - startY;
    const newScrollY = scrollY + deltaY;
    
    setScrollY(Math.max(Math.min(newScrollY, 0), -(totalHeight - itemHeight)));
    setStartY(e.clientY);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    const newIndex = Math.round(-scrollY / itemHeight);
    setSelectedIndex(Math.max(0, Math.min(newIndex, servicesCategory.length - 1)));
  };

  const [accumulatedScroll, setAccumulatedScroll] = useState(0);
  
  const handleWheel = (e: any) => {
    e.preventDefault();
    const scrollAmount = 200;
    
    setAccumulatedScroll(prev => {
      const newScroll = prev + e.deltaY;
      
      if (Math.abs(newScroll) >= scrollAmount) {
        const direction = newScroll > 0 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(selectedIndex + direction, servicesCategory.length - 1));
        setSelectedIndex(newIndex);
        return 0;
      }
      
      return newScroll;
    });
  };

  
  return (
    <div 
      ref={containerRef}
      className="relative h-[90vh] overflow-hidden" // increased from 70vh
    >
      <div className="absolute top-1/2 left-0 right-0 h-20 -mt-10 bg-[#E1BBFB]/20 pointer-events-none" />
      <motion.div 
        className="flex flex-col items-center"
        animate={{ y: -selectedIndex * itemHeight }}
        transition={isDragging ? { type: 'tween', duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }}
      >
        {servicesCategory.map((item, index) => {
          const distance = index - selectedIndex;
          const isSelected = index === selectedIndex;
          
          return (
            <div 
              key={item.text}
              className={`h-20 flex items-center justify-center cursor-pointer select-none w-full text-xl // increased height and font size
                ${isSelected ? 'font-medium text-[#E1BBFB]' : 'text-gray-400'}`}
              onClick={() => setSelectedIndex(index)}
            >
              <motion.div
                className="flex items-center gap-6" // increased gap
                animate={{
                  scale: isSelected ? 1.1 : 1 - Math.abs(distance) * 0.05,
                  opacity: 1 - Math.abs(distance) * 0.15,
                }}
              >
                <Image 
                  src={item.image}
                  alt={item.text}
                  width={32} // increased from 24
                  height={32} // increased from 24
                  className={`${isSelected ? 'scale-110' : 'scale-100'} transition-transform duration-200`}
                />
                <span>{item.text}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ScrollWheelPicker;