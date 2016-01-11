//Setup datbase
var mongoose = require("mongoose");
var MongooseSchema = new mongoose.Schema({
    name: String,
    age: String
})
var Mongoose = mongoose.model('Mongoose', MongooseSchema);