var express = require('express');
var router = express.Router();
const controller = require('../controllers/employees');

/**
 * MVC: Model View Controller
 * Biznis logikata treba da bide vo kontrolerite, a ne vo ruterot.
 * Ruterot treba da se grizi samo za osnovnite rutiracki funkcionalnosti (definiranje na ruti).
 */

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .post('/', controller.postCreate)
      .delete('/:id', controller.delete)

module.exports = router;
