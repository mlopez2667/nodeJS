'use strict'

/*DEPENDENCIAS*/
const productController = require('../controllers/product');
const express = require('express');
const api = express.Router();

api.get('/product', productController.getProducts);
api.get('/product/:productId', productController.getProduct);
api.get('/products/category/:category', productController.getProductsCategory);
api.get('/products/ubication/:ubication', productController.getProductsUbication);
api.post('/product', productController.saveProduct);
api.put('/product/:productId', productController.updateProduct);
api.put('/product/ubication/:productId', productController.updateUbication);
api.put('/product/category/:productId', productController.updateCategory);
api.delete('/product/:productId', productController.deleteProduct);

module.exports = api


