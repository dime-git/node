var express = require('express');
var router = express.Router();
const controller = require('../controllers/products');
// const jwt = require('express-jwt');

// require('dotenv').config();

router
    .post('/', controller.create)
    .put('/:id', controller.update)
    .delete('/:id', controller.delete)
    .get('/', controller.all)
    .get('/categories/:id', controller.byCategory)
    .get('/:id', controller.byProduct) 

module.exports = router;
