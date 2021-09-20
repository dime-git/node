var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Express', name: 'Boban', names: ['Dimitar', 'Boban', 'Blazo']});
});

module.exports = router;
