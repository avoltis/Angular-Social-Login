var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var User = require('./models/User.js');

var posts = [
    {
        message: "voltis"
    },
    {
        message: "Agolli"
    }
]

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
    var userData = req.body;

    var user =  new User(userData);
    user.save((err, result) => {
        if (err) {
            console.log('saving user error');
        }
        res.sendStatus(200);
    });

    console.log(userData.email);
});

mongoose.connect('mongodb://test:test12@ds119993.mlab.com:19993/pssocial', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('connected successfuly to mongo')
    }
});

app.listen(3000);