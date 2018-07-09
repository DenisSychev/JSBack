const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    userId: {type: String},
    id: {type: String},
    title: {type: String},
    body: {type: String}
});

module.exports = mongoose.model('Post', Post);