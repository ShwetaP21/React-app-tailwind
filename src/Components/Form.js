import React from 'react'

function Form() {
  return (
    <div className='w-full py-16 text-[#fef2f2]'>
        <div className='max-w-[1240px] bg-[#27272a] mx-auto lg:grid-cols-3'>
            <div className='flex flex-col lg:col-span-2'>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-semibold py-2'> Want tips and tricks to optimize flow ?</h1>
                <p> Sign up to newsletter and stay up to date </p>
            </div>
            <div className='my-4'>
                <input className='p-2 flex mx-auto w-[50%] rounded-md text-[#27272a]' type= "email" placeholder='Enter your email'/>
                <button className='bg-[#fecaca] w-[150px] text-[#27272a] py-2 rounded-md mx-auto font-medium ml-4 my-4'> Notify Me </button> 
            </div>
        </div>

    </div>
  )
}

export default Form