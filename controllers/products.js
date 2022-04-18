const Product = require('../models/product');

exports.getIndex = (req, res) => {
  try {
    console.log('getIndex controller');
    res.send('e-shop API produced by sergej.mickevic@gmail.com');
  } catch (err) {
    console.error(err);
  }
}

exports.addProduct = (req, res) => {
  try {
    const [ id, title, price, description, imageUrl ] = req.body;

    const product = new Product(id, title, price, description, imageUrl);
    product.save();
    
  } catch (err) {
    console.log(err);
  }
}

exports.getProducts = async (req, res) => {
  try {
    console.log('getProducts controller');

    const products = await Product.fetchAll();

    res.json({ products: products[0] })

    console.log('products', JSON.stringify(products));
  } catch (err) {
    console.log(err);
  }
}