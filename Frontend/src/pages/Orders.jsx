import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className='pt-16 py-15 bg-[#F8F9FA]'>
        <div className='text-[25px] mb-3 px-4'>
          <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
          {
            products.slice(1, 4).map((item, index)=>(
              <div key={index} className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 border-b text-gray-700">
              {/* Left: Product Info */}
              <div className="flex items-start gap-5">
                <img className="w-20 h-20 object-cover rounded-md" src={item.image[0]} alt={item.name} />
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold">{item.name}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <p className="text-gray-800 font-medium">{currency}{item.price}</p>
                    <p>Qty: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="text-sm text-gray-400">Date: 25, Jul, 2025</p>
                </div>
              </div>
            
              {/* Right: Status and Action */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <p className="text-sm font-medium text-green-600">Ready to ship</p>
                </div>
                <button className="border border-gray-400 px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-300 cursor-pointer transition">
                  Track Order
                </button>
              </div>
            </div>
            
            ))
          }
        </div>
    </div>
  )
}

export default Orders
