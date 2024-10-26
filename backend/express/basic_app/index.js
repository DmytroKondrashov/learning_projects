const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

// use this middleware to serve the static files like /images/cat.avif
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.post('/', (req, res) => {
  res.send('Got a POST request!')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request for /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request for /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
