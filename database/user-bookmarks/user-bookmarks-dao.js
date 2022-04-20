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

const deleteUserBookmarks = (uid) => {
    return userBookmarksModel.deleteOne({uid})
}

module.exports = {
    findAllUserBookmarks, findUserBookmarksByEmail, findUserBookmarksById,
    deleteUserBookmarks
}