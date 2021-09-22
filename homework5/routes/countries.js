let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('countries', {countries: [
        {
            name: 'California',
            city: 'Los Angeles',
            population: '39 510 000'
        },
        {
            name: 'Florida',
            city: 'Miami',
            population: '21 480 000'
        },
        {
            name: 'United Kingdom',
            city: 'London',
            population: '66 650 000'
        }
    ]});
});

module.exports = router;