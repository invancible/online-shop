// NodeJS 
const path = require('path');

// External
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Internal
const mainRoutes = require('./routes/main/mainRoutes');
const adminRoutes = require('./routes/admin/adminRoutes');

const app = express();

// Setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// TODO: add admin functionality
app.use('/admin', adminRoutes);
app.use(mainRoutes);

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
