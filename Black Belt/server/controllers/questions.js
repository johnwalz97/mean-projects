//Setup
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

//export module
module.exports = {
    show: function(req, res) {
        Question.find({}, function(err, questions) {
            res.json(questions);
        })
    },
    create: function(req, res) {
        var errors = false;
        if (req.body.question.length < 10) {
            errors = true
            console.log("Question is not valid or is blank");
        }
        for(var i = 0; i < 3; i++){
            if (req.body.answers[i].value.length < 1) {
                errors = true
                console.log("Answers cannot be left blank");
            }
        }
        if (!errors) {
            var question = new Question({question: req.body.question, answers: req.body.answers});
            question.save(function(err) {
                Question.find({}, function (err, questions) {
                    if (err) {
                        console.log(err);
                    } 
                })
            })
        } else {
            res.json({errors: "your entry had errors"});
        }
    },
}