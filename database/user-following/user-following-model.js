const mongoose = require('mongoose');
const userFollowingSchema = require('./user-following-schema');

const userFollowingModel = mongoose.model(
    'UserFollowingModel', userFollowingSchema
)

module.exports = userFollowingModel;