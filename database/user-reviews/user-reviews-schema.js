const mongoose = require('mongoose');

const userReviewsSchema = mongoose.Schema({
    uid: {type: String, required: true},
    email: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    businessId: {type: String},
    businessName: {type: String},
    businessLocation: {type: Object},
    businessPrice: {type: String},
    businessPhone: {type: String},
    businessImageUrl: {type: String},
    userReviewRating: {type: Number, required: true},
    userReview: {type: String, required: true},
    userReviewDate: {type: Date, required: true}
}, {collection: 'userReviews'});

module.exports = userReviewsSchema;