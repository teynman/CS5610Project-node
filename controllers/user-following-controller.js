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
    const insertedFollowing = await followingDao.addUserFollowing(userId, followingId)
    res.json(insertedFollowing)
}

const deleteUserFollowing = async (req, res) => {
    const userId = req.params['uid']
    const followingId = req.params['fuid']
    const status = await followingDao.deleteUserFollowing(userId, followingId)
    res.json(status)
}

module.exports = (app) => {
    app.get('/api/users/alluserfollowings', findAllUserFollowings);
    app.get('/api/users/:uid/following', findUserFollowingById);
    app.get('/api/users/:email/following', findUserFollowingByEmail);
    app.post('/api/users/:uid/following/:fuid', addUserFollowing);
    app.delete('/api/users/:uid/following/:fuid', deleteUserFollowing);
}