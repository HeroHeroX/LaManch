import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
//import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Congfig
const app = express();
const port = process.env.PORT || 4000;
connectDB();
//connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// api endpoints

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// backend/server.js (Ví dụ)

// ... các imports khác ...
const chatRoutes = require('./routes/chatRoutes'); // <-- Dòng 1: Import route mới

// ... các middlewares (cors, json parser) ...

// Sử dụng Chat Route (ví dụ: app.use('/api', chatRoutes))
app.use('/api', chatRoutes); // <-- Dòng 2: Tích hợp route (Endpoint là /api/chat)

// ... các app.use() cho các route khác ...