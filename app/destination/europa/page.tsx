import React from 'react'

const EuropaPage = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-[49px] items-center lg:items-start text-design-3 px-[97px] lg:px-0'>
      <div className='flex flex-col items-center lg:items-start'>
        <p className='font-bellefair text-[56px] md:text-[80px]'>EUROPA</p>
        <p className='font-barlow text-[15px] md:text-base text-center lg:text-left mt-[1px] leading-[25px] md:leading-[28px] text-design-2 max-w-[444px]'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover&apos;s dream. With an icy surface, it&apos;s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
      </div>
            
      <hr className='w-full border-[#383B4B]'/>

      <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
        <div className='flex flex-col gap-3 items-center lg:items-start'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>AVG. DISTANCE</p>
          <p className='font-bellefair text-[28px]'>628 MIL. KM</p>
        </div>
        <div className='flex flex-col gap-3 items-center lg:items-start'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>EST. TRAVEL TIME</p>
          <p className='font-bellefair text-[28px]'>3 YEARS</p>
        </div>
      </div>
    </div>
  )
}

export default EuropaPage