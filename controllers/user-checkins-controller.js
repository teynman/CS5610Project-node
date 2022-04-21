const checkinsDao = require("../database/user-checkins/user-checkins-dao");

const findAllUserCheckins = async (req, res) => {
    const allUserReviews = await checkinsDao.findAllUserCheckins()
    res.json(allUserReviews)
}

const findUserCheckinsByUid = async (req, res) => {
    const userId = req.params.uid
    const userReviews = await checkinsDao.findUserCheckinsByUid(userId)
    if (userReviews) {
        res.json(userReviews)
    } else {
        res.sendStatus(404)
    }
}

const findUserCheckinsByEmail = async (req, res) => {
    const email = req.params.email
    const userReviews = await checkinsDao.findUserCheckinsByEmail(email)
    if (userReviews) {
        res.json(userReviews)
    } else {
        res.sendStatus(404)
    }
}

const addUserCheckin = async (req, res) => {
    const userReview = req.body.userReview
    const status = await checkinsDao.createUserCheckin(userReview)
    res.json(status)
}

const deleteUserCheckin = async (req, res) => {
    const checkinId = req.params.checkinId
    const status = await checkinsDao.deleteUserCheckin(checkinId)
    res.json(status)
}
module.exports = (app) => {
    app.get('api/users/allusercheckins', findAllUserCheckins);
    app.get('api/users/checkins/uid', findUserCheckinsByUid);
    app.get('api/users/checkins/email', findUserCheckinsByEmail);
    app.post('api/users/userCheckins', addUserCheckin);
    app.delete('api/users/userCheckins/:checkinId', deleteUserCheckin);
}