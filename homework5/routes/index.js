var express = require('express');
var router = express.Router();
let names = ['California', "Florida", "United Kingdom"];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', people: names });
});

module.exports = router;