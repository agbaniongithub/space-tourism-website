"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MobileNav } from './MobileNav'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className='fixed p-6 text-design-2 w-full flex justify-between items-center md:px-[39px] lg:p-[55px]'>
          
          <div>
            <Image src='/assets/shared/logo.svg'alt='Logo'width={40}height={40}/>
            <hr className='hidden lg:inline w-7 border-[#ffffff]'/>
          </div>
          <div>
            <MainNav />
            <MobileNav />
          </div>

    </header>
  )
}

export default Header