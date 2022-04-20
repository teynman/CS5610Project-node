const mongoose = require('mongoose');
const userBookmarksSchema = require('./user-bookmarks-schema');

const userBookmarksModel = mongoose.model(
    'UserBookmarksModel', userBookmarksSchema
)

module.exports = userBookmarksModel;