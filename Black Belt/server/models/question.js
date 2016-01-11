//Setup datbase
var mongoose = require("mongoose");
var QuestionSchema = new mongoose.Schema({
    question: String,
    answers: [],
    created_at: {type: Date, default: new Date().toString()}
})
var Question = mongoose.model('Question', QuestionSchema);