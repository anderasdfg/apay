const productsCtrl = {};

const Product = require('../models/Product');

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
};

productsCtrl.getProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.json(product)
};

productsCtrl.createProduct = async (req, res) => {    
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({"message": "Create Product"})

};

productsCtrl.updateProduct = async (req, res) => {
    const productId = req.params.id;
    await Product.findOneAndUpdate(productId, req.body)
    res.json({message: 'Product updated successfully'});
};

productsCtrl.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.json({message: 'Product deleted successfully'});
};

module.exports = productsCtrl;