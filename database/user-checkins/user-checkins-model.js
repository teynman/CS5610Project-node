const mongoose = require('mongoose');
const userCheckinsSchema = require('./user-checkins-schema');

const userCheckinsModel = mongoose.model(
    'UserCheckinsModel', userCheckinsSchema
)

module.exports = userCheckinsModel;