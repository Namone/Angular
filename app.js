// Initialize Express
var express = require('express');
var app = express();

// Set up our path
var path = require('path');

// Initialize Mongoose
var mongoose = require('mongoose');

// Initialize Body Parser
var bodyParser = require('body-parser');

// Initialize router(s)
var appRouter = require('./routes/app.routes');

// Set up port for our server...
var port = 3000;
mongoose.connect('mongodb://localhost/meeting'); // Connect and use database called meeting

// Set up to use Body Parser by default
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Tell the app where our view folder is - also set up HBS
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs');

// Look for public things (stylesheets)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, function() {
    console.log("Listening on port " + port + "...");
});

// For the home root, use our main app router
app.use('/', appRouter);

// 404 Catching
app.use(function(req, res, next) {
    res.render('home');
});

