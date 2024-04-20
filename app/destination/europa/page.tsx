import React from 'react'

const EuropaPage = () => {
  return (
    <div className='flex flex-col gap-8 items-center text-design-3'>
      <div className='flex flex-col items-center'>
        <p className='font-bellefair text-[56px]'>EUROPA</p>
        <p className='font-barlow text-[15px] text-center mt-[1px]'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
      </div>
            
      <hr className='w-full border-[#383B4B]'/>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>AVG. DISTANCE</p>
          <p className='font-bellefair text-[28px]'>628 MIL. KM</p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <p className='tracking-[2.36px] font-barlow_condensed text-[14px] text-design-2'>EST. TRAVEL TIME</p>
          <p className='font-bellefair text-[28px]'>3 YEARS</p>
        </div>
      </div>
    </div>
  )
}

export default EuropaPage