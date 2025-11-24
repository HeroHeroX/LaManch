// components/TawkToScript.jsx (FIXED)

import React, { useEffect } from 'react';

const TawkToScript = () => {
  useEffect(() => {
    // --- BẮT ĐẦU MÃ JAVASCRIPT CỦA TAWK.TO (ĐƯỢC ĐẶT TRONG useEffect) ---
    
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      
      // Đây là URL Tawk.to đã được dán và xác nhận.
      s1.src = 'https://embed.tawk.to/6923e99112586c1960a8d7e0/1jaq4gor8'; 
      
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    
    // --- KẾT THÚC MÃ JAVASCRIPT CỦA TAWK.TO ---

    // Không cần hàm Cleanup ở đây trừ khi bạn có lý do đặc biệt để hủy Tawk.to 
    // khi người dùng chuyển trang (thường là không).
    
  }, []);

  // Component này không hiển thị gì cả, chỉ có tác dụng chạy script
  return null; 
};

export default TawkToScript;