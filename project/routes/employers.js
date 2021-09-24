let express = require('express');
const router = express.Router();

let employers = [];

router
    .get('/', (req, res) => {
        res.render('employers', { employers: employers });
    })
    .post('/', (req, res) => {
        employers.push(req.body);
        res.redirect('/employers');
    })

module.exports = router;