const express = require('express');
const router = express.Router();
const chatController = require('./controllers/chatController');

router.post('/chat/message', chatController.sendMessage);

module.exports = router;
