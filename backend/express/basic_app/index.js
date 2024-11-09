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
  res.redirect('/login');
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
// users "database"
let users = {
  tj: { name: "tj" }
}

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)
hash({ password: 'foobar' }, function (err, pass, salt, hash) {
  if (err) throw err;
  users.tj.salt = salt;
  users.tj.hash = hash;
})

function authenticate(name, pass, fn) {
  if(!module.parent) console.log('authenticating %s:%s', name, pass);
  let user = users[name];
  if (! user) return fn(null, null);
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  hash({ password: pass, salt: user.salt }, function(err, pass, salt, hash) {
    if (err) return fn(err);
    if (hash === user.hash) return fn(null, user);
    fn(null, null);
  })
}

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied';
    res.redirect('/login');
  }
}

app.get('/restricted', restrict, function(req, res) {
  res.send('Welcome to the secret area! Click <a href="/logout">here</a> to logout.')
})

app.get('/login', function(req, res) {
  res.render('login');
})

app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  })
})

app.post('/login', function(req, res) {
  if (!req.body) return res.sendStatus(400)
    authenticate(req.body.username, req.body.password, function(err, user){
      if (err) return next(err)
      if (user) {
        // Regenerate session when signing in
        // to prevent fixation
        req.session.regenerate(function(){
          // Store the user's primary key
          // in the session store to be retrieved,
          // or in this case the entire user object
          req.session.user = user;
          req.session.success = 'Authenticated as ' + user.name
            + ' click to <a href="/logout">logout</a>. '
            + ' You may now access <a href="/restricted">/restricted</a>.';
          res.redirect(req.get('Referrer') || '/');
        });
      } else {
        req.session.error = 'Authentication failed, please check your '
          + ' username and password.'
          + ' (use "tj" and "foobar")';
        res.redirect('/login');
    }
  });
})

// ================================ request properties ==========================================
app.get('/request', (req, res) => {
  // The URL path on which a router instance was mounted.
  console.log('Base URL: ', req.baseUrl)
  // The request body
  console.log('Body: ', req.body)
  // The request cookies
  console.log('Cookies: ', req.cookies)
  // The request headers
  console.log('Headers: ', req.headers)
  // The request host name
  console.log('Hostname: ', req.hostname)
  // The request methos
  console.log('Method: ', req.method)
  // The request parameter
  console.log('Params: ', req.params)
  // The request path
  console.log('Path: ', req.path)
  // The request query
  console.log('Query: ', req.query)

  res.send('Successfully received the request!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
