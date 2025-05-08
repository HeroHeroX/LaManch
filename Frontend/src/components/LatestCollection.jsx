import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './Productitem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const[latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },[products])

  return (
    <div className='px-4 bg-[#F8F9FA]'>
      <div className='text-center py-8 text-[35px]'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-[15px] sm:text-lg md:text-xl text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel dolore deleniti.
        </p>
      </div>

        {/*Rendering Products*/}
        <div className='py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
