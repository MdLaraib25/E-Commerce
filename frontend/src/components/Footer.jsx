import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  ' >
            <div>
                <img className='mb-5 w-32' src= {assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    We bring you thoughtfully designed clothing crafted for comfort, quality, and everyday style. Discover fashion that fits your lifestyle.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-400 ' >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                 <ul className='flex flex-col gap-1 text-gray-400 ' ></ul>
                 <li>+91-212-433-789</li>
                 <li>forever@gmail.com</li>
            </div>

        </div>

        <div>
            <hr />
            <p className=' py-5 text-sm text-center '>Copyright 2026@ forever.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;