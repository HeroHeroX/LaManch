import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-[#F8F9FA] items-center justify-around gap-32 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      {/* Một chính sách */}
      <div className="flex flex-col items-center max-w-xs">
        <img src={assets.exchange_icon} className='w-12 mb-5' alt="Exchange Icon" />
        <p className='text-[25px] font-semibold'>簡単返品・交換ポリシー</p>
        <p className='text-[20px] text-gray-500'>手間のかからない交換ポリシーをご用意しています。</p>
      </div>
      <div className="flex flex-col items-center max-w-xs">
        <img src={assets.quality_icon} className='w-12 mb-5' alt="Exchange Icon" />
        <p className='text-[25px] font-semibold'>7日間返品ポリシー</p>
        <p className='text-[20px] text-gray-500'>7日間無料返品ポリシーをご用意しています。</p>
      </div>
      <div className="flex flex-col items-center max-w-xs">
        <img src={assets.support_img} className='w-12 mb-5' alt="Exchange Icon" />
        <p className='text-[25px] font-semibold'>カスタマーサポート </p>
        <p className='text-[20px] text-gray-500'>24時間カスタマーサポートをご提供しています。</p>
      </div>

      {/* Bạn có thể thêm nhiều policy ở đây tương tự */}
    </div>
  )
}

export default OurPolicy
