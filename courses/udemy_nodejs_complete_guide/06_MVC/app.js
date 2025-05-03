const express  = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const path = require('path');
const errorController = require('./controllers/error');
// const expressHbs = require('express-handlebars');

const app = express();

// app.set('view engine', 'pug');
// app.engine('hbs', expressHbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
// app.set('view engine', 'hbs');
// app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);
