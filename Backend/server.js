// backend/server.js (PHIÊN BẢN SỬA LỖI & TÍCH HỢP AI)

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
//import connectCloudinary from './config/cloudinary.js';

// --- IMPORT CHATBOT ROUTE ---
import chatRouter from './routes/chatRoutes.js'; // <-- ĐÃ SỬA: Dùng import và đổi tên thành chatRouter.js nếu file gốc là .js
// Hoặc nếu bạn tạo là chatRoutes.js:
// import chatRouter from './routes/chatRoutes.js'; 

import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
//connectCloudinary();

// Middleware
app.use(express.json());

// --- CẤU HÌNH CORS CHO VERCEL ---
// Thay thế bằng domain Vercel Frontend của bạn.
app.use(cors({
    origin: ["https://la-manch-frontend-domain.vercel.app", "http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));


// api endpoints

// --- TÍCH HỢP CHATBOT AI ---
app.use('/api', chatRouter); // Endpoint AI sẽ là /api/chat

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/', (req, res) => {
  res.send('API is running!');
});


// --- PHẦN SỬA LỖI VERCEL ---

// 1. Chỉ chạy app.listen khi ở dưới Local (Development)
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
}

// 2. BẮT BUỘC: Export app để Vercel sử dụng
export default app;