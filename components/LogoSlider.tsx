"use client"

import React from 'react'
import { motion } from 'motion/react' // Import motion from Framer Motion
import logoEpic from '../public/Fictional Company Logo.svg'
import Image from 'next/image'

const LogoSlider = () => {
  return (
    <div className='mt-[350px] overflow-hidden'>
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
        <div className="flex space-x-6 justify-around w-full">
          <Image alt="Logo 1" src={logoEpic} width={100} height={100} />
          <Image alt="Logo 2" src={logoEpic} width={100} height={100} />
          <Image alt="Logo 3" src={logoEpic} width={100} height={100} />
          <Image alt="Logo 4" src={logoEpic} width={100} height={100} />
          <Image alt="Logo 5" src={logoEpic} width={100} height={100} />
        </div>
      </motion.div>
    </div>
  )
}

export default LogoSlider
