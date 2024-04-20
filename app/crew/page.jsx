import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const CrewPage = () => {
  return (
    <main className='bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover min-h-screen p-6 pt-[88px] text-center'>
      <div className='flex gap-[18px] justify-center mb-8'>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest text-opacity-[25%]'>02</p>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest'>MEET YOUR CREW</p>
      </div>
      
      <div className='flex flex-col items-center justify-center'>
        <div className='w-[327px] h-[223px] mb-[74px]'>
          <Image src="/assets/crew/image-douglas-hurley.png" alt="Crew Image" width={177.12} height={222}/>
        </div>
        
        <div>

          <ul>
            <li>
              <Link href="/"/>
            </li>
          </ul>
        </div>
          <p className='font-bellefair text-base mb-2'>COMMANDER</p>
          <p className='font-bellefair text-2xl mb-4'>DOUGLAS HURLEY</p>
          <p className='font-barlow text-[15px]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
      </div>
    </main>
  )
}

export default CrewPage