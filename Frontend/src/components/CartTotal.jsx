import React,{useContext, useState, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

    const {currency, getCartAmount, delivery_fee} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2x1'>
            <Title text1={'カート'} text2={'合計'}/>
        </div>

        <div className='flex flex-col gap-4 mt-6 text-sm'>
            <div className='flex justify-between'>
                <p>小計</p>
                <p>{currency}{getCartAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>配送料</p>
                <p>{currency}{delivery_fee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>合計 </b>
                <b>{currency}{ getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>

            </div>
        </div>
    </div>
  )
}

export default CartTotal
