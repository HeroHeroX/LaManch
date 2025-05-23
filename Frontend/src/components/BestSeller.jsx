import React,{useEffect ,useContext, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProducts.slice(0, 5));
    },[products])

  return (
    <div className='px-4 py-5 bg-[#DFDFDC]'>
      <div className='text-center py-8 text-[35px]'>
        <Title text1={'BEST'} text2={'SELLER'}/>
        <p className='w-3/4 m-auto text-[15px] sm:text-lg md:text-xl text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel dolore deleniti.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>

    </div>
  )
}

export default BestSeller
