// NodeJS 
const path = require('path');

// External
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Internal
// -----------

const app = express();

// Setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use((req, res) => {
    res.render('index');
});

// Connection
mongoose.connect(process.env.DB_URL)
.then((result) => {
    console.log('MongoDB connection established!');
    app.listen(3000);
})
.catch((err) => {
    console.log('MongoDB connection failed!');
    console.log(err);
});
