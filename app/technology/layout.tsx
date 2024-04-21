'use client'

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  let activeImage = '/assets/technology/image-launch-vehicle-landscape.jpg'
  let activeImageDesktop = '/assets/technology/image-launch-vehicle-portrait.jpg'
  if(pathname === '/technology') {
    activeImage = '/assets/technology/image-launch-vehicle-landscape.jpg'
  }
  else if(pathname === '/technology/2') {
    activeImage = '/assets/technology/image-spaceport-landscape.jpg'
  }

  else if(pathname === '/technology/3') {
    activeImage = "/assets/technology/image-space-capsule-landscape.jpg"
  }
  if(pathname === '/technology') {
    activeImageDesktop = '/assets/technology/image-launch-vehicle-portrait.jpg'
  }
  else if(pathname === '/technology/2') {
    activeImageDesktop = '/assets/technology/image-spaceport-portrait.jpg'
  }

  else if(pathname === '/technology/3') {
    activeImageDesktop = "/assets/technology/image-space-capsule-portrait.jpg"
  }

  return (
    <main className='bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover min-h-screen pt-[88px] md:pt-[136px] lg:pt-[212px] '>

      <div className='flex gap-[16px] justify-center md:justify-start mb-8 md:pl-[38.5px] lg:pl-[166.5px]'>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest text-opacity-[25%]'>03</p>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest'>SPACE LAUNCH 101</p>
      </div>

      <div className="lg:flex lg:pl-[166.5px] lg:mt-[137px] lg:items-start lg:justify-between">
        <Image src={activeImage} alt="Crew Image" width={375} height={180} className='w-full mb-[34px] md:mb-[56px] lg:order-3 lg:hidden'/>
        <Image src={activeImageDesktop} alt="Crew Image" width={515} height={527} className='hidden w-full mb-[34px] md:mb-[56px] lg:order-3 lg:block max-w-[500px]'/>

        <nav className="flex justify-center items-center gap-4 mb-[26px] lg:flex-col lg:gap-8 lg:order-0">
          <Link href="/technology" className={cn('border border-design-3 border-opacity-25 hover:border-opacity-100 rounded-[50%] w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] text-design-3 flex justify-center items-center md:text-[24px]', pathname === '/technology' && 'text-black bg-white')}>
            1
          </Link>
          <Link href="/technology/2">
            <div className={cn('border border-design-3 border-opacity-25 hover:border-opacity-100 rounded-[50%] w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] text-design-3 flex justify-center items-center md:text-[24px]', pathname === '/technology/2' && 'text-black bg-white')}>
              2
            </div>
          </Link>
          <Link href="/technology/3">
            <div className={cn('border border-design-3 border-opacity-25 hover:border-opacity-100 rounded-[50%] w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] text-design-3 flex justify-center items-center md:text-[24px]', pathname === '/technology/3' && 'text-black bg-white')}>
              3
            </div>
          </Link>
          

        </nav>

        {children}
      </div>
      
    </main>
  );
}
