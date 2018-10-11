var mongose = require('mongoose');

module.exports = mongose.model('User',{
    email: String, 
    pwd: String,
    name: String,
    description: String
})