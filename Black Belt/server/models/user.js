//Setup datbase
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    name: String,
    score: {type: Number, min:  0, max: 1},
    created_at: {type: Date, default: new Date().toString()}
})
var User = mongoose.model('User', UserSchema);