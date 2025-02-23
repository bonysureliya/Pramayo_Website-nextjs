import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'
interface FadeInImageProps {
    className: string
    initialOpacity: number
    animateOpacity: number
    duration: number
    transitionType: "easeIn" | "easeInOut" | "easeOut"
    img: StaticImport
}

const FadeInImage : React.FC<FadeInImageProps> = ({animateOpacity, className, duration, initialOpacity, transitionType, img}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity }}      
      animate={{ opacity: animateOpacity }}      
      transition={{ 
        duration: duration,               
        ease: transitionType         
      }}
    >
      <Image src={img} alt="" />
    </motion.div>
  )
}

export default FadeInImage