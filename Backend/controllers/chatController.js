// backend/controllers/chatController.js (PHIÊN BẢN ES MODULES)

// Thay đổi: Dùng import thay cho require()
import { GoogleGenAI } from '@google/genai';

// Khởi tạo Gemini AI (sử dụng Khóa API từ .env)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); 

const getChatResponse = async (req, res) => {
    const { prompt } = req.body; 
    
    if (!prompt) {
        return res.status(400).json({ message: 'Missing prompt in request body.' });
    }

    try {
        // Cấu hình vai trò cho Chatbot La Manch
        // (Nếu La Manch bán cả thời trang ngoài giày, bạn có thể sửa lại System Instruction này)
        const systemInstruction = `Bạn là trợ lý AI thân thiện, chuyên nghiệp cho cửa hàng thời trang La Manch. Nhiệm vụ của bạn là tư vấn, trả lời các câu hỏi về sản phẩm, size, chính sách đổi trả, và giới thiệu các sản phẩm hot. Luôn giữ giọng điệu thân thiện. KHÔNG được trả lời các câu hỏi ngoài phạm vi thời trang và cửa hàng La Manch.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash', 
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            config: {
                systemInstruction: systemInstruction,
            },
        });

        // Trả về câu trả lời
        return res.status(200).json({ reply: response.text });

    } catch (error) {
        console.error('Lỗi khi gọi Gemini API:', error);
        return res.status(500).json({ message: 'Internal Server Error: Could not process AI request.' });
    }
};

// Thay đổi: Dùng export default thay cho module.exports
export default getChatResponse;