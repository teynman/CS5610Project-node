const mongoose = require('mongoose');
const userCheckinsSchema = require('./user-checkins-schema');

const userCheckinsModel = mongoose.model(
    'UserReviewsModel', userCheckinsSchema
)

module.exports = userCheckinsModel;