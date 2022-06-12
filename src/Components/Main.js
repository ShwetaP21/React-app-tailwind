import React from 'react';
import Typewriter from 'typewriter-effect';
function Main() {
  return (
    <div className='text-[#fef2f2]'>
        <div className='max-w-[800px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-[#fecaca] font-semibold pt-2'> Growing with data analytics </p>
            <h1 className='font-medium md:text-5xl sm:text-4xl text-3xl'> Grow with data </h1>
            <div className='md:text-2xl sm:text-2xl text-xl font-medium flex justify-center items-center '>
              <p className='py-2'> Fast ,Flexible Financing for </p>
              <div className='pl-2'>
               <Typewriter  options={{strings: ['BTB','BTC','SASS'], autoStart: true, loop: true}} />
              </div>
            </div>
            <p className='text-[#71717a] font-medium md:text-xl sm:text-l text-s'> Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms </p>
            <div className='py-4'>
              <button className='bg-[#fecaca] w-[150px] text-[#27272a] py-2 rounded-md mx-auto font-medium '> Get Started </button>
            </div>        
        </div>
    </div>
  )
}

export default Main