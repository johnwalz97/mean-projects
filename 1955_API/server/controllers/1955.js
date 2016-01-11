//Setup
var mongoose = require('mongoose');
var Person = mongoose.model('Person');

//export module
module.exports = {
    show_all: function(req, res) {
        Person.find({}, function(err, names) {
            res.json(names);
        })
    },
    show_one: function(req, res) {
        Person.find({name: req.params.name}, function(err, name) {
            res.json(name);
        })
    },
    create: function(req, res) {
        var person = new Person({name: req.params.name});
        person.save(function(err) {
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/');
            }
        })
    },
    destroy: function(req, res) {
        Person.remove({name: req.params.name}, function(err) {
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/');
            }
        })
    }
}