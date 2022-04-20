const userFriendsModel = require('./user-friends-model');

const findAllUserFriends = () => {
    return userFriendsModel.find()
}

const findUserFriendsById = (uid) => {
    return userFriendsModel.findOne({uid})
}

const findUserFriendsByEmail = (email) => {
    return userFriendsModel.findOne({email})
}

const deleteUserFriends = (uid) => {
    return userFriendsModel.deleteOne({uid})
}

module.exports = {
    findAllUserFriends, findUserFriendsByEmail, findUserFriendsById,
    deleteUserFriends
}