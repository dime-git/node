var express = require('express');
const router = express.Router();

const countries = [];

router
      .get('/', (req, res) => {
        res.render('index', { title: 'Express', name: 'Boban', countries: countries });
      })
      .post('/countries', (req, res) => {
        countries.push(req.body);
        res.redirect('/');
      });

module.exports = router;
