const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://yelpproject:codingisfun@cluster0.cf2bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));
app.use(express.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

require("./controllers/users-controller")(app);
require("./controllers/bookmarks-controller")(app);
require("./controllers/user-following-controller")(app);
require("./controllers/auth-controller")(app);
require("./controllers/user-reviews-controller")(app);
require("./controllers/user-checkins-controller")(app);

app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(process.env.PORT || 4000);