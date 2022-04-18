'use strict';

const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.get('/', products.getIndex);

router.post('/addproduct', products.addProduct);

router.get('/products', products.getProducts);

module.exports = router;
