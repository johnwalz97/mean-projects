//Variables
var mongoose = require('mongoose');
var Quote = mongoose.model('Person');
var people = require("../controllers/1955.js");

//export module
module.exports = function(app){
    //Routes
    //all people
    app.get('/', function(req, res) {
        people.show_all(req, res);
    })
    //one person
    app.get('/:name', function(req, res) {
        people.show_one(req, res);
    })
    //new person
    app.get('/new/:name', function(req, res) {
        people.create(req, res);
    })
    //remove person
    app.get('/remove/:name', function(req, res) {
        people.destroy(req, res);
    })
}