var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var User = require('./models/User.js');
var auth = require('./auth.js');

mongoose.Promise = Promise;

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
    res.send(post);
});

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v');
        res.send(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v');
        res.send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


mongoose.connect('mongodb://test:test12@ds119993.mlab.com:19993/pssocial', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('connected successfuly to mongo')
    }
});

app.use('/auth', auth);
app.listen(3000);