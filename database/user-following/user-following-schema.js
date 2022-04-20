const mongoose = require('mongoose');

const userFollowingSchema = mongoose.Schema({
    uid: {type: String, required: true, unique: true},
    email: {type: String},
    following: {type: Array, default: []}
}, {collection: 'userFollowing'});

module.exports = userFollowingSchema;