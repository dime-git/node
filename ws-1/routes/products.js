var express = require('express');
var router = express.Router();
const controller = require('../controllers/products');
const jwt = require('express-jwt');

require('dotenv').config();

router
    .post('/', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.create)
    .put('/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.update)
    .delete('/:id', controller.delete)
    .get('/', controller.all)
    .get('/categories/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.byCategory)
    .get('/:id', jwt({ secret: process.env.AUTH_SECRET, algorithms: ['HS256'] }), controller.byProduct)

module.exports = router;
