import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center bg-[#F8F9FA] pb-10'>
      <p className='text-[25px] font-bold text-gray-800'>今すぐ登録して20％オフ</p>
      <p className='text-gray-500 mt-3 text-[20px]'>今すぐ登録して、タイムレスなスタイル、厳選されたコレクション、会員限定のお得な特典を手に入れましょう。</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex mx-auto gap-3 my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>登録</button>
      </form>

    </div>
  )
}

export default NewsletterBox
