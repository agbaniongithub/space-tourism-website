import React from 'react'

const TitanPage = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-[49px] items-center text-design-3 px-[97px]'>
      <div className='flex flex-col items-center'>
        <p className='font-bellefair text-[56px] md:text-[80px]'>TITAN</p>
        <p className='font-barlow text-[15px] md:text-base text-center mt-[1px] leading-[25px] md:leading-[28px] text-design-2'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
      </div>
            
      <hr className='w-full border-[#383B4B]'/>

      <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>AVG. DISTANCE</p>
          <p className='font-bellefair text-[28px]'>1.6 BIL. KM</p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>EST. TRAVEL TIME</p>
          <p className='font-bellefair text-[28px]'>7 YEARS</p>
        </div>
      </div>
    </div>
  )
}

export default TitanPage