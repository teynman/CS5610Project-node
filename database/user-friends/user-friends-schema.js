const mongoose = require('mongoose');

const userFriendsSchema = mongoose.Schema({
    uid: {type: String, required: true, unique: true},
    email: {type: String},
    friends: {type: Array}
}, {collection: 'userFriends'});

module.exports = userFriendsSchema;