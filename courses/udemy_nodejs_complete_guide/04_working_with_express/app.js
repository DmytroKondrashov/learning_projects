const express  = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);

app.use('/', (req, res, next) => {
  console.log('In the another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
