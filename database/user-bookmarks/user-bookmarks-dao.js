const userBookmarksModel = require('./user-bookmarks-model');

const findAllUserBookmarks = () => {
    return userBookmarksModel.find()
}

const findUserBookmarksById = (uid) => {
    return userBookmarksModel.findOne({uid})
}

const findUserBookmarksByEmail = (email) => {
    return userBookmarksModel.findOne({email})
}

const createUserBookmarks = (userBookmark) => {
    return userBookmarksModel.create(userBookmark)
}

const addUserBookmark = (uid, bid) => {
    return userBookmarksModel.update({uid: uid}, {
        $addToSet: {
            bookmarks: bid
        },
    });
}

const deleteUserBookmark = (uid, bid) => {
    return userBookmarksModel.updateOne({uid: uid}, {
        $pull: {
            bookmarks: bid
        },
    });
}

module.exports = {
    findAllUserBookmarks, findUserBookmarksByEmail, findUserBookmarksById, createUserBookmarks, addUserBookmark,
    deleteUserBookmark
}