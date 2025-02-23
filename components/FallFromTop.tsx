import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
interface FallFromTopProps {
    className: string
    yInitial: number
    yAnimate: number
    delay: number
    img: StaticImport
}

const FallFromTop : React.FC<FallFromTopProps> = ({className, delay, yAnimate, yInitial, img}) => {
  return (
    <motion.div
        className={className}
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50, 
          damping: 20, 
          duration: 1,
          delay: delay
        }}
      >
        <Image src={img} alt="" />
      </motion.div>
  )
}

export default FallFromTop