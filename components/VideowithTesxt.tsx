import React from 'react'
import Box1 from '../public/Box1.svg'
import box2 from '../public/box2.svg'
import Box3 from '../public/box3.svg'
import videoFram from '../public/videoFram.svg'
import Image from 'next/image'

const VideowithTesxt = () => {
  return (
    <div className='relative w-full mt-[250px] h-[600px] flex'>
        <Image alt='' src={Box1} className='absolute top-[-200px] left-[88px]' />
        <Image alt='' src={box2} className='absolute right-[450px] top-[-100px]' />
        <Image alt='' src={Box3} className='absolute right-[60px] top-[-150px]' />
        <div className='leading-[1.2] ml-[64px]'>
            <p className="text-[74px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold line"> Bringing</p>
            <p className="text-[74px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold ">Ideas to Life</p>
            <p className="text-[74px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold">Project at a</p>
            <p className="text-[74px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold">Time</p>
        </div>
        <div className='ml-[240px]'>
          <Image alt='' src={videoFram}/>
        </div>
    </div>
  )
}

export default VideowithTesxt