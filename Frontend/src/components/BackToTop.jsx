import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // icon cực đẹp, nếu chưa cài thì cài lucide-react nhé!

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Kiểm tra người dùng scroll tới đâu
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Hàm cuộn lên đầu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // mượt mà
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-3 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-500 transition-all duration-300 z-50 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
