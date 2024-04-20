"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  let activeImage = "/assets/destination/image-moon.png"
  if (pathname === "/destination") {
    activeImage = "/assets/destination/image-moon.png"
  } 
  else if (pathname === "/destination/mars") {
    activeImage = "/assets/destination/image-mars.png"
  }
  else if (pathname === "/destination/europa") {
    activeImage = "/assets/destination/image-europa.png"
  }
  else if (pathname === "/destination/titan") {
    activeImage = "/assets/destination/image-titan.png"
  }
  
  return (
    <main className='bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover min-h-screen p-6 pt-[88px] md:pt-[136px] md:px-[38.5] lg:pt-[212px] lg:px-[166.5px]'>
      <div className='flex gap-[18px] justify-center md:justify-start'>
        <p className='text-design-3 text-base md:text-[20px] lg:text-[28px] font-barlow_condensed tracking-widest md:tracking-[3.38px] lg:tracking-[4.72px] text-opacity-[25%]'>01</p>
        <p className='text-design-3 text-base md:text-[20px] lg:text-[28px] font-barlow_condensed tracking-widest md:tracking-[3.38px] lg:tracking-[4.72px]'>PICK YOUR DESTINATION</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[26px] md:gap-[53px] lg:gap-[120px] mt-8 md:mt-[60px]">
        <div className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:w-[445px] lg:h-[445px]">
          <Image src={activeImage}alt="Image"width={445}height={445}/>
        </div>
        <div className="lg:flex lg:flex-col lg:items-start">
          <nav className="max-lg:mx-auto flex justify-center gap-4 font-barlow_condensed text-[14px] md:text-base tracking-[2.7px] text-design-2 mb-[20px] md:mb-[32px]">
        <Link href="/destination"className={cn("pb-[11px] hover:border-b-2" , pathname === "/destination" && "border-b-2 text-design-3")}
>
          MOON
        </Link>
        <Link href="/destination/mars"className={cn("pb-[11px] hover:border-b-2" , pathname === "/destination/mars" && "border-b-2 text-design-3")} >
          MARS
        </Link>
        <Link href="/destination/europa"className={cn("pb-[11px] hover:border-b-2" , pathname === "/destination/europa" && "border-b-2 text-design-3")}>
          EUROPA
        </Link>
        <Link href="/destination/titan"className={cn("pb-[11px] hover:border-b-2" , pathname === "/destination/titan" && "border-b-2 text-design-3")}>
          TITAN
        </Link>
          </nav>
          {children}
        </div>
      </div>
    </main>  
  );
}
