//Setup
var mongoose = require('mongoose');
var User = mongoose.model('User');

//export module
module.exports = {
    show: function(req, res) {
        User.find({}, function(err, users) {
            res.json(users);
        })
    },
    find: function(req, res){
        User.findOne({name: req.params.name}, function(err, user) {
            if (user) {
                res.json(user);
            } else if (!user) {
                res.json({error: "not found"})
            } else if (err) {
                console.log(err)
            }            
        })
    },
    create: function(req, res) {
        var user = new User({name: req.body.name, score: 0});
        console.log(user);
        user.save(function(err) {
            User.findOne({name: req.body.name}, function (err, user) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(user)
                }
            })
        })
    },
    update_score: function(req, res) {
        User.update({_id: req.params.id}, {score: req.body.score}, function(err) {
            User.findOne({name: req.params.id}, function (err, user) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(user)
                }
            })
        })
    },
}