import React from 'react'
import { assets } from '../assets/assets'


const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-[#F8F9FA]'>
      
      {/* Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='outfit-regular font-semibold text-sm md:text-base'>人気商品</p>
                </div>
                <h1 className='prata-regular text-[50px] sm:py-3 lg:text-5x1 leading-relaxed'>最新入荷アイテム</h1>
                <div className='flex items-center gap-2'>
                    <p className='outfit-regular font-semibold text-sm md:text-base'>今すぐ購入</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
      </div>

        {/* Right Side */}
        <img
            className="w-full sm:w-1/2 h-auto object-cover shadow-md"
            src={assets.hero_img}
            alt="Hero Banner"
        />

    </div>
  )
}

export default Hero
