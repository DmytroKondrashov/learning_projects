const Product = require('../models/product');

exports.getAddProduct =(req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  // Old (no template engine)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // New (with template engine)
  res.render('shop', { prods: products, path: '/', pageTitle: 'Shop', hasProducts: products.length > 0, activeShop: true, activeAddProduct: false, productCSS: true, formsCSS: true });
}
