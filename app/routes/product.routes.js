const express = require('express');

const routes = express.Router();

const products = require('./../controllers/product.controllers');

const url = '/products';

routes.get(url, products.getAll);

module.exports = routes;