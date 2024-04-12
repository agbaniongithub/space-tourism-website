import React from 'react'
import Image from 'next/image'
import { MobileNav } from './MobileNav'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className='fixed p-6 text-design-2 w-full flex justify-between items-center sm:px-[39px]'>
          
          <div>
            <Image src='/assets/shared/logo.svg'alt='Logo'width={40}height={40}/>
          </div>
          <div>
            <MainNav />
            <MobileNav />
          </div>

    </header>
  )
}

export default Header