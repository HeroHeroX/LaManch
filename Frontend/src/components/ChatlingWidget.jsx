import React, { useEffect } from 'react';

// Component này có trách nhiệm tải script Chatling.ai vào DOM
const ChatlingWidget = () => {
  useEffect(() => {
    // Đoạn mã nhúng Chatling.ai được chia thành hai phần script:
    
    // --- Phần 1: Script Config (window.chtlConfig) ---
    // Tạo element script để thiết lập biến cấu hình
    const configScript = document.createElement('script');
    configScript.innerHTML = 'window.chtlConfig = { chatbotId: "4725982433" };';

    // --- Phần 2: Script chính tải widget ---
    const chatlingScript = document.createElement('script');
    chatlingScript.async = true;
    chatlingScript.id = "chtl-script";
    chatlingScript.setAttribute('data-id', '4725982433');
    chatlingScript.type = "text/javascript";
    chatlingScript.src = "https://chatling.ai/js/embed.js";

    // Chèn cả hai script vào body của tài liệu
    document.body.appendChild(configScript);
    document.body.appendChild(chatlingScript);

    // Cleanup function: Tùy chọn, dùng để gỡ script nếu component bị unmount
    // (ví dụ: khi bạn chuyển sang trang không cần chatbot)
    return () => {
      // Vì Chatling thường tạo widget persist, việc remove có thể không cần
      // hoặc bạn cần kiểm tra xem widget đã tồn tại chưa trước khi remove.
      // Tuy nhiên, ta gỡ các thẻ script đã chèn để giữ DOM sạch sẽ.
      if (document.body.contains(configScript)) {
        document.body.removeChild(configScript);
      }
      if (document.body.contains(chatlingScript)) {
        document.body.removeChild(chatlingScript);
      }
    };
  }, []); // [] đảm bảo script chỉ chạy MỘT LẦN khi component được mount

  // Component này không hiển thị gì trên giao diện (render null)
  return null;
};

export default ChatlingWidget;