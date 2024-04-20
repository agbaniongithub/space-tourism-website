import React from 'react'

const MarsPage = () => {
  return (
    <div className='flex flex-col gap-8 items-center text-design-3'>
      <div className='flex flex-col items-center'>
        <p className='font-bellefair text-[56px]'>MARS</p>
        <p className='font-barlow text-[15px] text-center mt-[1px]'>Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!</p>
      </div>
            
      <hr className='w-full border-[#383B4B]'/>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>AVG. DISTANCE</p>
          <p className='font-bellefair text-[28px]'>225 MIL. km</p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>EST. TRAVEL TIME</p>
          <p className='font-bellefair text-[28px]'>9 MONTHS</p>
        </div>
      </div>
    </div>
  )
}

export default MarsPage