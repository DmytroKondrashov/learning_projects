import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import postRoutes from './routes/post-routes.js';
import contactRoutes from './routes/contact-routes.js';
import createPath from './helpers/create-path.js';

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

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));

app.use(postRoutes);

app.use(contactRoutes);

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.use((req, res) => {
  const title = 'Error';
  res.status(404).render(createPath('error'), { title });
});
