const { Router} = require('express');
const router = Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller')

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProduct)
    .get(updateProduct)
    .get(deleteProduct);

module.exports = router;