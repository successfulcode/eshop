'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json({ extended: false }));

const productsRouter = require('./routes/products');
const error = require('./controllers/404');

app.use(productsRouter);
app.use(error.get404);

app.listen(PORT, () => {
  console.log(`The eshop app have been started on port ${PORT}`);
});

