const userCheckinsModel = require('./user-checkins-model');

const findAllUserCheckins = () => {
    return userCheckinsModel.find()
}

const findUserCheckinsByUid = (uid) => {
    return userCheckinsModel.find({uid})
}

const findUserCheckinsByEmail = (email) => {
    return userCheckinsModel.find({email})
}

const findUserCheckinsByBusiness = (bid) => {
    return userCheckinsModel.find({businessId: bid})
}

const createUserCheckin = (userCheckin) => {
    return userCheckinsModel.create(userCheckin)
}

const deleteUserReview = (id) => {
    return userCheckinsModel.deleteOne({_id: id})
}

module.exports = {
    findAllUserCheckins, findUserCheckinsByBusiness, findUserCheckinsByEmail,
    findUserCheckinsByUid, createUserCheckin, deleteUserReview
}