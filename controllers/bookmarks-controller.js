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
    const currUser = await bookmarksDao.findUserBookmarksById(userId)
    if (!currUser) {
        const user = req.body
        await bookmarksDao.createUserBookmarks(user)
    }
    const check = await bookmarksDao.addUserBookmark(userId, businessId)
    const updatedUserBookmarks = await bookmarksDao.findUserBookmarksById(userId)
    res.json(check)
}

const deleteUserBookmark = async (req, res) => {
    const userId = req.params['uid']
    const businessId = req.params['bid']
    const status = await bookmarksDao.deleteUserBookmark(userId, businessId)
    res.json(status)
}

module.exports = (app) => {
    app.get('/api/bookmarks', findAllUserBookmarks);
    app.get('/api/bookmarks/user/:uid', findUserBookmarksById);
    app.get('/api/bookmarks/email/:email', findUserBookmarksByEmail);
    app.post('/api/bookmarks/:uid/:bid', addUserBookmark);
    app.delete('/api/bookmarks/:uid/:bid', deleteUserBookmark);
}