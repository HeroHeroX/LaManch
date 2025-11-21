// CustomerReviews.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import Title from './Title';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "エミリー・ジョンソン",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "ここでのショッピングが本当に大好きです！発送も早く、品質も素晴らしく、カスタマーサービスも最高でした。",
    },
    {
      name: "マイケル・リー",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "今までで一番のオンラインショッピング体験でした。皆さんに強くおすすめします！",
    },
    {
      name: "ソフィア・ターナー",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "素敵なアイテムで、パッケージもとても美しかったです！また必ず利用したいと思います。",
    },
    {
      name: "- 田中宏",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      review: "配送がとても早く、カスタマーサービスも素晴らしかったです。東京の友人にもおすすめします！",
    },
    {
      name: "アミナ・ユスフ",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      review: "アイテムのセレクションがとても気に入りました！品質と価格の良さにとても感動しました。",
    },
    {
      name: "カルロス・メンドーサ",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      review: "最初から最後まで素晴らしい体験でした。アイテムも素敵で、サポートもとても親切でした。",
    },
    {
      name: "ファティマ・アル",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      review: "ここでのショッピングは本当に楽しいです！サービスも素晴らしく、パッケージもとてもおしゃれでした。",
    },
    {
      name: "ジェームズ・スミス",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
      review: "ここは私のお気に入りのオンラインストアになりました。品質は最高で、とても信頼できます。",
    },
  ];

  return (
    <div className="py-20 bg-[#f9fafb] text-gray-800 mb-10">
      <div className="text-center text-[25px] mb-12">
        <Title        text1="カスタマー" text2="の評価" />
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
