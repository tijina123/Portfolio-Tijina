import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScroll,setIsScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)

      }else{
        setIsScroll(false)

      }
    })

  },[])



  return (
    <>
      {/* Background Blur Image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full'  />
      </div>

      {/* Main Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow:sm dark:bg-darkTheme dark:shadow-white/20" :""}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "":" bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        {/* Right Side Buttons */}
        <div className='flex items-center gap-4'>
          <button onClick={()=>setIsDarkMode(prev => !prev)}>
            <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 lg:w-8 cursor-pointer' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' />
          </a>

          {/* Mobile Menu Toggle */}
          <button className='block md:hidden ml-3' onClick={() => setMenuOpen(true)}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6 lg:w-8 cursor-pointer' />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul 
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-rose-50 z-50 transform transition-transform duration-500 dark:bg-darkHover dark:text-white ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className='absolute right-6 top-6' onClick={() => setMenuOpen(false)}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          {/* Menu Items */}
          <li><a className='font-Ovo' onClick={() => setMenuOpen(false)} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={() => setMenuOpen(false)} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={() => setMenuOpen(false)} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={() => setMenuOpen(false)} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={() => setMenuOpen(false)} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
