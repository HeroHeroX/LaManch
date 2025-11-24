// backend/routes/chatRoutes.js

const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../controllers/chatController');

// Tạo endpoint POST: /api/chat
router.post('/chat', getChatResponse);

module.exports = router;