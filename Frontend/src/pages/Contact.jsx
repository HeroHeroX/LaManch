import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="bg-[#F8F9FA] py-20 px-6">
      <div className="text-center text-[25px] text-gray-800">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-16 flex flex-col md:flex-row items-center justify-center gap-12">
        <img
          className="w-full md:max-w-[480px] rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
          src={assets.contact_img}
          alt="Contact"
        />
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-6 max-w-[500px] w-full">
          <div>
            <p className="font-semibold text-2xl text-gray-700 mb-2">Our Store</p>
            <p className="text-gray-500 leading-relaxed">
              70 Nguyen Binh Khiem<br />
              District 1, Ho Chi Minh City
            </p>
          </div>

          <div>
            <p className="text-gray-500 leading-relaxed">
              Tel: (+1) 123-456-7890<br />
              Email: contact@lamanch.com
            </p>
          </div>

          <div>
            <p className="font-semibold text-2xl text-gray-700 mb-2">Careers at LaManch</p>
            <p className="text-gray-500 leading-relaxed">
              Learn more about our team and job openings.
            </p>
          </div>

          <button className="border border-black rounded-full px-8 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-500">
            Explore
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>

  )
}

export default Contact
