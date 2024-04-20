import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const CrewPage = () => {
  return (
    <main className='bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover min-h-screen p-6 pt-[88px] text-center'>
      <div className='flex gap-[18px] justify-center mb-8'>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest text-opacity-[25%]'>03</p>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest'>SPACE LAUNCH 101</p>
      </div>
      
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full'>
        <Image src="/assets/technology/image-launch-vehicle-landscape.jpg" alt="Crew Image" width={177.12} height={222} className='w-full'/>
        </div>
        <div>

        </div>
        <div>
          
        </div>
          
        <div>
          <ul>
            <li>
              <Link href="/"/>
            </li>
          </ul>
        </div>
      </div>
      
    </main>
  )
}

export default CrewPage