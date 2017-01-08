var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;
var unique = require('mongoose-unique-validator');

var SALT_WORK_FACTOR = 10; // character length of hash key (for password)

var userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, bcrypt: true, required: trie }
});

userSchema.plugin(unique);

module.exports = mongoose.model('User', userSchema);