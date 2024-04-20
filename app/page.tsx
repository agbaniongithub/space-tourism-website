import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover min-h-screen p-6 pt-[112px] md:pt-[202px] md:px-[159px] lg:px-[165px] lg:pt-[387px] lg:flex w-full lg:justify-between'>
      <div className=' flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-[24px] lg:text-left'>
        <p className='text-design-2 font-barlow_condensed tracking-widest text-base md:text-[20px] lg:text-[20px] md:tracking-[3.38px] lg:tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</p>
        <p className='text-design-3 text-[80px] lg:text-[150px] font-bellefair'>SPACE</p>
        <p className='text-design-2 font-barlow text-[15px] md:text-[16px] lg:text-[18px] text-center lg:text-left leading-7 lg:leading-[32px] lg:max-w-[450px]'>Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
      </div>
      <div className='max-lg:mx-auto rounded-[50%] bg-design-3 h-[150px] w-[150px] md:h-[242px] md:w-[242px] flex items-center justify-center mt-[10rem]'>
        <p className='font-bellefair text-xl md:text-3xl tracking-widest '>EXPLORE</p>
      </div>
      
    </main>
  )
}

export default HomePage