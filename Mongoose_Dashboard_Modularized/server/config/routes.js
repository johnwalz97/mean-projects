//Variables
var mongoose = require('mongoose');
var Mongoose = mongoose.model('Mongoose');
var mongeese = require("../controllers/mongeese.js");

//export module
module.exports = function(app){
    //Routes
    //index page -- show all mongeese
    app.get('/', function(req, res) {
        mongeese.show_all(req, res);
    })
    //show create page for new mongoose
    app.get('/mongoose', function (req, res) {
        res.render("new");
    })
    //show one mongoose
    app.get('/mongoose/:id', function(req, res) {
        mongeese.show_one(req, res);
    })
    //Edit mongoose
    app.get('/edit/:id', function (req, res) {
        mongeese.edit(req, res);
    })
    //Delete mongoose
    app.get('/destroy/:id', function (req, res) {
        mongeese.destroy(req, res);
    })
    //create quote
    app.post('/mongooses', function(req,res){
        mongeese.create(req, res);
    })
    //update quote
    app.post('/mongoose/:id', function(req,res){
        mongeese.update(req, res);
    })
}