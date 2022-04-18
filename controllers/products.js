'use strict';

const Product = require('../models/product');
const uniqid = require('uniqid'); 

exports.getIndex = (req, res) => {
  try {
    console.log('getIndex controller');
    res.status(200).send('e-shop API produced by sergej.mickevic@gmail.com');
  } catch (err) {
    console.error(err);
  }
}

exports.addProduct = async (req, res) => {
  try {
    console.log(`start addProduct req.body: ${JSON.stringify(req.body)}`);
    const { title, price, description, imageUrl } = req.body,
    id = uniqid(),
    newProduct = new Product(id, title, price, description, imageUrl),
    product = await newProduct.save();  
    console.log(`end addProduct`);
    res.status(200).json({ product: newProduct });
  } catch (err) {
    res.status(500).send('Server Error');
    console.log(err);
  }
}

exports.getProducts = async (req, res) => {
  try {
    console.log('getProducts controller');

    const products = await Product.fetchAll();

    res.status(200).json({ products: products[0] })

    console.log('products', JSON.stringify(products[0]));
  } catch (err) {
    res.status(500).send('Server Error');
    console.log(err);
  }
}