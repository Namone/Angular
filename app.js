// Initialize Express
var express = require('express');
var app = express();

// Set up our path
var path = require('path');

// Initialize Mongoose
var mongoose = require('mongoose');

// Initialize Body Parser
var bodyParser = require('body-parser');

// Set up port for our server...
var port = 3000;
mongoose.connect('mongodb://localhost/search-app'); // Connect and use database called meeting

// Set up to use Body Parser by default
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Look for public things (stylesheets)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, function() {
    console.log("Listening on port " + port + "...");
});
