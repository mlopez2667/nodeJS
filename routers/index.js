'use strict'

/*DEPENDENCIAS*/
const productController = require('../controllers/product');
const express = require('express');
const api = express.Router();

api.get('/product', productController.getProducts);
api.get('/product/:productId', productController.getProduct);
api.get('/products/:category', productController.getProductsCategory);
api.post('/product', productController.saveProduct);
api.put('/product/:productId', productController.updateProduct);
api.delete('/product/:productId', productController.deleteProduct);

module.exports = api

