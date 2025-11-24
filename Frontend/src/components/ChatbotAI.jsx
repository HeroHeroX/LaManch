// frontend/components/ChatbotAI.jsx (PHIÊN BẢN CẬP NHẬT VỊ TRÍ STACKED)

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react'; // Thêm icon Lucide để đồng bộ

const API_ENDPOINT = 'http://localhost:5000/api/chat'; // Thay đổi URL khi deploy

const ChatbotAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [messages, setMessages] = useState([
    { text: "La Manchへようこそ！私はAIアシスタントです。靴のモデル、サイズ、返品・交換ポリシーについてご案内できます。何をお探しですか？", sender: 'ai' }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userPrompt = input.trim();
    const userMessage = { text: userPrompt, sender: 'user' };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
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
        setMessages((prev) => [...prev, { text: data.message || 'エラー: AIサーバーに接続できませんでした。', sender: 'ai' }]);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setMessages((prev) => [...prev, { text: 'ネットワークまたはサーバーエラーです。コンソールを確認してください。', sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // THAY ĐỔI VỊ TRÍ: bottom-20 để nó nằm trên bottom-6 (của Back To Top)
    // Giữ right-3 để đồng bộ với Back To Top
    <div className="fixed bottom-20 right-3 z-50"> 
      
      {/* Nút mở/đóng Chat - KÍCH THƯỚC ĐỒNG BỘ (p-3) */}
      <button 
        className="fixed bottom-12 right-3 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-500 transition-all duration-300 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? (
            // Icon X khi mở
            <X size={20} /> 
        ) : (
            // Icon chat khi đóng
            <MessageSquare size={20} /> 
        )}
      </button>

      {/* Khung Chat: Điều chỉnh vị trí để nó mở phía trên nút */}
      {isOpen && (
        // Đặt bottom-16 để khung chat mở lên từ nút
        <div className="w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-2xl absolute bottom-16 right-0 flex flex-col">
          
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
                   <div className="max-w-[80%] p-2 rounded-xl text-sm bg-gray-200 text-gray-800 rounded-tl-none">
                       ...AIが入力中...
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isLoading}
              placeholder="靴やサイズについて質問..."
            />
            <button
              className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
              onClick={sendMessage}
              disabled={isLoading}
            >
              送信
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAI;