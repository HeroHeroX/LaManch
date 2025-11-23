import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import toast from 'react-hot-toast'

const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if(response.data.success) {
        setList(response.data.products);
      }
      else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }

  const removeProduct = async (id) =>{
    try {
      
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
      if(response.data.success){
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }


  useEffect(() => {
    fetchList()
  }, [])
  return (
    <>
      <p className='mb-2 text-[25px]'>商品一覧</p>
      <div className='flex flex-col gap-2'>

        {/*----------LIST TABLE------------*/}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-2 py-1 bg-gray-300 text-sm'>
          <b>画像</b>
          <b>商品名</b>
          <b>カテゴリー</b>
          <b>Price値段</b>
          <b className='text-center'>- アクション</b>
        </div>

        {/*-----------PRODUCT LIST----------- */}
        {
          list.map((item,index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-22' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List
