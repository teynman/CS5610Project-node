const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://yelpproject:codingisfun@cluster0.cf2bs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(express.json());

app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000);