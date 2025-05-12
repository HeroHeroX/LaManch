import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId'); // ✅ sửa lỗi chính tả ở đây

  useEffect(() => {
    const verifyPayment = async () => {
      if (!token || !orderId) return;

      try {
        const response = await axios.post(
          `${backendUrl}/api/order/verifyStripe`,
          { success, orderId },
          { headers: { token } }
        );

        if (response.data.success) {
          setCartItems({});
          navigate('/orders');
        } else {
          navigate('/cart');
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message || 'Something went wrong');
        navigate('/cart');
      }
    };

    verifyPayment();
  }, [token, orderId]); // 👉 thêm orderId vào dependency cho chắc chắn

  return <div>Processing your payment...</div>;
};

export default Verify;
