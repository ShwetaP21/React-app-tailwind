import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Navbar=()=> {
  const [nav,setNav] = useState(false)
  const handleNav = ()=>
  {
    setNav(!nav);
  }
  return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#fef2f2]'>
        <h1 className='w-full text-3xl font-semibold text-[#fecaca] text-left font-sans'> REACT </h1>
        <ul className='hidden md:flex'>
            <li className='p-4'> Home</li>
            <li className='p-4'> Company</li>
            <li className='p-4'> Resources</li>
            <li className='p-4'> About</li>
            <li className='p-4'> Contact </li>
           
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
        <div className={nav?'fixed left-0 top-0 h-full w-[25%] border-r border-r-[#262626] bg-[#292524] ease-in-out duration-500':'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-semibold text-[#fecaca] font-sans'> REACT </h1>
        <ul className='pt-4 uppercase '>
            <li className='p-4 border-b border-b-gray-600'> Home </li>
            <li className='p-4 border-b border-b-gray-600'> Company</li>
            <li className='p-4 border-b border-b-gray-600'> Resources</li>
            <li className='p-4 border-b border-b-gray-600'> About</li>
            <li className='p-4'> Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar