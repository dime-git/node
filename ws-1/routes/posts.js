let express = require('express');
let router = express.Router();
const controller = require('../controllers/posts');

router
    .get('/', controller.all)
    .get('/users/:id', controller.getByUser)
    .post('/', controller.create)
    .delete('/:id', controller.delete)

    module.exports = router;