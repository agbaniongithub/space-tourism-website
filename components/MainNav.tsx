import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { usePathname } from 'next/navigation'

const MainNav = () => {
  const pathname = usePathname()
  return (
    <nav className='hidden md:flex gap-[37px] font-barlow_condensed text-[14px] bg-white bg-opacity-[4%] md:absolute md:right-0 md:top-0 lg:top-[40px] px-[39px] lg:px-[165px] text-design-3 tracking-[2.7px]'>
          <Link
              href="/"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2", pathname === "/" && "border-b-2,")}
            >
              <span className='hidden lg:inline font-bold'>00 </span>HOME
            </Link>
          <Link
              href="/destination"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2 ", pathname === "/destination" && "border-b-2")}
            >
              <span className='hidden lg:inline'>01 </span>DESTINATION
            </Link>
          <Link
              href="/crew"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2", pathname === "/crew" && "border-b-2")}
            ><span className='hidden lg:inline'>02 </span>
              CREW
            </Link>
          <Link
              href="/technology"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2", pathname === "/technology" && "border-b-2")}
            >
              <span className='hidden lg:inline font-bold'>03 </span>TECHNOLOGY
            </Link>
        </nav>
  )
}

export default MainNav