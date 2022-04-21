const reviewsDao = require("../database/user-reviews/user-reviews-dao");

const findAllUserReviews = async (req, res) => {
    const allUserReviews = await reviewsDao.findAllUserReviews()
    res.json(allUserReviews)
}

const findUserReviewsById = async (req, res) => {
    const userId = req.params.uid
    const userReviews = await reviewsDao.findUserReviewsByUid(userId)
    if (userReviews) {
        res.json(userReviews)
    } else {
        res.sendStatus(404)
    }
}

const findUserReviewsByEmail = async (req, res) => {
    const email = req.params.email
    const userReviews = await reviewsDao.findUserReviewByEmail(email)
    if (userReviews) {
        res.json(userReviews)
    } else {
        res.sendStatus(404)
    }
}

const addUserReview = async (req, res) => {
    const userReview = req.body.userReview
    const status = await reviewsDao.createUserReview(userReview)
    res.json(status)
}

const deleteUserReview = async (req, res) => {
    const reviewId = req.params.reviewId
    const status = await reviewsDao.deleteUserReview(reviewId)
    res.json(status)
}
module.exports = (app) => {
    app.get('api/users/alluserreviews', findAllUserReviews);
    app.get('api/users/reviews/uid', findUserReviewsById);
    app.get('api/users/reviews/email', findUserReviewsByEmail);
    app.post('api/users/userReviews', addUserReview);
    app.delete('api/users/userReviews', deleteUserReview);
}