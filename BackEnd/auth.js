var User = require('./models/User.js');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var express = require('express');
var router = express.Router();

router.post('/register', (req, res) => {
    var userData = req.body;

    var user = new User(userData);
    user.save((err, result) => {
        if (err) {
            console.log('saving user error');
        }
        res.sendStatus(200);
    });
});

router.post('/login', async (req, res) => {
    var loginData = req.body;

    var user = await User.findOne({ email: loginData.email });
    if (!user) {
        return res.status(401).send({ message: 'Email or password is invalid' })
    }

    bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
        if (!isMatch) {
            return res.status(401).send({ message: 'Email or password is invalid' })
        }

        var payload = { sub: user._id };

        var token = jwt.encode(payload, '123') // "123" secret for encoding must be put into configs

        res.status(200).send({ token });
    });

});

var auth = {
    router,
    checkAuthenticated: (req, res, next) => {
        if (!req.header('authorization')) {
            return res.status(401)
                .send({ message: 'Unauthorized. Missing Auth Header' });
        }

        var token = req.header('authorization').split(' ')[1];

        var payload = jwt.decode(token, '123')

        if (!payload) {
            return res.status(401)
                .send({ message: 'Unauthorized. Missing Header' });
        }

        req.userId = payload.sub;
        next();
    }
}

module.exports = auth
