const mongoose = require('mongoose');

const userCheckinsSchema = mongoose.Schema({
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
                                              userReviewDate: {type: Date, required: true}
                                          }, {collection: 'userReviews'});

module.exports = userCheckinsSchema;