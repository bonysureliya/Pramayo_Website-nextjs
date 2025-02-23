import React from 'react'
import uiImageCard from '../public/UiImage.svg'
import depProduct from '../public/depProduct.svg'
import vrCard from '../public/VrDigital.svg'
import Image from 'next/image'
import Button from './Button'

function ProjectCard() {
  return (
    <div>
    <div className="mt-[100px] w-full flex px-[70px] justify-between  items-center h-[132px]">
      <div className="">
        <div className="flex gap-5">
          <p className="text-white font-sans text-[55px] font-semibold">
            Discover How We Approach
          </p>
        </div>
        <div className="flex gap-5">
          <p className="text-white font-sans text-[55px] font-semibold">
          Each Project -
          </p>
          <p className="text-[#E1BBFB] font-sans text-[55px] font-semibold">
            With Strategy
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex  flex-col">
          <p className="text-[24px] text-[#FFF] font-bold">Inside Our</p>
          <p className="text-[24px] text-[#FFF] font-bold">Creative Process</p>
        </div>
        <div className="flex flex-col leading-6 mt-4">
          <Button variant={'fivenary'}>Learn More</Button>
        </div>
      </div>
    </div>      

<div className='mt-[100px] flex justify-around'>
       <div className="w-[417px] p-[20px]  flex flex-col gap-[26px] rounded-[19.7px] hover:scale-105 transition-all ease-in duration-200" style={{ background: 'linear-gradient(114deg, #060B21 75.05%, #151B36 98.29%), #FFF' }}>
          <Image className=''  alt='' src={uiImageCard} />
          <div className='flex items-end pl-[10px]'>
              <p className='text-[25px] text-[#FFF] font-sans font-normal w-[248px]'>UI/UX Overhaul for ABC App</p>
              <p className="text-[#DFB9F8]  text-[19.7px] font-semibold leading-[130%] underline " style={{ textShadow: '0px 0px 133.661px #33038C, 0px 0px 76.378px #33038C, 0px 0px 44.554px #33038C, 0px 0px 22.277px #33038C, 0px 0px 6.365px #33038C, 0px 0px 3.182px #33038C'}}>Learn more</p>
          </div>    
        </div>
        <div className="w-[417px] p-[20px]  flex flex-col gap-[26px] rounded-[19.7px] hover:scale-105 transition-all ease-in duration-200" style={{ background: 'linear-gradient(114deg, #060B21 75.05%, #151B36 98.29%), #FFF' }}>
          <Image className=''  alt='' src={depProduct} />
          <div className='flex items-end pl-[10px]'>
              <p className='text-[25px] text-[#FFF] font-sans font-normal w-[248px]'>UI/UX Overhaul for ABC App</p>
              <p className="text-[#DFB9F8] hover:cursor-pointer text-[19.7px] font-semibold leading-[130%] underline " style={{ textShadow: '0px 0px 133.661px #33038C, 0px 0px 76.378px #33038C, 0px 0px 44.554px #33038C, 0px 0px 22.277px #33038C, 0px 0px 6.365px #33038C, 0px 0px 3.182px #33038C'}}>Learn more</p>
          </div>    
        </div>
        <div className="w-[417px] p-[20px]  flex flex-col gap-[26px] rounded-[19.7px] hover:scale-105 transition-all ease-in duration-200" style={{ background: 'linear-gradient(114deg, #060B21 75.05%, #151B36 98.29%), #FFF' }}>
          <Image className=''  alt='' src={vrCard} />
          <div className='flex items-end pl-[10px]'>
              <p className='text-[25px] text-[#FFF] font-sans font-normal w-[248px]'>UI/UX Overhaul for ABC App</p>
              <p className="text-[#DFB9F8] hover:cursor-pointer text-[19.7px] font-semibold leading-[130%] underline " style={{ textShadow: '0px 0px 133.661px #33038C, 0px 0px 76.378px #33038C, 0px 0px 44.554px #33038C, 0px 0px 22.277px #33038C, 0px 0px 6.365px #33038C, 0px 0px 3.182px #33038C'}}>Learn more</p>
          </div>    
        </div>

    </div>

    </div>

  )
}

export default ProjectCard