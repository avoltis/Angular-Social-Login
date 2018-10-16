var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var User = require('./models/User.js');
var Post = require('./models/post.js');
var auth = require('./auth.js');

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());



app.get('/posts/:id', async (req, res) => {

    var author = req.params.id;
    var posts = await Post.find({ author });

    res.send(posts);
});

app.post('/post', auth.checkAuthenticated, (req, res) => {
    var postData = req.body;
    postData.author = req.userId;

    var post = new Post(postData);

    post.save((err, result) => {
        if (err) {
            console.log('saving post error');
        }
        res.sendStatus(200);
    });

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

app.use('/auth', auth.router);
app.listen(3000);