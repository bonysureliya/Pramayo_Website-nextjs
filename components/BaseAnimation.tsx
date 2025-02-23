import React from 'react'
import Base from '@/public/Rectangle 151.svg'
import Image from 'next/image'
import {motion} from 'motion/react'
const BaseAnimation = () => {
  return (
    <motion.div
    className="bg-red-500 w-[1128px] h-[783px] z-[999]"
    style={{
      clipPath: 'polygon(0 60%, 100% 59%, 73% 100%, 28% 100%)',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0, 1] }}  // Blinking effect (0 to 1 to 0)
    transition={{
      opacity: {
        repeat: 1,   // Repeat animation once
        repeatType: 'loop', // Loop the opacity changes
        duration: 1, // Duration for blinking
        ease: 'easeInOut',
      },
      delay: 1,  // Delay before starting the fade-in effect
    }}
  />

  )
}

export default BaseAnimation