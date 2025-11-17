import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#DFDFDC]'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 py-10 item-center px-20 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-48' alt="" />
                <p className='w-full md:w-2/3 text-gray-500 text-[20px]'>
                    LaManch offers timeless apparel made with durable materials and a focus on effortless shopping, blending minimalist design with everyday comfort. Each piece is created to be versatile, stylish, and long‑lasting, so customers can enjoy fashion that feels both modern and enduring. 
                </p>
            </div>

            <div>
                <p className='text-[25px] font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-500 text-[20px]'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About us</li>
                    <li>Delivery</li></Link>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-[25px] font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-500 text-[20px]'>
                    <li>+1-123-456-7890</li>
                    <li>contact@lamanch.com</li>
                </ul>
            </div>

        </div>


        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ lamanch.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
