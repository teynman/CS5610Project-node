const bookmarksDao = require('../database/user-bookmarks/user-bookmarks-dao')

const findAllUserBookmarks = async (req, res) => {
    const userBookmarks = await bookmarksDao.findAllUserBookmarks()
    res.json(userBookmarks)
}
const findUserBookmarksById = async (req, res) => {
    const userId = req.params.uid
    const userBookmarks = await bookmarksDao.findUserBookmarksById(userId)
    if(userBookmarks) {
        res.json(userBookmarks)
    } else {
        res.sendStatus(404)
    }
}
const findUserBookmarksByEmail = async (req, res) => {
    const email = req.params.email
    const userBookmarks = await bookmarksDao.findUserBookmarksByEmail(email)
    if(userBookmarks) {
        res.json(userBookmarks)
    } else {
        res.sendStatus(404)
    }
}

const addUserBookmark = async (req, res) => {
    const userId = req.params['uid']
    const businessId = req.params['bid']
    const insertedBookmark = await bookmarksDao.addUserBookmark(userId, businessId)
    res.json(insertedBookmark)
}

const deleteUserBookmark = async (req, res) => {
    const userId = req.params['uid']
    const businessId = req.params['bid']
    const status = await bookmarksDao.deleteUserBookmark(userId, businessId)
    res.json(status)
}

module.exports = (app) => {
    app.get('/api/users/alluserbookmarks', findAllUserBookmarks);
    app.get('/api/users/:uid/bookmarks', findUserBookmarksById);
    app.get('/api/users/:email/bookmarks', findUserBookmarksByEmail);
    app.post('/api/users/:uid/bookmarks', addUserBookmark);
    app.delete('/api/users/:uid/bookmarks/:bid', deleteUserBookmark);
}