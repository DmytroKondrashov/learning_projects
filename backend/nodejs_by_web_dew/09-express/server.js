const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(createPath('index'));
});

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
});

app.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

app.use((req, res) => {
  res.status(404).sendFile(createPath('error'));
});
