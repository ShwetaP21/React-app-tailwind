import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'
function Footer() {
  return (
    <div className='max-w-[1240] py-16 mx-auto grid lg:grid-cols-3 gap-8 text-gray-100'>
        <div>
         <h1 className='mx-2 w-full text-3xl font-semibold text-[#fecaca] text-left font-sans'> REACT </h1>
         <p className=' mx-2 py-4 text-left'> Analytics is the systematic computational analysis of data or statistics. 
            It is used for the discovery, interpretation, and communication of meaningful patterns in data. </p>
         <div className='flex justify-between md:w-[75%] my-6 '>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
         </div>
        </div>
        <div className='lg:col-span-2 mr-4 mt-6 flex justify-between'>
            <div>
                <h6 className='font-medium text-[#fef2f2]'> Solutions</h6>
                <ul>
                  <li className='py-2 text-sm'>Analytics</li>
                  <li className='py-2 text-sm'>Marketing</li>
                  <li className='py-2 text-sm'>Insights</li>  
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#fef2f2]'> Support </h6>
                <ul>
                  <li className='py-2 text-sm'>Pricing</li>
                  <li className='py-2 text-sm'>Documentation</li>
                  <li className='py-2 text-sm'>Guidelines</li>  
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#fef2f2]'> Company</h6>
                <ul>
                  <li className='py-2 text-sm'>About</li>
                  <li className='py-2 text-sm'>Blogs</li>
                  <li className='py-2 text-sm'>Jobs</li>  
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-[#fef2f2]'> Legal</h6>
                <ul>
                  <li className='py-2 text-sm'>Claims</li>
                  <li className='py-2 text-sm'>Terms</li>
                  <li className='py-2 text-sm'>Policy</li>  
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer