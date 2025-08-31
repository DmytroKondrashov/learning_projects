const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get('/stream-chat', (req, res) => {
  res.render('stream-chat');
});


router.post('/stream', async (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  res.flushHeaders();

  const { message, systemPrompt } = req.body;
  
  // Build messages array
  const messages = [];
  
  // Add system prompt if provided
  if (systemPrompt && systemPrompt.trim()) {
    messages.push({ role: 'system', content: systemPrompt.trim() });
  }
  
  // Add user message
  messages.push({ role: 'user', content: message });

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
    stream: true,
  });

  for await (const chunk of response) {
    const text = chunk.choices[0]?.delta?.content;
    if (text) {
      res.write(`${text}`);
    }
  }
  res.write(` [DONE]\n\n`);
  res.end();
});

module.exports = router;
