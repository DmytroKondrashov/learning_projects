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

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: req.body.message }],
    stream: true,
  });

  for await (const chunk of response) {
    const text = chunk.choices[0]?.delta?.content;
    if (text) {
      res.write(`data: ${text}\n\n`);
    }
  }
  res.write(`data: [DONE]\n\n`);
  res.end();
});

module.exports = router;
