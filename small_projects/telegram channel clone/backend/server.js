import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import pg from 'pg';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;
const FRONTEND_ORIGIN = 'http://localhost:8080'; 

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

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
    
    // Group messages by media_group_id
    const messageGroups = new Map();
    
    const messages = response.data.result
      .map(update => update.channel_post)
      .filter(post => post && post.chat.id.toString() === TELEGRAM_CHANNEL_ID);

    // First pass: group messages by media_group_id
    for (let post of messages) {
      const { message_id, text, caption, photo, media_group_id } = post;
      
      if (media_group_id) {
        // If this post is part of a media group
        if (!messageGroups.has(media_group_id)) {
          messageGroups.set(media_group_id, {
            message_id: message_id,
            text: text || '',
            caption: caption || '',
            photoUrls: [],
            media_group_id
          });
        }
        
        // Add photos to the group
        if (photo) {
          const fileId = photo[photo.length - 1].file_id; // Get the highest quality photo
          const fileResponse = await axios.get(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`
          );
          const photoUrl = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${fileResponse.data.result.file_path}`;
          messageGroups.get(media_group_id).photoUrls.push(photoUrl);
        }

        // Combine captions and texts
        if (caption && !messageGroups.get(media_group_id).caption.includes(caption)) {
          messageGroups.get(media_group_id).caption += (messageGroups.get(media_group_id).caption ? '\n' : '') + caption;
        }
        if (text && !messageGroups.get(media_group_id).text.includes(text)) {
          messageGroups.get(media_group_id).text += (messageGroups.get(media_group_id).text ? '\n' : '') + text;
        }
      } else {
        // Handle single posts (not part of a media group)
        let photoUrls = [];
        if (photo) {
          const fileId = photo[photo.length - 1].file_id;
          const fileResponse = await axios.get(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`
          );
          photoUrls.push(`https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${fileResponse.data.result.file_path}`);
        }
        
        messageGroups.set(message_id, {
          message_id,
          text: text || '',
          caption: caption || '',
          photoUrls
        });
      }
    }

    // Save grouped messages to database
    for (let [_, post] of messageGroups) {
      const existingPost = await pool.query(
        'SELECT * FROM posts WHERE telegram_message_id = $1',
        [post.message_id]
      );

      if (existingPost.rows.length === 0) {
        await pool.query(
          `INSERT INTO posts (telegram_message_id, text, caption, photo_url) 
          VALUES ($1, $2, $3, $4)`,
          [post.message_id, post.text, post.caption, post.photoUrls]
        );
      }
    }

    const paginatedPosts = await pool.query(
      `SELECT * FROM posts ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    const totalCount = await pool.query('SELECT COUNT(*) FROM posts');
    
    res.json({
      total: parseInt(totalCount.rows[0].count),
      limit: Number(limit),
      offset: Number(offset),
      posts: paginatedPosts.rows,
    });
  } catch (error) {
    console.error('Error fetching Telegram posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
