import React from 'react'
import Button from '../Button'
import ranctagle from '../../public/Rectangle 154.svg'
import Image from 'next/image'
import uiImageCard from '../../public/uiCArd.svg'
import webcard from '../../public/Element (1).svg'
import imgcard1 from '../../public/Element (2).svg'
import imgcard2 from '../../public/Element (3).svg'

const CompanyOverviewSmall = () => {
  return (
    <div className='mt-[20px] w-full flex flex-col justify-center items-center'>
       <div className='h-[300px] w-[290px] relative bg-gradient-to-r  from-[#060B21] via-[#0E142F] to-[#060B21] '>
       {/* <Image alt='' className='absolute' src= {ranctagle} />
       <Image alt='' className='absolute bottom-0 right-12' src= {uiImageCard} />
       <Image alt='' className='absolute bottom-14 left-10 w-[190px] h-[120px]' src= {webcard} />
       <Image alt='' className='absolute right-0 bottom-[205px] ' src= {imgcard1} />
       <Image alt='' className='absolute right-14 top-14 ' src= {imgcard2} /> */}
        <div className='mt-[10px] ml-[20px]'>
            <div className=''>
              <p className='text-[#FFF] text-[25px]'>720+ Project</p>
              <p className='text-[#FFF] text-[25px]'>Launched</p>
            </div>
            <div className='mt-[20px]'>
              <p className='text-[rgba(255,255,255,0.60)] text-[10px]'>With over 720 successful projects, we bring experience,</p>
              <p className='text-[rgba(255,255,255,0.60)] text-[10px]'>creativity, and reliability to every new endeavor.</p>
            </div>
            <div className='mt-[45px]'>
              <Button className='h-[35px] w-[150px] text-[15px]' variant={"fournary"}>Get Started Now</Button>
            </div>
        </div>    
       </div>
   
       <div className='w-full flex flex-col justify-center items-center mt-[40px] '>
        <div className="h-[150px]  w-[290px] rounded-xl bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex flex-col justify-center pl-[5px]">
             <div> 
                <p className='text-[20px] font-semibold text-[#FFF]'>Clients</p>
                <p className='text-[20px] font-semibold text-[#FFF]'>Worldwide</p>
             </div>
             <div>
                <p className='text-[10px] text-[#FFF]'>Our diverse client base spans across industries and </p>
                <p className='text-[10px] text-[#FFF]'>continents, united by a shared vision for exceptional design.</p>
                <p className='text-[10px] text-[#FFF]'>We’re proud to support brands globally.</p>
             </div>
        </div>
        <div className="h-[150px] w-[290px] mt-[20px] rounded-xl bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex flex-col justify-center pl-[5px]">
             <div> 
                <p className='text-[20px] font-semibold text-[#FFF]'>Years of </p>
                <p className='text-[20px] font-semibold text-[#FFF]'>Experience</p>
             </div>
             <div>
                <p className='text-[10px] text-[#FFF]'>With over a decade of design expertise, we blend innovation</p>
                <p className='text-[10px] text-[#FFF]'>with insight to deliver impactful visuals that stand the test </p>
                <p className='text-[10px] text-[#FFF]'>of time</p>
             </div>
        </div>
        <div className="h-[150px] w-[290px] mt-[20px] rounded-xl bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex flex-col justify-center pl-[5px]">
             <div> 
                <p className='text-[20px] font-semibold text-[#FFF]'>Winning</p>
                <p className='text-[20px] font-semibold text-[#FFF]'>Creativity</p>
             </div>
             <div>
                <p className='text-[10px] text-[#FFF]'>Recognized for our commitment to excellence, our work has</p>
                <p className='text-[10px] text-[#FFF]'>earned accolades for originality and quality, setting us apart</p>
                <p className='text-[10px] text-[#FFF]'>in the world of design.</p>
             </div>
        </div>
       </div>

    </div>
  )
}

export default CompanyOverviewSmall