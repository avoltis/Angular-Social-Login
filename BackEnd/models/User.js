var mongose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongose.Schema({
    email: String,
    pwd: String,
    name: String,
    description: String
});


userSchema.pre('save', function (next) {
    var user = this

    if (!user.isModified('pwd')) {
        return next();
    }

    bcrypt.hash(user.pwd, null, null, (err, hash) => {
        if (err){
            return next(err);
        }

        user.pwd = hash;  
        next();
    });
});

module.exports = mongose.model('User', userSchema);
