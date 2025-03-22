import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;
const FRONTEND_ORIGIN = 'http://localhost:8080'; 

app.use(cors({
  origin: FRONTEND_ORIGIN,
}));

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHANNEL_ID) {
  console.error('Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHANNEL_ID in your .env file');
  process.exit(1);
}

app.get('/api/posts', async (req, res) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    const response = await axios.get(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`
    );
    
    const messages = response.data.result
      .map(update => update.channel_post)
      .filter(post => post && post.chat.id.toString() === TELEGRAM_CHANNEL_ID);

      const paginatedMessages = messages.slice(Number(offset), Number(offset) + Number(limit));
    
    res.json({
      total: messages.length,
      limit: Number(limit),
      offset: Number(offset),
      posts: paginatedMessages
    });
  } catch (error) {
    console.error('Error fetching Telegram posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
