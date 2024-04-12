import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='fixed p-6 text-design-2 w-full flex justify-between items-center'>
          <div>
            <Image src='/assets/shared/logo.svg'alt='Logo'width={40}height={40}/>
          </div>
          <div>
            <Image src='/assets/shared/icon-hamburger.svg'alt='Logo'width={24}height={21}/>
          </div>

    </header>
  )
}

export default Header