var mongose = require('mongoose');

module.exports = mongose.model('Post', {
    msg: String,
    author: {
        type: mongose.Schema.Types.ObjectId, ref: 'User'
    }
});