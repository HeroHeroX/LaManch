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
        <Title text1="私たち" text2="について" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
        <img
          src={assets.about_img}
          alt="About Us"
          className="w-full md:max-w-[450px] rounded-lg shadow-md object-cover"
        />
        <div className="flex flex-col gap-2 md:w-2/4 max-w-[600px]">
          <p className="text-2xl font-semibold text-gray-800">
            LaManchへようこそ！

          </p>
          <p className="text-[18px] font-light leading-relaxed text-gray-600">
            私たちは、お客様に最高のショッピング体験をご提供することをお約束します。
            高品質な商品を競争力のある価格で、そして卓越したカスタマーサービスとともに
            お届けすることが私たちの使命です。
          </p>
          <p className="text-[18px] font-light leading-relaxed text-gray-600">
            私たちのストアでは、「選ぶ力」を大切にしています。
            そのため、あらゆる好みやニーズに応える幅広い商品をご用意。
            最新のファッショントレンドから最先端の家電、個性的なホームデコレーションまで、
            すべて揃っています。
          </p>
          <p className="text-[18px] font-light leading-relaxed text-gray-600">
            数あるショップの中から当店をお選びいただき、誠にありがとうございます。
            これからも皆さまにご満足いただけるサービスを提供できるよう努めてまいります。
          </p>

          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-800 mb-2">私たちの使命</p>
            <p className="text-base font-light leading-relaxed text-gray-600">
              私たちの使命は、お客様に最高のショッピング体験をご提供することです。
              高品質な商品を競争力のある価格で、そして卓越したカスタマーサービスとともに
              お届けできるよう努めています。
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-center text-[25px] mb-15">
        <Title text1="選ばれる" text2="理由" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Item */}
        <div className="flex flex-col items-start gap-4 px-6 py-8 border rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
          <p className="text-xl font-semibold text-gray-800">高品質な商品</p>
          <p className="text-base font-light leading-relaxed text-gray-600">
            私たちは、最高品質の商品だけをご提供できることに誇りを持っています。
            チームが一つひとつ丁寧に選び抜き、品質と耐久性の基準を満たしていることを確認しています。
          </p>
        </div>
        {/* Item */}
        <div className="flex flex-col items-start gap-4 px-6 py-8 border rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
          <p className="text-xl font-semibold text-gray-800">お得な価格</p>
          <p className="text-base font-light leading-relaxed text-gray-600">
            私たちは、誰もが高品質な商品を手頃な価格で手に入れられるべきだと信じています。
            そのため、品質を犠牲にすることなく、常に競争力のある価格を維持するよう努めています。
          </p>
        </div>
        {/* Item */}
        <div className="flex flex-col items-start gap-4 px-6 py-8 border rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
          <p className="text-xl font-semibold text-gray-800">
            顧客サービス
          </p>
          <p className="text-base font-light leading-relaxed text-gray-600">
            お客様は私たちにとって最優先です。
            ご注文いただいた瞬間から商品がお手元に届くまで、卓越したカスタマーサービスとサポートをご提供いたします。
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
