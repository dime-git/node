const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        try {
            let user = await User.findOne({ email:req.body.email })
            if (user) {
                throw new Error('This email is already taken!');
            }

            req.body.password = bcrypt.hashSync(req.body.password);
            user = await User.create(req.body);

            res.send({
                error: false,
                message: 'New record created!',
                user: user
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        try {

            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                throw new Error('Invalid credentials!');
            }

            if (!bcrypt.compareSync(req.body.password, user.password)) {
                throw new Error('Invalid credentials!!');
            }

            const payload = {
                id: user._id,
                email: user.email
            }

            const token = jwt.sign(payload, 'DSDawdasdaAWd()*58%', {
                expiresIn: '50min'
            });

            res.send({
                error:false,
                message: 'User logged in',
                token: token
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    }
}