import express from 'express';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Post from './models/post.mjs';
import Contact from './models/contact.mjs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import methodOverride from 'method-override';
const app = express();

const port = 3000;
const db = 'mongodb://localhost:27017/node-blog';

mongoose.set('debug', true);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((res) => console.log('Connected to DB'))
  .catch(err => {
    console.log('MongoDB connection error:');
    console.log(err)
  });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
  Contact.find().then((contacts) => res.render(createPath('contacts'), { title: 'Contacts', contacts }))
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

app.get('/posts/:id', (req, res) => {
  const title = 'Post';
  Post.findById(req.params.id).then((post) => res.render(createPath('post'), { title, post }))
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/posts', (req, res) => {
  const title = 'Posts';
  Post.find().sort({ createdAt: -1 }).then((posts) => res.render(createPath('posts'), { title, posts }))
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.post('/add-post', (req, res) => {
  const { title, author, text } = req.body;
  
  const post = new Post({ title, author, text });
  post.save()
    .then(() => res.redirect('/posts'))
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
})

app.get('/add-post', (req, res) => {
  const title = 'New Post';
  res.render(createPath('add-post'), { title });
});

app.delete('/posts/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id).then(() => res.status(204).send())
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
});


app.get('/edit/:id', (req, res) => {
  const title = 'Edit Post';
  Post.findById(req.params.id).then((post) => res.render(createPath('edit-post'), { title, post }))
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
});


app.put('/edit/:id', (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text }).then(() => res.redirect(`/posts/${id}`))
    .catch((err) => {
      console.log(err)
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.use((req, res) => {
  const title = 'Error';
  res.status(404).render(createPath('error'), { title });
});
