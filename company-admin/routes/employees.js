var express = require('express');
var router = express.Router();
const controller = require('../controllers/employees');

/**
 * MVC: Model View Controller
 */

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .post('/', controller.postCreate)
      .post('/:id', controller.postUpdate)
module.exports = router;
