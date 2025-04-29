import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location, showSearch]);

  return showSearch && visible ? (
    <div className='bg-[#F8F9FA] text-center flex justify-center py-5'>
        <div className='flex items-center border border-gray-400 px-5 py-2 rounded-full w-3/4 sm:w-1/2 shadow-md transition-all duration-300'>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='flex-1 outline-none bg-inherit text-sm px-2 transition-all duration-200 focus:scale-[1.02]'
                type="text"
                placeholder='Search'
            />
            <img
                className='w-4 transition-transform duration-200 hover:scale-110'
                src={assets.search_icon}
                alt="search icon"
            />
        </div>
        <img
            onClick={() => setShowSearch(false)}
            className='w-4 h-4 cursor-pointer ml-3 mt-3 opacity-80 transition-all duration-200 hover:rotate-90 hover:opacity-100'
            src={assets.cross_icon}
            alt="close"
        />
    </div>
  ) : null
}

export default SearchBar
