const mongoose = require('mongoose');
const userFriendsSchema = require('./user-friends-schema');

const userFriendsModel = mongoose.model(
    'UserFriendsModel', userFriendsSchema
)

module.exports = userFriendsModel;