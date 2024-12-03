import React from 'react'
import Button from './Button'

const CompanyOverview = () => {
  return (
    <div className='mt-[400px] flex justify-around'>
       <div className='h-[590px] w-[640px] ml-[64px] bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#060B21]'>
        <div className='ml-[64px] mt-[64px]'>
            <div className=''>
              <p className='text-[#FFF] text-[50px]'>720+ Project</p>
              <p className='text-[#FFF] text-[50px]'>Launched</p>
            </div>
            <div className='mt-[20px]'>
              <p className='text-[rgba(255,255,255,0.60)] text-[14px]'>With over 720 successful projects, we bring experience,</p>
              <p className='text-[rgba(255,255,255,0.60)] text-[14px]'>creativity, and reliability to every new endeavor.</p>
            </div>
            <div className='mt-[45px]'>
              <Button variant={"fournary"}>Get Started Now</Button>
            </div>
        </div>    
       </div>
       
       <div>
        <div className="h-[180px] w-[640px] rounded-[20px] bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex  items-center justify-around">
             <div> 
                <p className='text-[26px] font-semibold text-[#FFF]'>Clients</p>
                <p className='text-[26px] font-semibold text-[#FFF]'>Worldwide</p>
             </div>
             <div>
                <p className='text-[14px] text-[#FFF]'>Our diverse client base spans across industries and </p>
                <p className='text-[14px] text-[#FFF]'>continents, united by a shared vision for exceptional design.</p>
                <p className='text-[14px] text-[#FFF]'>We’re proud to support brands globally.</p>
             </div>
        </div>
        <div className="h-[180px] w-[640px] rounded-[20px] bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex  items-center justify-around mt-[25px]">
             <div> 
                <p className='text-[26px] font-semibold text-[#FFF]'>Years of </p>
                <p className='text-[26px] font-semibold text-[#FFF]'>Experience</p>
             </div>
             <div>
                <p className='text-[14px] text-[#FFF]'>With over a decade of design expertise, we blend innovation</p>
                <p className='text-[14px] text-[#FFF]'>with insight to deliver impactful visuals that stand the test </p>
                <p className='text-[14px] text-[#FFF]'>of time</p>
             </div>
        </div>
        <div className="h-[180px] w-[640px] rounded-[20px] bg-gradient-to-r from-[#060B21] via-[#0E142F] to-[#0E142F] flex  items-center justify-around mt-[25px]">
             <div> 
                <p className='text-[26px] font-semibold text-[#FFF]'>Winning</p>
                <p className='text-[26px] font-semibold text-[#FFF]'>Creativity</p>
             </div>
             <div>
                <p className='text-[14px] text-[#FFF]'>Recognized for our commitment to excellence, our work has</p>
                <p className='text-[14px] text-[#FFF]'>earned accolades for originality and quality, setting us apart</p>
                <p className='text-[14px] text-[#FFF]'>in the world of design.</p>
             </div>
        </div>
       </div>

    </div>
  )
}

export default CompanyOverview