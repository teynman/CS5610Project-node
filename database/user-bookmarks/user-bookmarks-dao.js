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

const addUserBookmark = (uid, bid) => {
    return userBookmarksModel.update({_id: uid}, {
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
    findAllUserBookmarks, findUserBookmarksByEmail, findUserBookmarksById, addUserBookmark,
    deleteUserBookmark
}