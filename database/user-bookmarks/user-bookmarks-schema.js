const mongoose = require('mongoose');

const userBookmarksSchema = mongoose.Schema({
    uid: {type: String, required: true, unique: true},
    email: {type: String},
    bookmarks: {type: Array}
}, {collection: 'userBookmarks'});

module.exports = userBookmarksSchema;