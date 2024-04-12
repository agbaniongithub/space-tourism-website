import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-home-mobile bg-cover min-h-screen p-6 pt-[112px] text-center'>
      <div className='text-center flex flex-col gap-4'>
        <p className='text-design-2 font-barlow_condensed text-base tracking-widest'>SO, YOU WANT TO TRAVEL TO</p>
        <p className='text-design-3 text-[80px] font-bellefair'>SPACE</p>
        <p className='text-design-2 font-barlow text-[15px] text-center leading-6'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </div>
      <div className=' mx-auto rounded-[50%] bg-design-3 h-[150px] w-[150px] flex items-center justify-center mt-[10rem]'>
        <p className='font-bellefair text-xl tracking-widest'>EXPLORE</p>
      </div>
      
    </main>
  )
}

export default HomePage