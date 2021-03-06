const userFollowingModel = require('./user-following-model');

const findAllUserFollowing = () => {
    return userFollowingModel.find()
}

const findUserFollowingById = (uid) => {
    return userFollowingModel.findOne({uid})
}

const findUserFollowingByEmail = (email) => {
    return userFollowingModel.findOne({email})
}

const createUserFollowing = (userFollowing) => {
    return userFollowingModel.create(userFollowing)
}

const addUserFollowing = (uid, fuid) => {
    return userFollowingModel.update({uid: uid}, {
        $addToSet: {
            following: fuid
        },
    });
}

const deleteUserFollowing = (uid, fuid) => {
    return userFollowingModel.updateOne({uid: uid}, {
        $pull: {
            following: fuid
        },
    });
}

module.exports = {
    findAllUserFollowing, findUserFollowingByEmail, findUserFollowingById, createUserFollowing, addUserFollowing,
    deleteUserFollowing
}