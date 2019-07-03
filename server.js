const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

const PORT = 5000;

app.listen(PORT, ()=> console.log("server is up and running on port",PORT))


const db = require('./config/keys');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

mongoose.connect(db.mongoURI, {useNewUrlParser:true }).then(
    ()=> console.log("Databse Connected Successfully")
).catch(err => console.log(err));



