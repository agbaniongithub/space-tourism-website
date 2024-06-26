import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { usePathname } from 'next/navigation'

const MainNav = () => {
  const pathname = usePathname()
  return (
    <nav className='hidden md:flex gap-[37px] font-barlow_condensed text-[14px] lg:text-base bg-white bg-opacity-[4%] md:absolute md:right-0 md:top-0 lg:top-[40px] px-[39px] lg:px-[165px] text-design-3 tracking-[2.7px]'>
          <Link
              href="/"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2 border-design-3 border-opacity-50", pathname === "/" && "border-b-2 border-opacity-100")}
            >
              <span className='hidden lg:inline font-bold'>00 </span>HOME
            </Link>
          <Link
              href="/destination"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2 border-design-3 border-opacity-50 ", pathname.includes("/destination") && "border-b-2 border-opacity-100")}
            >
              <span className='hidden lg:inline font-bold'>01 </span>DESTINATION
            </Link>
          <Link
              href="/crew"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2 border-design-3 border-opacity-50", pathname.includes("/crew") && "border-b-2 border-opacity-100")}
            ><span className='hidden lg:inline font-bold'>02 </span>
              CREW
            </Link>
          <Link
              href="/technology"
              rel="noreferrer"
              className={cn("py-[24px] hover:border-b-2 border-design-3 border-opacity-50", pathname.includes("/technology") && "border-b-2 border-opacity-100")}
            >
              <span className='hidden lg:inline font-bold'>03 </span>TECHNOLOGY
            </Link>
        </nav>
  )
}

export default MainNav