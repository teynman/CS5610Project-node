const mongoose = require('mongoose');
const userReviewsSchema = require('./user-reviews-schema');

const userReviewsModel = mongoose.model(
    'UserReviewsModel', userReviewsSchema
)

module.exports = userReviewsModel;