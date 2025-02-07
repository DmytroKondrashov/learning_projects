const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
  const contacts = [
    { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
    { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
    { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
  ];
  res.render(createPath('contacts'), { title: 'Contacts', contacts });
});

app.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

app.get('/posts/:id', (req, res) => {
  const title = 'Post';
  res.render(createPath('post'), { title });
});

app.get('/posts', (req, res) => {
  const title = 'Posts';
  res.render(createPath('posts'), { title });
});

app.get('/add-post', (req, res) => {
  const title = 'New Post';
  res.render(createPath('add-post'), { title });
});

app.use((req, res) => {
  res.status(404).render(createPath('error'));
});
