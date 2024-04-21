import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const CrewPage = () => {
  return (
    <div className='px-[24px] text-center lg:text-left lg:px-0'>
      <p className='font-bellefair text-base text-design-3 text-opacity-[25%] md:text-[24px]'>FLIGHT ENGINEER</p>
      <p className='font-bellefair text-[24px] md:text-[40px] text-design-3 mb-[16px] mt-[8px] '>ANOUSHEH ANSARI</p>
      <p className='font-barlow text-design-2 leading-[25px] md:text-[16px]'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
    </div>
  )
}

export default CrewPage