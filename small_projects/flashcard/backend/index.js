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
  const { english, russian } = req.body;

  try {
    await pool.query('INSERT INTO words (english, russian) VALUES ($1, $2)', [english, russian]);
    res.status(201).json({ message: "Flashcard created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/flashcards/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM words WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Flashcard not found' });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
