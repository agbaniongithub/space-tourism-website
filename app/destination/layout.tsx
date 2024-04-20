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
    <main className='bg-crew-mobile bg-cover min-h-screen p-6 pt-[88px]'>
      <div className='flex gap-[18px] justify-center'>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest text-opacity-[25%]'>01</p>
        <p className='text-design-3 text-base font-barlow_condensed tracking-widest'>PICK YOUR DESTINATION</p>
      </div>
      <div className="flex flex-col items-center gap-[26px] mt-8">
        <Image src={activeImage}alt="Image"width={170}height={170}/>
        <div>
          <nav className="mx-auto flex justify-center gap-4 font-barlow_condensed text-[14px] md:text-base tracking-[2.7px] text-design-2">
        <Link href="/destination"className={cn("pb-[11px] transition-all hover:border-b-2" , pathname === "/destination" && "border-b-2")}
>
          MOON
        </Link>
        <Link href="/destination/mars"className={cn("pb-[11px] transition-all hover:border-b-2" , pathname === "/destination/mars" && "border-b-2")} >
          MARS
        </Link>
        <Link href="/destination/europa"className={cn("pb-[11px] transition-all hover:border-b-2" , pathname === "/destination/europa" && "border-b-2")}>
          EUROPA
        </Link>
        <Link href="/destination/titan"className={cn("pb-[11px] transition-all hover:border-b-2" , pathname === "/destination/titan" && "border-b-2")}>
          TITAN
        </Link>
          </nav>
          {children}
        </div>
      </div>
    </main>  
  );
}
