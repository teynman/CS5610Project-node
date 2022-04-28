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
    return userBookmarksModel.updateOne({_id: uid}, {
        $addToSet: {
            bookmarks: bid
        },
    });
}

const deleteUserBookmark = (uid, bid) => {
    return userBookmarksModel.updateOne({_id: uid}, {
        $pullAll: {
            bookmarks: bid
        },
    });
}

module.exports = {
    findAllUserBookmarks, findUserBookmarksByEmail, findUserBookmarksById, createUserBookmarks, addUserBookmark,
    deleteUserBookmark
}