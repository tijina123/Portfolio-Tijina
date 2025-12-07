import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.Tijina_} alt='' className='w-36 mx-auto mb-2' />
            {/* <div className='w-max flex items-center justify-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6 mx-auto mb-2' />
                 tijinamariamtitus@gmail.com
            </div> */}
             
             {/* <div className='w-max flex items-center justify-center gap-2 mx-auto'>
                <Image src={assets.call_icon} alt='' className='w-6 mx-auto mb-2' />
                 +974 70418700
            </div> */}
            <div className="w-max flex items-center justify-center gap-2 mx-auto">
  <Mail className="w-5 h-5 mb-1" />
  tijinamariamtitus@gmail.com
</div>
            <div className="w-max flex items-center justify-center gap-2 mx-auto">
  <Phone className="w-5 h-5 mb-1" />
  +974 70418700
</div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Tijina Mariam Titus. All Rights Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://github.com/tijina123'>GitHub</a></li>
                <li><a target='_blank' href='https://www.linkedin.com/in/tijina-mariam-titus-599179179'>LinkedIn</a></li>
                
            </ul>
        </div>




    </div>
  )
}

export default Footer