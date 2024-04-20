import type { Metadata } from "next";
import { Inter, Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";



const inter = Inter({ subsets: ["latin"] });

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bellefair',
})
const barlow = Barlow({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
  variable: '--font-barlow',
})
const barlow_condensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '400'],
  display: 'swap',
  variable: '--font-barlow_condensed',
})


export const metadata: Metadata = {
  title: "Space Tourism",
  description: "David Agbaniyaka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable}`}>
      <body className={cn("min-h-screen max-w-screen-lg relative")}>
          <Header />
          {children}
      </body>
    </html>
  );
}
