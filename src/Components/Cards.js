import React from 'react'
import single from'../images/single.png'
import double from'../images/double.png'
import triple from'../images/triple.png'
function Cards() {
  return (
    <div className='py-[160px] w-full px-4 bg-[#fef2f2]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl bg-[#fafafa] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-48px] bg-transparent' src={single} alt='/'/>
                <h2 className='font-semibold text-3xl text-center py-5'> Single User</h2>
                <p className='font-semibold text-5xl '> $149 </p>
                <div className='font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '> 1 User Granted</p>
                    <p className='py-2 border-b mx-8 '> Send Upto 2GB </p>
                </div>
                <button className='bg-[#fecaca] py-3 px-6 rounded-md font-medium w-[200px] mx-auto my-6'> Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-[#f8fafc] flex flex-col p-4 md:my-0 my-8  rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-48px] bg-transparent' src={double} alt='/'/>
                <h2 className='font-semibold text-3xl text-center py-5'>  User</h2>
                <p className='font-semibold text-5xl '> $149 </p>
                <div className='font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '> 1 User Granted</p>
                    <p className='py-2 border-b mx-8 '> Send Upto 2GB </p>
                </div>
                <button className='bg-[#27272a] text-[#fef2f2] py-3 px-6 rounded-md font-medium w-[200px] mx-auto my-6'> Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-[#fafafa] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-48px] bg-transparent' src={triple} alt='/'/>
                <h2 className='font-semibold text-3xl text-center py-5'> Single User</h2>
                <p className='font-semibold text-5xl '> $149 </p>
                <div className='font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '> 1 User Granted</p>
                    <p className='py-2 border-b mx-8 '> Send Upto 2GB </p>
                </div>
                <button className='bg-[#fecaca] py-3 px-6 rounded-md font-medium w-[200px] mx-auto my-6'> Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards