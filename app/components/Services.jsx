import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
    initial = {{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration: 1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
         initial = {{y: -20,opacity : 0}}
    whileInView={{y: 0,opacity : 1}}
    transition={{duration: 0.5, delay: 0.3}}
        >What I Offer</motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo hover:bg-lightHover'
       initial = {{y: -20,opacity : 0}}
    whileInView={{y: 0,opacity : 1}}
    transition={{duration: 0.5, delay: 0.5}}
      >My Services</motion.h2>
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
       initial = {{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration: 0.5, delay: 0.7}}
      
      >I am a Full Stack Developer from Doha, Qatar, with 2 years of hands-on experience in building modern, scalable web applications.</motion.p>
      <motion.div className='grid sm:grid-cols-1 md:grid-cols-4 gap-6 my-10'
       initial = {{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration: 0.6, delay: 0.9}}
      
      >
        {serviceData.map(({icon, title, description}, index)=>(
            <motion.div 
            whileHover={{scale: 1.05}}
            key={index} className="border border-gray-200 rounded-xl px-6 py-8 
  bg-white hover:bg-gray-50 cursor-pointer 
  hover:shadow-[6px_6px_0px_#000000] transition-all duration-300"

>
                <Image src={icon} alt='' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{description}</p>
               {/* <a href={Link || '#'} className='flex items-center gap-2 text-sm mt-5'>
  Read More <Image alt='' src={assets.right_arrow} className='w-4' />
</a> */}


                </motion.div>
        ))}

          </motion.div>

    </motion.div>
  )
}

export default Services