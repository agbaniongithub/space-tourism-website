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
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
  
          <span className="font-bold">d</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/projects">
            Projects
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            About
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