import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const MainNav = () => {
  return (
    <nav className='hidden md:flex gap-[37px] font-barlow_condensed text-[14px]'>
          <Link
              href="/"
              rel="noreferrer"
            >
              HOME
            </Link>
          <Link
              href="/"
              rel="noreferrer"
            >
              DESTINATION
            </Link>
          <Link
              href="/"
              rel="noreferrer"
            >
              CREW
            </Link>
          <Link
              href="/"
              rel="noreferrer"
            >
              TECHNOLOGY
            </Link>
        </nav>
  )
}

export default MainNav