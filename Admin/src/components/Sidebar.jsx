import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[20%]  min-h-screen border-r-1'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className="flex items-center gap-3 border border-gray-300 boder-r-0 px-3 py-2 rounded-1" to="/add">
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>商品を追加</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 border border-gray-300 boder-r-0 px-3 py-2 rounded-1" to="/list">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>商品一覧</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 border border-gray-300 boder-r-0 px-3 py-2 rounded-1" to="/orders">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>注文一覧</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar
