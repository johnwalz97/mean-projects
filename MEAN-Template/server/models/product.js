//Setup datbase
var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
    name: String,
    created_at: {type: Date, default: new Date().toString()}
})
var Product = mongoose.model('Product', ProductSchema);