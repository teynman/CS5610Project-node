const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    gender: {type: String},
    hometown: {type: String},
    livingIn: {type: String},
    hobby: {type: String},
    signature: {type: String},
    userAvatar: {type: String},
    admin: {type: Boolean}
}, {collection: 'users'});

module.exports = usersSchema;