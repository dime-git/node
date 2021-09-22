var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/countries', (req, res) => {
  res.render('countries', {
    countries: [
      {
        name: 'California',
        city: 'Los Angeles',
        population: '39 510 000'
      },
      {
        name: 'Macedonia',
        city: 'Skopje',
        population: 'cekame na bugarite da ni kazat'
      },
      {
        name: 'United Kingdom',
        city: 'London',
        population: '66 650 000'
      }
    ]
  });
});

module.exports = router;