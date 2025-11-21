import React from 'react'
import Title from './Title';

const PromoVideo = () => {
  return (
    <div className="flex flex-col items-center bg-[#DFDFDC] pb-10 px-4">
      {/* Text section */}
      <div className='text-center py-8 text-[35px]'>
        <Title text1={'UPGRADE'} text2={'YOUR STYLE'} />
        <p className='w-3/4 m-auto text-[15px] sm:text-lg md:text-xl text-gray-600'>
          モダンなエレガンスと日常の快適さを融合したファッション。どんな瞬間も自信を引き出します。
        </p>
      </div>

      {/* Video section */}
      <video
        className="w-full max-w-5xl rounded-xl shadow-lg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/promo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default PromoVideo

