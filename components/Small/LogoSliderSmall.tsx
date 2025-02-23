"use client"

import React from 'react'
import { motion } from 'motion/react' // Import motion from Framer Motion
import logoEpic from '../../public/Fictional Company Logo.svg'
import Image from 'next/image'

const LogoSliderSmall = () => {
  return (
    <div className='overflow-hidden'>
      <motion.div
        className='flex justify-around'
        animate={{
          x: ['100%', '-100%'], // Move from right to left
        }}
        transition={{
          duration: 30,  // Duration of the slide
          repeat: Infinity,  // Repeat the animation infinitely
          repeatType: 'loop',  // Loop the animation
          ease: 'linear',  // Smooth animation
        }}
      >
        <div className="flex space-x-6 justify-around w-full mb-10">
          <Image alt="Logo 1" src={logoEpic} width={80} height={80} />
          <Image alt="Logo 2" src={logoEpic} width={80} height={80} />
          <Image alt="Logo 3" src={logoEpic} width={80} height={80} />
          <Image alt="Logo 4" src={logoEpic} width={80} height={80} />
          <Image alt="Logo 5" src={logoEpic} width={80} height={80} />
        </div>
      </motion.div>
    </div>
  )
}

export default LogoSliderSmall
