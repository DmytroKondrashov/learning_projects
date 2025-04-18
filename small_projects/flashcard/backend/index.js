const express = require('express');
const pool = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/flashcards', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM words');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.post('/flashcards', async (req, res) => {
  const { word, translation } = req.body;

  try {
    await pool.query('INSERT INTO words (english, russian) VALUES ($1, $2)', [english, russian]);
    res.status(201).json({ message: "Flashcard created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
