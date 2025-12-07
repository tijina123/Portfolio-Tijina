import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    
    initial = {{opacity: 0}}
    whileInView= {{opacity: 1}}
    transition={{duration: 1}}>
      {/* Section Title */}
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'

      initial = {{opacity: 0, y: -20}}
    whileInView= {{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
      >
        Introduction</motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo'
       initial = {{opacity: 0, y: -20}}
    whileInView= {{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5}}


      >About me</motion.h2>

      {/* Main Flex Layout */}
      <motion.div className='flex flex-col lg:flex-row items-start gap-12 my-16'
      
            initial = {{opacity: 0, }}
    whileInView= {{opacity: 1}}
    transition={{duration: 0.8}}
    >
   

        {/* Left - Image */}
        <motion.div className='w-64 sm:w-80 flex-shrink-0 rounded-3xl overflow-hidden'
         initial = {{opacity: 0, scale: 0.9 }}
    whileInView= {{opacity: 1, scale: 1}}
    transition={{duration: 0.6}}
    >
          <Image
            src={assets.tijinamariam}
            alt='user'
            className='w-full h-auto rounded-3xl object-cover'
          />
        </motion.div>

        {/* Right - Details */}
        <motion.div className='flex-1'
          initial = {{opacity: 0}}
    whileInView= {{opacity: 1}}
    transition={{duration: 0.6, delay: 0.8}}
        >

          {/* Paragraph */}
          <p className='mb-10 font-Ovo text-gray-700 leading-relaxed'>
            I am a Full Stack Developer with 3 years of professional experience in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>

          {/* Info Cards */}
          <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8'
           initial = {{opacity: 0}}
    whileInView= {{opacity: 1}}
    transition={{duration: 0.8, delay: 1}}
    >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className='border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-md'
              
    whileHover= {{scale: 1.05}}
 
              
              >
                <Image src={ icon} alt={title} className='w-6 mb-4' />
                <h3 className='font-semibold text-gray-700 mb-2 '>{title}</h3>
                <p className='text-gray-600 text-sm '>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4 className='mb-4 text-gray-700 font-Ovo'
            initial = {{y: 20, opacity: 0}}
    whileInView= {{y: 0, opacity: 1}}
    transition={{duration: 0.5, delay: 1.3}}
          >Tools I Use</motion.h4>
          <motion.ul className='flex flex-wrap items-center gap-4'
           initial = {{opacity: 0}}
    whileInView= {{opacity: 1}}
    transition={{duration: 0.6, delay: 1.5}}
          >
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{ scale: 1.1}}
                key={index}
                className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 duration-300'
              >
                <Image src={tool} alt='tool' className='w-6 sm:w-8' />
              </motion.li>
            ))}
          </motion.ul>
          </motion.div>
     </motion.div>
    </motion.div>
  )
}

export default About
