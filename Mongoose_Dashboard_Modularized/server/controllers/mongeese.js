//Setup
var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');

//export module
module.exports = {
    show_all: function(req, res) {
        Mongoose.find({}, function(err, mongeese) {
            res.render('index', {mongeese: mongeese});
        })
    },
    show_one: function(req, res) {
        Mongoose.findOne({_id: req.params.id}, function(err, mongoose_found) {
            res.render('mongoose', {mongoose: mongoose_found});
        })
    },
    edit: function(req, res) {
        Mongoose.findOne({_id: req.params.id}, function(err, mongoose_found) {
            res.render('edit', {mongoose: mongoose_found});
        })
    },
    create: function(req, res) {
        var mongoose = new Mongoose({name: req.body.name, age: req.body.age});
        mongoose.save(function(err) {
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/');
            }
        })
    },
    update: function(req, res) {
        Mongoose.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err) {
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/');
            }
        })
    },
    destroy: function(req, res) {
        Mongoose.remove({_id: req.params.id}, function(err) {
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/');
            }
        })
    }
}