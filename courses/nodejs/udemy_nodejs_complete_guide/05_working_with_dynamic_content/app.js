const express  = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');
// const expressHbs = require('express-handlebars');

const app = express();

// app.set('view engine', 'pug');
// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
// app.set('view engine', 'hbs');
// app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRouter);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.render('404', { pageTitle: 'Page Not Found' });
})

app.listen(3000);
