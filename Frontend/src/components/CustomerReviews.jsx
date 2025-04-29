// CustomerReviews.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import Title from './Title';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Emily Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Absolutely love shopping here! Fast shipping, great quality, and wonderful customer service.",
    },
    {
      name: "Michael Lee",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "The best online shopping experience I've had so far. Highly recommend to everyone!",
    },
    {
      name: "Sophia Turner",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "Amazing products and the packaging was beautiful! Will definitely shop again.",
    },
    {
      name: "Hiroshi Tanaka",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      review: "Fast delivery and amazing customer service. Will recommend to my friends in Tokyo!",
    },
    {
      name: "Amina Yusuf",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      review: "Loved the selection of products! Very impressed with the quality and pricing.",
    },
    {
      name: "Carlos Mendoza",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      review: "Fantastic experience from start to finish. Great products and friendly support.",
    },
    {
      name: "Fatima Al-Sayed",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      review: "Shopping here is such a pleasure! Excellent service and wonderful packaging.",
    },
    {
      name: "James Smith",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      review: "This has become my go-to online store. Top-notch quality and very reliable.",
    },
  ];

  return (
    <div className="py-20 bg-[#f9fafb] text-gray-800 mb-10">
      <div className="text-center text-[25px] mb-12">
        <Title        text1="CUSTOMER" text2="REVIEWS" />
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        speed={8000} // tốc độ di chuyển siêu chậm
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true, // Trôi từ phải qua trái
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        grabCursor={true}
        className="px-4 md:px-16"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <div className="flex text-yellow-400 text-sm">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 5 1.122 6.545z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-[20px] text-gray-600 leading-relaxed italic">
                "{item.review}"
              </p>
              <div className="absolute top-full left-10 w-[100px] h-[100px] border-t-[20px] border-t-white border-x-[20px] border-x-transparent"></div>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
