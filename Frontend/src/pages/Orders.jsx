import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);

  const [ orderData, setorderData ] = useState([])

  const loadOrderData = async () => {
    try {
      if(!token){
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if(response.data.success){
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse());
        
      }
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData();
  },[token])

  return (
    <div className='pt-16 py-15 bg-[#F8F9FA]'>
        <div className='text-[25px] mb-3 px-4'>
          <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
          {
            orderData.map((item, index)=>(
              <div key={index} className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6 border-b text-gray-700">
              {/* Left: Product Info */}
              <div className="flex items-start gap-5">
                <img className="w-20 h-20 object-cover rounded-md" src={item.image[0]} alt={item.name} />
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold">{item.name}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <p className="text-gray-800 font-medium">{currency}{item.price}</p>
                    <p>数量: {item.quantity}</p>
                    <p>サイズ: {item.size}</p>
                  </div>
                  <p className="text-sm text-gray-400">
  {new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date(item.date))}</p>
                  <p className="text-sm text-gray-400">{item.paymentMethod}</p>
                </div>
              </div>
            
              {/* Right: Status and Action */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <p className="text-sm font-medium text-green-600">{item.status}</p>
                </div>
                <button onClick={loadOrderData} className="border border-gray-400 px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-300 cursor-pointer transition">
                  注文状況を確認する
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
