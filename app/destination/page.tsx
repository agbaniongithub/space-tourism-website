import React from 'react'

const MoonPage = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-[49px] items-center text-design-3 px-[97px]'>
      <div className='flex flex-col items-center'>
        <p className='font-bellefair text-[56px] md:text-[80px]'>MOON</p>
        <p className='font-barlow text-[15px] md:text-base text-center mt-[1px] leading-[25px] md:leading-[28px] text-design-2'>See our planet as you&apos;ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you&apos;re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
      </div>
            
      <hr className='w-full border-[#383B4B]'/>

      <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>AVG. DISTANCE</p>
          <p className='font-bellefair text-[28px]'>384,400 KM</p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>EST. TRAVEL TIME</p>
          <p className='font-bellefair text-[28px]'>3 DAYS</p>
        </div>
      </div>
    </div>
  )
}

export default MoonPage