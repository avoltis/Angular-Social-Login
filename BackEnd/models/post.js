var mongose = require('mongoose');

module.exports = mongose.model('Post', {
    msg: String
});