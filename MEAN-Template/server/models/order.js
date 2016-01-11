//Setup datbase
var mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema({
    customer: String,
    product: String,
    quantity: String,
    ordered_at: {type: Date, default: new Date().toString()}
})
var Order = mongoose.model('Order', OrderSchema);