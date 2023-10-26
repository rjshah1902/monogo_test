const express = require('express');

const routes = express.Router();

const products = require('./product.routes');

routes.use(products);

module.exports = routes;