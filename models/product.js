const db = require('../services/database');

class Product {

  constructor(id, title, price, description, imageUrl) {
    this.id=id,
    this.title=title,
    this.price=price, 
    this.description=description,
    this.imageUrl=imageUrl
  };

  static save() {
    return db.execute(
      'INSERT INTO products (id, title, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)',
      [this.id, this.title, this.price, this.description, this.imageUr]
    );
  };

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
}

module.exports = Product;