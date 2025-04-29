import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import CustomerReviews from '../components/CustomerReviews'

const About = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-[#F8F9FA] text-gray-700">
      {/* ABOUT US */}
      <div className="text-center mb-10 text-[25px] pt-10 ">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
        <img
          src={assets.about_img}
          alt="About Us"
          className="w-full md:max-w-[450px] rounded-lg shadow-md object-cover"
        />
        <div className="flex flex-col gap-2 md:w-2/4 max-w-[600px]">
          <p className="text-2xl font-semibold text-gray-800">
            Welcome to our online store!
          </p>
          <p className="text-[18px] font-light leading-relaxed text-gray-600">
            We are dedicated to providing you with the best shopping experience
            possible. Our mission is to offer high-quality products at competitive
            prices, along with exceptional customer service.
          </p>
          <p className="text-[18px] font-light leading-relaxed text-gray-600">
            At our store, we believe in the power of choice. That's why we offer a
            wide range of products to suit every taste and need. Whether you're
            looking for the latest fashion trends, cutting-edge electronics, or
            unique home decor, we've got you covered.
          </p>
          <p className="text-[18px] font-light leading-relaxed text-gray-600">
            Thank you for choosing us as your shopping destination. We look forward
            to serving you!
          </p>

          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-800 mb-2">Our Mission</p>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Our mission is to provide our customers with the best shopping
              experience possible. We strive to offer high-quality products at
              competitive prices, along with exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-center text-[25px] mb-15">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Item */}
        <div className="flex flex-col items-start gap-4 px-6 py-8 border rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
          <p className="text-xl font-semibold text-gray-800">Quality Products</p>
          <p className="text-base font-light leading-relaxed text-gray-600">
            We take pride in offering only the highest quality products. Our team
            carefully selects each item to ensure it meets our standards for quality
            and durability.
          </p>
        </div>
        {/* Item */}
        <div className="flex flex-col items-start gap-4 px-6 py-8 border rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
          <p className="text-xl font-semibold text-gray-800">Competitive Prices</p>
          <p className="text-base font-light leading-relaxed text-gray-600">
            We believe that everyone should have access to high-quality products at
            affordable prices. That's why we work hard to keep our prices competitive
            without sacrificing quality.
          </p>
        </div>
        {/* Item */}
        <div className="flex flex-col items-start gap-4 px-6 py-8 border rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
          <p className="text-xl font-semibold text-gray-800">
            Exceptional Customer Service
          </p>
          <p className="text-base font-light leading-relaxed text-gray-600">
            Our customers are our top priority. We are committed to providing
            exceptional customer service and support, from the moment you place your
            order to the moment it arrives at your door.
          </p>
        </div>
      </div>

      <CustomerReviews/>
      {/* Newsletter Box giữ nguyên */}
      <NewsletterBox />
    </div>

  )
}

export default About
