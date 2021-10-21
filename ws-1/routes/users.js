var express = require('express');
var router = express.Router();
const controller = require('../controllers/users');

/* GET users listing. */
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;
