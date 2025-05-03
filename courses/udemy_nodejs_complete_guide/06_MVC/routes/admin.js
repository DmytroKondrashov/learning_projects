const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');
const router = express.Router();

const products = [];

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
})

exports.routes = router;
exports.products = products;
