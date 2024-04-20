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
  if(pathname === '/technology') {
    activeImage = '/assets/technology/image-launch-vehicle-landscape.jpg'
  }
  else if(pathname === '/technology/2') {
    activeImage = '/assets/technology/image-spaceport-landscape.jpg'
  }

  else if(pathname === '/technology/3') {
    activeImage = "/assets/technology/image-space-capsule-landscape.jpg"
  }

  return (
    <main className='bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover min-h-screen pt-[88px]'>
      <div className='flex gap-[16px] justify-center mb-8'>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest text-opacity-[25%]'>03</p>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest'>SPACE LAUNCH 101</p>
      </div>
      

          <Image src={activeImage} alt="Crew Image" width={375} height={180} className='w-full mb-[34px]'/>
        <nav className="flex justify-center items-center gap-4 mb-[26px] ">
          <Link href="/technology" className={cn('border border-opacity-25 rounded-[50%] w-10 h-10 text-design-3 flex justify-center items-center', pathname === '/technology' && 'text-black bg-white')}>
            1
          </Link>
          <Link href="/technology/2">
            <div className={cn('border border-opacity-25 rounded-[50%] w-10 h-10 text-design-3 flex justify-center items-center', pathname === '/technology/2' && 'text-black bg-white')}>
              2
            </div>
          </Link>
          <Link href="/technology/3">
            <div className={cn(' border border-opacity-25 rounded-[50%] w-10 h-10 text-design-3 flex justify-center items-center', pathname === '/technology/3' && 'text-black bg-white')}>
              3
            </div>
          </Link>
          

        </nav>
      {children}
      
    </main>
  );
}
