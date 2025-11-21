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
                    LaManchは、耐久性のある素材を使用したタイムレスなアパレルをお届けします。ミニマルなデザインと日常の快適さを融合させ、どのアイテムも多用途でスタイリッシュ、そして長く愛用できるように作られています。現代的でありながら永く続くファッションをお楽しみください。
                </p>
            </div>

            <div>
                <p className='text-[25px] font-medium'>会社</p>
                <ul className='flex flex-col gap-1 text-gray-500 text-[20px]'>
                    <Link to='/'><li>ホーム</li></Link>
                    <Link to='/about'><li>私たちについて</li>
                    <li>配送</li></Link>
                    <li>プライバシーポリシー</li>
                </ul>
            </div>

            <div>
                <p className='text-[25px] font-medium'>お問い合わせ</p>
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
