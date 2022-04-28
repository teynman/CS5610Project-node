const followingDao = require('../database/user-following/user-following-dao')

const findAllUserFollowings = async (req, res) => {
    const userFollowings = await followingDao.findAllUserFollowing()
    res.json(userFollowings)
}
const findUserFollowingById = async (req, res) => {
    const userId = req.params.uid
    const userFollowing = await followingDao.findUserFollowingById(userId)
    if(userFollowing) {
        res.json(userFollowing)
    } else {
        res.sendStatus(404)
    }
}
const findUserFollowingByEmail = async (req, res) => {
    const email = req.params.email
    const userFollowing = await followingDao.findUserFollowingByEmail(email)
    if(userFollowing) {
        res.json(userFollowing)
    } else {
        res.sendStatus(404)
    }
}

const addUserFollowing = async (req, res) => {
    const userId = req.params['uid']
    const followingId = req.params['fuid']
    const currUser = await followingDao.findUserFollowingById(userId)
    if (!currUser) {
        const user = req.body
        await followingDao.createUserFollowing(user)
    }
    const check = await followingDao.addUserFollowing(userId, followingId)
    const updatedCurrUser = await followingDao.findUserFollowingById(userId)
    res.json(check)
}

const deleteUserFollowing = async (req, res) => {
    const userId = req.params['uid']
    const followingId = req.params['fuid']
    const status = await followingDao.deleteUserFollowing(userId, followingId)
    res.json(status)
}

module.exports = (app) => {
    app.get('/api/followings', findAllUserFollowings);
    app.get('/api/followings/user/:uid', findUserFollowingById);
    app.get('/api/followings/email/:email', findUserFollowingByEmail);
    app.post('/api/followings/:uid/:fuid', addUserFollowing);
    app.delete('/api/followings/:uid/:fuid', deleteUserFollowing);
}