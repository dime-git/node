const Product = require('../models/product');

module.exports = {
    create: async (req, res) => {
        try {
            const product = await Product.create(req.body);

            res.status(201).send({
                error: false,
                message: 'Created new product',
                product: product
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body);

            res.send({
                error: false,
                message: `Product id #${req.params.id} was updated! `,
                product: product
            })
        } catch (error) {

            res.send({
                error: true,
                message: error.message
            })
        }
    },
    delete: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);

            res.send({
                error: false,
                message: `Product with id #${req.params.id} was deleted!`
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message,
            })
        }
    },
    all: async (req, res) => {
        try {
            const products = await Product.find();

            res.send({
                error: false,
                message: 'List of all products from database for you my friend',
                products: products,
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    byProduct: async (req, res) => {
        try {

            const products = await Product.findById(req.params.id).populate('category');

            res.send({
                error: false,
                message: `Product with id #${req.params.id}`,
                products: products
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    byCategory: async (req, res) => {
        try {

            const products = await Product.find({ category: req.params.id }).populate('category');

            res.send({
                error: false,
                message: `All products for category with id #${req.params.id}`,
                products: products
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    }
}
