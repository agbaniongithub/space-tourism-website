"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        {/* <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button> */}
        <Image src='/assets/shared/icon-hamburger.svg'alt='Logo'width={24}height={21}/>
      </SheetTrigger>
      <SheetContent side="right">
      <div className="flex flex-col gap-8 mt-[118px] mx-4 text-design-3 font-barlow_condensed text-base tracking-[2.7px]">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <span className="font-bold mr-[14px]">00</span><span>HOME</span>
        </MobileLink>
        
          <MobileLink onOpenChange={setOpen} href="/destination">
            <span className="font-bold mr-[14px]">01</span><span>DESTINATION</span>
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/crew">
            <span className="font-bold mr-[14px]">02</span><span>CREW</span>
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/technology">
            <span className="font-bold mr-[14px]">03</span><span>TECHNOLOGY</span>
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}