import React from 'react'
import Box1 from '../../public/Box1.svg'
import box2 from '../../public/box2.svg'
import Box3 from '../public/box3.svg'
import videoFram from '../../public/videoFram.svg'
import Image from 'next/image'

const VideowithTesxtMedium = () => {
  return (
    <div className='relative w-full mt-[20px] justify-center items-center flex flex-col'>
      
        <div className='leading-[1.2] '>
            <p className="text-[40px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold line"> Bringing</p>
            <p className="text-[40px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold ">Ideas to Life</p>
            <p className="text-[40px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold">Project at a</p>
            <p className="text-[40px] bg-gradient-to-r from-white via-[#E1BBFB] to-[#E1BBFB] text-transparent bg-clip-text font-extrabold">Time</p>
        </div>
        <div className='mt-[20px]'>
          <Image className='w-[290px]' alt='' src={videoFram}/>
        </div>
    </div>
  )
}

export default VideowithTesxtMedium