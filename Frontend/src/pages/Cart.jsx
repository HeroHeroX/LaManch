import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!products.length || !cartItems) {
      return; // Chờ products và cartItems sẵn sàng
    }

    setLoading(true);
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
    setLoading(false);
  }, [cartItems, products]);

  if (loading) {
    return <div className="text-center py-20">読み込み中…</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">エーラ： {error}</div>;
  }

  if (!cartData.length) {
    return <div className="text-center text-[25px] py-20">カートに商品は入っていません</div>;
  }

  return (
    <div className="pt-14 py-11 bg-[#F8F9FA]">
      <div className="text-[25px] mb-3 px-8">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          if (!productData) {
            console.warn(`Product with ID ${item._id} not found`);
            return null; // Bỏ qua nếu không tìm thấy sản phẩm
          }

          if (!productData.image || !Array.isArray(productData.image) || productData.image.length === 0) {
            console.warn(`Product ${item._id} has invalid image data:`, productData.image);
          }

          return (
            <div
              key={index}
              className="max-w-6xl mx-auto py-6 border-b text-gray-700 grid grid-cols-[3fr_2fr_auto] sm:grid-cols-[4fr_2fr_auto] items-center gap-6 group transition-all duration-300"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 px-4 sm:px-8">
                <img
                  className="w-16 sm:w-20 rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                  src={productData.image?.[0] || '/default-image.png'} // Ảnh mặc định nếu thiếu
                  alt={productData.name || 'Product'}
                  onError={(e) => (e.target.src = '/default-image.png')} // Xử lý lỗi tải ảnh
                />
                <div>
                  <p className="text-sm sm:text-lg font-semibold">{productData.name || 'Unknown Product'}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm sm:text-base">
                    <p className="font-medium">{currency}{productData.price || 0}</p>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-gray-600 text-xs sm:text-sm border">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-200 text-base font-bold transition disabled:opacity-50"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <input
                  value={item.quantity}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || val === '0') return;
                    updateQuantity(item._id, item.size, Number(val));
                  }}
                  className="w-10 sm:w-12 text-center border rounded-md px-1 sm:px-2 py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                  type="text"
                  min={1}
                />

                <button
                  onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-200 text-base font-bold transition"
                >
                  +
                </button>
              </div>

              {/* Delete Icon */}
              <div className="flex justify-end pr-2 sm:pr-4">
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 sm:w-6 cursor-pointer hover:scale-125 hover:brightness-110 transition-transform duration-300"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20 px-8">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer"
            >
              購入手続きへ進む
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;