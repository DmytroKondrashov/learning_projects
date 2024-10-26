const express = require('express');
const path = require('path')
let hash = require('pbkdf2-password')()
let session = require('express-session');

const app = express();
const port = 3000;

// use this middleware to serve the static files like /images/cat.avif
app.use(express.static(path.join(__dirname,'public')))

// set the views directory and the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set up the sessions
app.use(express.urlencoded())
app.use(session({
  resave:false,
  saveUninitialized:true,
  secret: 'keyboard cat',
}))

// Session-persisted message middleware
// every fynction that has the next parameter is a middleware
app.use(function(req, res, next) {
  let err = req.session.error
  let msg = req.session.success
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
})

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

// ================================ authentication ==========================================



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
