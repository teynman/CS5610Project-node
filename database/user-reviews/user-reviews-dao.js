const userReviewsModel = require('./user-reviews-model');

const findAllUserReviews = () => {
    return userReviewsModel.find()
}

const findUserReviewsByUid = (uid) => {
    return userReviewsModel.find({uid})
}

const findUserReviewByEmail = (email) => {
    return userReviewsModel.find({email})
}

const findUserReviewByBusiness = (bid) => {
    return userReviewsModel.find({businessId: bid})
}

const createUserReview = (userReview) => {
    return userReviewsModel.create(userReview)
}

const deleteUserReview = (id) => {
    return userReviewsModel.deleteOne({_id: id})
}

module.exports = {
    findAllUserReviews, findUserReviewsByUid, findUserReviewByEmail,
    createUserReview, deleteUserReview, findUserReviewByBusiness
}