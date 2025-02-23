import React from 'react'
import uiImageCard from '../../public/UiImage.svg'
import depProduct from '../../public/depProduct.svg'
import vrCard from '../../public/VrDigital.svg'
import Image from 'next/image'
import Button from '../Button'

function ProjectCardMedium() {
  return (
    <div>
    <div className="mt-[20px] w-full flex flex-col justify-around items-center ">
      <div className="h-[80px] w-full flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <p className="text-white font-sans text-[25px] font-semibold">
            Discover How We Approach
          </p>
        </div>
        <div className="flex">
          <p className="text-white font-sans text-[25px] font-semibold">
          Each Project -
          </p>
          <p className="text-[#E1BBFB] font-sans text-[25px] font-semibold">
            With Strategy
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start w-[340px] mt-3">
        <div className="flex  flex-col">
          <p className="text-[18px] text-[#FFF] font-bold">Inside Our</p>
          <p className="text-[18px] text-[#FFF] font-bold">Creative Process</p>
        </div>
        <div className="flex flex-col leading-6 mt-4">
          <Button className='w-[100px] h-[35px] rounded-[8px] text-[12px]' variant={'fivenary'}>Learn More</Button>
        </div>
      </div>
    </div>      

<div className='mt-[80px] flex flex-col justify-center items-center'>
       <div className="w-[290px] p-[15px]  flex flex-col gap-[15px] rounded-[19.7px] " style={{ background: 'linear-gradient(114deg, #060B21 75.05%, #151B36 98.29%), #FFF' }}>
          <Image className=''  alt='' src={uiImageCard} />
          <div className=' flex items-end justify-between pl-[10px]'>
              <p className='text-[11px] text-[#FFF] font-sans font-normal'>UI/UX Overhaul for ABC App</p>
              <p className="text-[#DFB9F8]  text-[10px] font-semibold leading-[130%] underline " style={{ textShadow: '0px 0px 133.661px #33038C, 0px 0px 76.378px #33038C, 0px 0px 44.554px #33038C, 0px 0px 22.277px #33038C, 0px 0px 6.365px #33038C, 0px 0px 3.182px #33038C'}}>Learn more</p>
          </div>    
        </div>
        <div className="w-[290px] p-[15px] mt-[25px] flex flex-col gap-[15px] rounded-[19.7px] " style={{ background: 'linear-gradient(114deg, #060B21 75.05%, #151B36 98.29%), #FFF' }}>
          <Image className=''  alt='' src={depProduct} />
          <div className='flex items-end justify-between pl-[10px]'>
              <p className='text-[11px] text-[#FFF] font-sans font-normal'>UI/UX Overhaul for ABC App</p>
              <p className="text-[#DFB9F8]  text-[10px] font-semibold leading-[130%] underline " style={{ textShadow: '0px 0px 133.661px #33038C, 0px 0px 76.378px #33038C, 0px 0px 44.554px #33038C, 0px 0px 22.277px #33038C, 0px 0px 6.365px #33038C, 0px 0px 3.182px #33038C'}}>Learn more</p>
          </div>    
        </div>
        <div className="w-[290px] p-[15px] mt-[25px] flex flex-col gap-[15px] rounded-[19.7px]" style={{ background: 'linear-gradient(114deg, #060B21 75.05%, #151B36 98.29%), #FFF' }}>
          <Image className=''  alt='' src={vrCard} />
          <div className='flex items-end justify-between pl-[10px]'>
              <p className='text-[11px] text-[#FFF] font-sans font-normal'>UI/UX Overhaul for ABC App</p>
              <p className="text-[#DFB9F8]  text-[10px] font-semibold leading-[130%] underline " style={{ textShadow: '0px 0px 133.661px #33038C, 0px 0px 76.378px #33038C, 0px 0px 44.554px #33038C, 0px 0px 22.277px #33038C, 0px 0px 6.365px #33038C, 0px 0px 3.182px #33038C'}}>Learn more</p>
          </div>    
        </div>

    </div>

    </div>

  )
}

export default ProjectCardMedium