const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/product_controller');
const StatusCodes = require('../utils/status_codes');
const productRouter = express.Router();

// Gets all the product from the app TODO: Include Pagination
productRouter.get('/', getAllProducts);

// Add a new product to the database
productRouter.post('/', addProduct)

module.exports = productRouter;