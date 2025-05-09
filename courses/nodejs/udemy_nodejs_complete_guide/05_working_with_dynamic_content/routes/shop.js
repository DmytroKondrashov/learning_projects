const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  // Old (no template engine)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // New (with template engine)
  res.render('shop', { prods: adminData.products, path: '/', pageTitle: 'Shop', hasProducts: adminData.products.length > 0, activeShop: true, activeAddProduct: false, productCSS: true, formsCSS: true });
});

module.exports = router;
