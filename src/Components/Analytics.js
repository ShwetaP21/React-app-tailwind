import React from 'react'
import DA from '../images/DA.png' 
function Analytics() {
  return (
    <div className='w-full bg-[#fef2f2] py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4'src={DA} alt='/' />
            <div className='flex flex-col justify-center '>
                <p className='text-[#fca5a5] font-semibold text-xl'> DATA ANALYTICS DASHBOARD </p>
                <h2 className='text-[#27272a] font-medium md:text-3xl sm:text-xl text-xl py-2'> Manage Data Analytics Centrally </h2>
                <p> Analytics is the systematic computational analysis of data or statistics. 
                    It is used for the discovery, interpretation, and communication of meaningful patterns in data.
                    It also entails applying data patterns toward effective decision-making. 
                    It can be valuable in areas rich with recorded information; analytics relies on the simultaneous application of statistics, 
                    computer programming, and operations research to quantify performance. Organizations may apply analytics to business data to describe,
                    predict, and improve business performance. Specifically, areas within analytics include descriptive analytics, diagnostic analytics,
                    predictive analytics, prescriptive analytics, and cognitive analytics. 
                </p>
                <div className='py-4'>
                    <button className='bg-[#27272a] w-[150px] py-2 rounded-md text-[#fef2f2] mx-auto font-normal '> Get Started </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics