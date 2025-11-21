import React,{useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams(); 
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () =>{
    
    products.map((item) => {
      if (item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  },[productId,products]);

  return productData ? (
    <div className='boder-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-[#F8F9FA]'>
        
        {/* Product Image and Details */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
            {/* Product Image */}
            <div className='flex gap-4 sm:gap-6 sm:px-8'>
              <div className='w-20 sm:w-24 flex flex-col gap-2 overflow-y-auto'>
                {
                  productData.image.map((item, index) => (
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-full h-[119px] object-cover cursor-pointer rounded'alt=""/>
                  ))
                }
              </div>
              <div className='w-full sm:w-[80%]'>
                <img src={image} className='w-full h-[500px] object-cover rounded shadow-md' alt=""/>
              </div>
            </div>
              
            {/* Product Details */}
            <div className='flex-1 pb-10'>
                <h1 className='font medium text-[25px]'>{productData.name}</h1>
                <div className='flex items-center gap-1 mt-1'>
                    <img src={assets.star_icon} className='w-3 5' alt="" />
                    <img src={assets.star_icon} className='w-3 5' alt="" />
                    <img src={assets.star_icon} className='w-3 5' alt="" />
                    <img src={assets.star_icon} className='w-3 5' alt="" />
                    <img src={assets.star_dull_icon} className='w-3 5' alt="" />
                    <p className='pl-2'></p>
                </div>
                <p className='mt-2 text-3x1 font-medium text-[20px]'>{currency}{productData.price}</p>
                <p className='mt-2 text-gray-500 md:w-4/5 text-[20px]'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                    {productData.sizes.map((item,index) => (
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                    ))}
                  </div>
                </div>
                <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>カートに追加</button>
                <hr className='mt-8 sm:w-4/5' />
                <div className='text-[15px] text-gray-500 mt-4 flex flex-col gap-1'>
                  <p>100％正規品 </p>
                  <p>この商品は代金引換をご利用いただけます。</p>
                  <p>7日以内の簡単返品・交換ポリシー</p>
                </div>
            </div>
        </div> 

        {/* Related Products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>       
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
