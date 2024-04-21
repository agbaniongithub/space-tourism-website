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
  let activeImage = '/assets/crew/image-douglas-hurley.png'
  if(pathname === '/crew') {
    activeImage = '/assets/crew/image-douglas-hurley.png'
  }
  else if(pathname === '/crew/mark') {
    activeImage = '/assets/crew/image-mark-shuttleworth.png'
  }
  else if(pathname === '/crew/victor') {
    activeImage = '/assets/crew/image-victor-glover.png'
  }

  else if(pathname === '/crew/ansari') {
    activeImage = "/assets/crew/image-anousheh-ansari.png"
  }

  return (
    <main className='bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover min-h-screen pt-[88px] md:pt-[136px] lg:pt-[212px] lg:flex lg:flex-col lg:justify-between'>

      <div className='flex gap-[16px] justify-center md:justify-start md:ml-[38.5px] lg:ml-[166.5px]'>
        <p className='text-design-3 text-base md:text-[20px] font-barlow_condensed tracking-widest md:tracking-[3.38px] text-opacity-[25%] font-bold'>02</p>
        <p className='text-design-3 text-base md:text-[20px] font-barlow_condensed tracking-widest'>MEET YOUR CREW</p>
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-col-reverse lg:flex-row-reverse lg:justify-between lg:items-start lg:mx-[166.5px]">
        <div className="max-h-[222px] max-w-[177px] max-md:mt-[32px] md:max-h-full md:max-w-[450px]">
          <Image src={activeImage} alt="Crew Image" width={700} height={700} objectFit="contain" className="max-w-full max-h-full"/>
          <hr className='w-full border-[#383B4B] md:hidden'/>
        </div>
        <div className="max-md:mt-[32px] flex flex-col items-center justify-center md:flex-col-reverse max-w-[500px] md:gap-[40px] lg:items-start lg:mt-[154px]">
        <nav className="flex justify-center items-center gap-4 mb-[32px] lg:gap-6">
          <Link href="/crew" className={cn('border border-design-3 border-opacity-25 rounded-[50%] w-[10px] h-[10px] text-design-3 flex justify-center items-center md:text-[24px] hover:bg-design-3/50', pathname === '/crew' && 'bg-white')}>
            
          </Link>
          <Link href="/crew/mark">
            <div className={cn('border border-design-3 border-opacity-25 rounded-[50%] w-[10px] h-[10px] text-design-3 hover:bg-design-3/50 flex justify-center items-center md:text-[24px]', pathname === '/crew/mark' && 'bg-white')}>
            </div>
          </Link>
          <Link href="/crew/victor">
            <div className={cn('border border-design-3 border-opacity-25 rounded-[50%] w-[10px] h-[10px] text-design-3 hover:bg-design-3/50 flex justify-center items-center md:text-[24px]', pathname === '/crew/victor' && ' bg-white')}>
              
            </div>
          </Link>
          <Link href="/crew/ansari">
            <div className={cn('border border-design-3 border-opacity-25 rounded-[50%] w-[10px] h-[10px] text-design-3 hover:bg-design-3/50 flex justify-center items-center md:text-[24px]', pathname === '/crew/ansari' && 'bg-white')}>
            </div>
          </Link>
        </nav>
          {children}
        </div>
      </div>
    </main>
  );
}
