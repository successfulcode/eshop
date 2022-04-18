'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./services/database');

app.get('/', (req, res) => {
  res.send('Hi dear!');
})

db.execute('SELECT * FROM products')
  .then(result => {
    console.log(result[0], result[1]);
  })
  .catch(err => {
    console.log(err);
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})