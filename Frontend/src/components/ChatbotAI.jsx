// frontend/components/ChatbotAI.jsx (PHIÊN BẢN TIẾNG NHẬT)

import React, { useState, useRef, useEffect } from 'react';

// !!! QUAN TRỌNG: THAY THẾ URL NÀY
// Khi phát triển: 'http://localhost:5000/api/chat' (Nếu backend chạy trên port 5000)
// Khi triển khai: 'https://YOUR-BACKEND-URL/api/chat'
const API_ENDPOINT = 'http://localhost:5000/api/chat'; 

const ChatbotAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Tin nhắn chào mừng đã dịch
  const [messages, setMessages] = useState([
    { text: "La Manchへようこそ！私はAIアシスタントです。靴のモデル、サイズ、返品・交換ポリシーについてご案内できます。何をお探しですか？", sender: 'ai' }
  ]);
  
  const messagesEndRef = useRef(null);

  // Cuộn xuống cuối khung chat mỗi khi có tin nhắn mới
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userPrompt = input.trim();
    const userMessage = { text: userPrompt, sender: 'user' };
    
    // Thêm tin nhắn người dùng và xóa input
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Gọi API Backend đã tạo
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userPrompt }),
      });

      const data = await res.json();

      if (res.ok) {
        const aiMessage = { text: data.reply, sender: 'ai' };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        // Lỗi: Không thể kết nối với server AI.
        setMessages((prev) => [...prev, { text: data.message || 'エラー: AIサーバーに接続できませんでした。', sender: 'ai' }]);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      // Lỗi mạng hoặc server.
      setMessages((prev) => [...prev, { text: 'ネットワークまたはサーバーエラーです。コンソールを確認してください。', sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Container cố định ở góc màn hình
    <div className="fixed bottom-4 right-4 z-50">
      
      {/* Nút mở/đóng Chat */}
      <button 
        className="w-14 h-14 bg-black-600 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.142-4.03 7.5-9 7.5S3 16.142 3 12 7.03 4.5 12 4.5s9 3.358 9 7.5z" />
            </svg>
        )}
      </button>

      {/* Khung Chat */}
      {isOpen && (
        <div className="w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-2xl absolute bottom-16 right-0 flex flex-col">
          
          {/* Tiêu đề đã dịch */}
          <div className="p-3 bg-red-600 text-white rounded-t-lg font-bold">
            La Manch AIアシスタント
          </div>

          <div className="flex-grow overflow-y-auto p-3 space-y-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-2 rounded-xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                   {/* Đang nhập đã dịch */}
                   <div className="max-w-[80%] p-2 rounded-xl text-sm bg-gray-200 text-gray-800 rounded-tl-none">
                       ...AIが入力中...
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input và Button */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isLoading}
              // Placeholder đã dịch
              placeholder="靴やサイズについて質問..."
            />
            <button
              className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
              onClick={sendMessage}
              disabled={isLoading}
            >
              {/* Nút Gửi đã dịch */}
              送信
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAI;