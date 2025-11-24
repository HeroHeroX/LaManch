// backend/routes/chatRoutes.js

import express from 'express';
const router = express.Router();
// Đảm bảo import hàm đã export default
import getChatResponse from '../controllers/chatController.js'; 

// Tạo endpoint POST: /api/chat
router.post('/chat', getChatResponse);

export default router; // Export router để server.js có thể import