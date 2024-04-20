import React from 'react'

const MarsPage = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-[49px] items-center lg:items-start text-design-3 px-[97px] lg:px-0'>
      <div className='flex flex-col items-center lg:items-start'>
        <p className='font-bellefair text-[56px] md:text-[80px]'>MARS</p>
        <p className='font-barlow text-[15px] md:text-base text-center lg:text-left mt-[1px] leading-[25px] md:leading-[28px] text-design-2 max-w-[444px]'>Don&apos;t forget to pack your hiking boots. You&apos;ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It&apos;s two and a half times the size of Everest!</p>
      </div>
            
      <hr className='w-full border-[#383B4B]'/>

      <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
        <div className='flex flex-col gap-3 items-center lg:items-start'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>AVG. DISTANCE</p>
          <p className='font-bellefair text-[28px]'>225 MIL. km</p>
        </div>
        <div className='flex flex-col gap-3 items-center lg:items-start'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>EST. TRAVEL TIME</p>
          <p className='font-bellefair text-[28px]'>9 MONTHS</p>
        </div>
      </div>
    </div>
  )
}

export default MarsPage