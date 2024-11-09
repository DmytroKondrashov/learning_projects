const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users')
})

router.get('/:id', (req, res) => {
  res.send(`Get user with id ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send(`Create a new user`)
})

router.put('/:id', (req, res) => {
  res.send(`Updates user with id ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`Deletes user with id ${req.params.id}`)
})

module.exports = router;
