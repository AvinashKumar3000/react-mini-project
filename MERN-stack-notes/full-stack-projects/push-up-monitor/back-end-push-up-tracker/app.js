const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./user-router');
const mongoose = require("mongoose");

// connection code for mongodb.
const USERNAME = "sample";
const PASSWORD = "g6OJ2GHqrwZYWJpk";
const DB_NAME = "sample_db";
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@samplecluster.g2aijmc.mongodb.net/${DB_NAME}`; // get this cloud mongodb. so that we can host.
mongoose.connect(URL);
mongoose.connection.on('connected', () => {
    console.log("mongodb is connected.");
});

const app = express();
// middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/gym', userRouter);
app.all('/', (req, res) => {
    res.send("application is working fine.");
})
module.exports = app;