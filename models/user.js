const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {type: String},
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
        street: { type: String },
        suite: { type: String },
        city: { type: String },
        zipcode: { type: String }
    },
    phone: { type: String },
    website: { type: String },
    company: {
        name: { type: String },
        catchPhrase: { type: String },
        bs: { type: String }
    }
});

module.exports = mongoose.model('User', User);